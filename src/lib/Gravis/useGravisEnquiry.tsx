import React from 'react'
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'

export const GRAVIS_WORKSPACE_ID = process.env.NEXT_PUBLIC_GRAVIS_WORKSPACE_ID
export enum PartitionEnum {
  PARTITION = 'PARTITION',
}
export enum EnquiryStatusEnum {
  NEW = 'NEW',
  SPAM = 'SPAM',
  PENDING = 'PENDING',
  UNQUALIFIED = 'UNQUALIFIED',
  QUALIFIED = 'QUALIFIED',
  RESOLVED = 'RESOLVED',
}
export enum EnquiryTypeEnum {
  FEEDBACK = 'FEEDBACK',
  EVENT = 'EVENT',
  GENERAL = 'GENERAL',
  PRESS = 'PRESS',
}

export const CREATE_ENQUIRY_GQL = gql`
  mutation CreateEnquiry($input: CreateEnquiryInput!, $condition: ModelEnquiryConditionInput) {
    createEnquiry(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      partition
      workspaceID
      name
      email
      mobile
      content
      status
      type
      owner
    }
  }
`

/**
 * useGravisEnquiry
 * Send enquiry to Gravis CMS
 */
export const useGravisEnquiry = () => {
  const [createEnquiry] = useMutation(CREATE_ENQUIRY_GQL, {})

  const handleCreateEnquiry = (input) => {
    return createEnquiry({
      variables: {
        input: {
          workspaceID: GRAVIS_WORKSPACE_ID,
          partition: PartitionEnum.PARTITION,
          status: EnquiryStatusEnum.NEW,
          type: EnquiryTypeEnum.GENERAL,
          ...input,
        },
      },
    })
  }

  return {
    handleCreateEnquiry,
  }
}
