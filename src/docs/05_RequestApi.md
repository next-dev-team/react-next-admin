# Request to server

### Usage of axios with graph document

```tsx
import { PostDocument } from '@/graphQl/hooks'
import { print } from 'graphql'

const getPost = async (variables?: PostQueryVariables) => {
  const res = requestAxios.post('', {
    query: print(PostDocument),
    variables,
  })
  return res
}
```

### Use it direct in component

```tsx
const Homepage = () => {
  useEffect(() => {
    getPost().then((res) => {
      console.log(res)
    })
  }, [])

  return <h1>Hello</h1>
}
```

### Usage of requestAxios with rest api

```tsx

```
