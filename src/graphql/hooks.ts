import * as Types from './operations'

import * as Apollo from '@apollo/client'
import { gql } from '@apollo/client'
const defaultOptions = {} as const

export const PostDocument = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.PostQuery,
    Types.PostQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.PostQuery, Types.PostQueryVariables>(
    PostDocument,
    options,
  )
}
export function usePostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.PostQuery,
    Types.PostQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Types.PostQuery, Types.PostQueryVariables>(
    PostDocument,
    options,
  )
}
export type PostQueryHookResult = ReturnType<typeof usePostQuery>
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>
export type PostQueryResult = Apollo.QueryResult<
  Types.PostQuery,
  Types.PostQueryVariables
>
