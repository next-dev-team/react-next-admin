### Condition rendering

```tsx
import React from 'react'
import { Inspector, InspectParams } from 'react-dev-inspector'

const isDev = process.env.NODE_ENV === 'development'

// condition render wrapper component
const InspectorWrapper = isDev ? Inspector : React.Fragment
const wrapperProps = isDev
  ? {}
  : ({ disableLaunchEditor: false } as InspectParams)

export const Layout = () => {
  return (
    <InspectorWrapper {...wrapperProps}>
      <YourComponent>...</YourComponent>
    </InspectorWrapper>
  )
}
```
