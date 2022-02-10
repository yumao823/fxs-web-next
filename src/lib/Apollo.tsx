import { useMemo } from 'react'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link'
import { setContext } from 'apollo-link-context'
import Amplify from '@aws-amplify/core'
import { awsConfig } from '../app/config'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

const endpoint = {
  url: awsConfig.aws_appsync_graphqlEndpoint,
  region: awsConfig.aws_appsync_region,
}
const apiKeyConfig: any = {
  ...endpoint,
  auth: {
    type: awsConfig.aws_appsync_authenticationType,
    apiKey: awsConfig.aws_appsync_apiKey,
  },
}
const subscriptionHandshakeLink: any = createSubscriptionHandshakeLink(apiKeyConfig)

const hybridAuthLink: any = setContext(async (_, { headers }) => {
  try {
    const Auth = (await import('@aws-amplify/auth')).default
    return {
      headers: {
        ...headers,
        authorization: (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
    }
  } catch (err) {
    return {
      headers: {
        ...headers,
        'X-Api-Key': awsConfig.aws_appsync_apiKey,
      },
    }
  }
})

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link: ApolloLink.from([hybridAuthLink, subscriptionHandshakeLink]),
    cache: new InMemoryCache(),
  })
}

let apolloClient

export function initializeApollo(initialState = null) {
  // eslint-disable-next-line no-underscore-dangle
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    // eslint-disable-next-line no-param-reassign
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export const useApollo = (pageProps) => {
  Amplify.configure(awsConfig)
  const state = pageProps?.[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}

export const withApollo = (options: any = {}) => (Component) => (props) => {
  const { layout: Layout } = options
  const { pageProps } = props

  const apolloClient = useApollo(pageProps)
  const componentJSX = <Component {...props} />

  return (
    <ApolloProvider client={apolloClient}>{Layout ? <Layout>{componentJSX}</Layout> : componentJSX}</ApolloProvider>
  )
}
