import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const cache: InMemoryCache = new InMemoryCache({ addTypename: false })
const httpLink = new HttpLink({
  uri: NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
  headers: {
    // Authorization: `Bearer ${getToken()?.token}`,
  },
})

const setAuthLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // 'x-api-key': getToken()?.refreshToken,
      // Authorization: `Bearer ${getToken()?.token}`,
    },
  }
})

const apolloConfig = new ApolloClient({
  cache,
  link: ApolloLink.from([
    // eslint-disable-next-line consistent-return
    onError(({ graphQLErrors, networkError }) => {
      const err =
        graphQLErrors &&
        (graphQLErrors?.[0]?.extensions
          ?.response as unknown as typeof graphQLErrors[0]['extensions'] & {
          message: string
          error: string
          statusCode: number
        })

      // console.log('err', err);
      if (err?.statusCode !== 401 && err?.statusCode !== 403 && err?.message) {
        setTimeout(() => {
          _notification.error({
            message: err?.error,
            description: err?.message,
          })
        }, 50)
      }

      // User access token has expired
      // if (err?.statusCode === 403) {
      //   clearToken()
      //   localStorage.clear()
      //   history.replace({
      //     pathname: ROUTE.auth.login.index,
      //     query: { isExpired: String(QueryParamEnum.isExpired) },
      //   })
      // }

      // if (err?.statusCode === 401) {
      //   // We assume we have both tokens needed to run the async request

      //   // Let's refresh token through async request
      //   return new Observable((observer) => {
      //     getAuthTokenApi()
      //       .then((refreshResponse) => {
      //         const newToken = refreshResponse?.data?.authToken
      //         // console.log('requestApiKey', newToken);

      //         operation.setContext(({ headers = {} }) => ({
      //           headers: {
      //             // Re-add old headers
      //             ...headers,
      //             // Switch out old access token for new one
      //             'x-api-key': newToken,
      //           },
      //         }))

      //         const subscriber = {
      //           next: observer.next.bind(observer),
      //           error: observer.error.bind(observer),
      //           complete: observer.complete.bind(observer),
      //         }

      //         // Retry last failed request
      //         forward(operation).subscribe(subscriber)
      //         setToken({ ...getToken(), refreshToken: newToken })
      //       })

      //       .catch((error) => {
      //         // No refresh or client token available, we force user to login
      //         observer.error(error)
      //       })
      //   })
      // }
      if (networkError) {
        return console.log(`[Network error]: ${networkError}`)
      }
    }),
    setAuthLink.concat(httpLink),
  ]),
  connectToDevTools: true,
  defaultOptions: {
    query: { fetchPolicy: 'no-cache' },
    watchQuery: { fetchPolicy: 'no-cache' },
  },
})

export default apolloConfig
