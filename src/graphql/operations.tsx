import * as Types from './schemas'

export type PostQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type PostQuery = {
  __typename?: 'Query'
  post?: {
    __typename?: 'Post'
    id?: string | null
    title?: string | null
    body?: string | null
  } | null
}
