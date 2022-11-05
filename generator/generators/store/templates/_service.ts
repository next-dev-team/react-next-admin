import { PostDocument } from '@/graphQl/hooks';
import { PostQuery, PostQueryVariables } from '@/graphQl/operations';
import { requestGraphql } from '@/utils';

export const getAsyncNameGraph = async (variables: PostQueryVariables) => {
  const res = await requestGraphql<PostQuery>({
    gqlDocument: PostDocument,
    variables,
  });
  return res?.data;
};
