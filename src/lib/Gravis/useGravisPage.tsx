import React from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'

/**
 * printNewLineContent
 * https://forum.freecodecamp.org/t/newline-in-react-string-solved/68484
 * @param content
 */
export const printNewlineContent = (content: string) => content.split('\n').map((str) => <p>{str}</p>)

/**
 * isJSON
 * Test whether a variable is a JSON string
 * @link https://stackoverflow.com/questions/9804777/how-to-test-if-a-string-is-json-or-not
 * @param str
 */
export const isJSON = (str: unknown): boolean => {
  if (typeof str !== 'string') return false
  try {
    const result = JSON.parse(str)
    const type = Object.prototype.toString.call(result)
    return type === '[object Object]' || type === '[object Array]'
  } catch (err) {
    return false
  }
}

export const GRAVIS_WORKSPACE_ID = process.env.NEXT_PUBLIC_GRAVIS_WORKSPACE_ID

export const GET_PAGE_GQL = gql`
  query GetPage($workspaceID: ID!, $pathname: String!) {
    getPage(workspaceID: $workspaceID, pathname: $pathname) {
      id
      createdAt
      updatedAt
      partition
      workspaceID
      pathname
      title
      sections
      owner
    }
  }
`

export interface PageSectionInterface {
  key: string
  overline?: string
  title?: string
  title2?: string
  subtitle?: string
  content?: string
  items?: PageSectionInterface[]
}

export interface PageInterface {
  title?: string
  sections?: PageSectionInterface[]
}

/**
 * useGravisPage
 * Fetch data from Gravis CMS
 */
export const useGravisPage = () => {
  const router = useRouter()
  const { pathname } = router

  const onQuery = useQuery(GET_PAGE_GQL, {
    variables: { workspaceID: GRAVIS_WORKSPACE_ID, pathname },
  })

  const { data } = onQuery

  // Prepare page
  const page = data?.getPage
  const fallbackPage = { sections: [] }
  const getParsedPage = (page) => {
    if (!page) return fallbackPage

    return Object.entries(page).reduce((acc, [key, value]) => {
      // Handle case where page returns data but sections is not filled up (null)
      const isNullSections = key === 'sections' && value === null
      if (isNullSections) return { ...acc, [key]: [] }

      const nextValue = isJSON(value) ? JSON.parse(value as string) : value
      return { ...acc, [key]: nextValue }
    }, fallbackPage)
  }
  const nextPage: PageInterface = getParsedPage(page) || fallbackPage

  // Prepare section utils
  const getSection = (key: string): PageSectionInterface | Record<string, unknown> => {
    const section = nextPage.sections.find((section) => section.key === key)
    return section || {}
  }

  return {
    ...onQuery,
    page: nextPage,
    getSection,
  }
}
