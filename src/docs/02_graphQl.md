# GraphQl

## Step 1: Generate graph QL from xx.gql file

- create .gql file with graph ql schema

  create file xxName.gql in page/template or some where inside src for individual if want to global share should be create in `graphQl/gql/xxxName.gql`

ex: crate graphQl/gql/sample.gql

```tsx
query post($id: ID!) {
  post(id: $id) {
    id
    title
    body
  }
}
```

### Run command to generate there are method

- `Method1:` generate without watch file so we need to generate every create new file or update xxxName.gql

```bash
yarn codegen
```

- `Method2:` generate with watch file so it will generate every create new file or change xxxName.gql it's good for pc or computer has big RAM.

```bash
yarn codegen:watch
```

### Generate output

you will get 3 file there are

- `hooks.tsx` it will generate apollo hook to this file.
- `operations.tsx` this file will generate as type base on operation of schema in xxName.gql.
- `schemas.tsx` this file will generate as the whole type from graph ql api.

### Usage in Apollo Client in component

- The real sample code of using it in store/useDemoStore.ts

- before using it don't forget to wrap withApollo for every page or global in page/app.tsx for this boilerplate already set up as global now it ready to use.

```tsx
/**
 * with GraphQl useQuery
 */
export const HomePage = () => {
  const {
    data: postData,
    loading: loadingPostData,
    refetch: refetchPostData,
  } = usePostQuery({
    variables: {id: 1 }
  });

  return <h1>{postData.title}<h1/>
};
```
