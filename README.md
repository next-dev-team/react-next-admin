---
Author: Sila Rim
Generate: 'This file was generated to edit in src/docs/xxx.md then run command yarn gen:docs'
License: MIT
---

# frame description

> 1. Umijs and its ecology Scaffolding for secondary packaging.
> 2. The business resources and business-related configuration in the project need to be adjusted and supplemented according to the business.

# Framework Features

> 1. Framework idea: Make development easier, upgrade from writing-based development to development-configured comprehensive development, greatly improve development efficiency and development unity, and configure one page and one json to complete.
> 2. Component idea: The business component is a component based on the UI presentation form of the project business, with specific business nature and close to the business itself.
> 3. Commonality: have the same business commonality (for example: a company has multiple management backgrounds, the UI presentation is basically the same, and the same components can be used).
> 4. Complete document description: The dumi document extension is used, so that the project description, business description, component description, and resource description can be quickly learned and understood.
> 5. Scaffolding encapsulates components such as forms and tables, so that the writing business can be configured.

## Project Architecture

Umi (React + AntD + Less + TypeScript + dumi)

Umi Chinese website: [https://umijs.org/zh-CN/docs/](https://umijs.org/zh-CN/docs)

React official website: <https://react.docschina.org/>

AntDesign Chinese website: <https://ant.design/index-cn>

AntDesign-Pro: <https://beta-pro.ant.design/index-cn/>

AntDesign-Procomponents: <https://procomponents.ant.design/>

Less official website: <http://lesscss.cn/>

TypeScript official website: <https://www.tslang.cn/>

Dumi Chinese website: <https://d.umijs.org/zh-CN/>

## Component description (must see the entire description)

Component documentation, instructions for use: [xxxxx/\~doc](xxxxx/~doc) See the documentation for the path

## vscode plugin installation

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) Code Formatting Style Verification

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Code formatting style validation auto-completion

[stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) style style validation

[git-commit-plugin](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin) Submit git copywriting tool

### vscode local settings.json

    {
      "editor.formatOnSave": true,
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "[javascript]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      // search filter
      "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "**/dist": true
      },
      "GitCommitPlugin.CustomCommitType": [
        {
          "label": "💥 feat",
          "detail": "add 'comments' option"
        },
        {
          "label": "🐛 fix",
          "detail": "fix some bug"
        },
        {
          "label": "📝 docs",
          "detail": "add some docs"
        },
        {
          "label": "🌷 UI",
          "detail": "better styles"
        },
        {
          "label": "🏰 chore",
          "detail": "Made some changes to the scaffolding"
        },
        {
          "label": "🌐 locale",
          "detail": "Made a small contribution to internationalization"
        }
      ]
    }

## file structure

```txt
├── README.md //Description file
├── config //Configuration directory
│ ├── config.dev.ts //Online development environment configuration file
│ ├── config.local.ts //local development environment configuration file
│ ├── config.pro.ts //Online official environment configuration file
│ ├── config.testing.ts //Online test environment configuration file
│ ├── config.ts //General configuration entry file
│ ├── layout.ts //background layout configuration file
│ ├── dumi.ts //dumi document configuration
│ ├── theme.ts //Global style variable configuration
│ ├── proxy.ts //Proxy configuration file
│ └── routes.ts //routing configuration file
├── docs //public documentation directory
│ └── demo.md //document description example
├── mock //mock mock data directory
│ └── api.ts
├── package.json
├── public
│ └── favicon.ico
├── src
│ ├── typings.d.ts //ts type declaration
│ ├── access.ts //umijs layout permission verification hook
│ ├── app.ts //umijs convention runtime configuration file
│ ├── assets //resource storage directory
│ │ └── images
│ ├── components //Component directory
│ │ ├── ErrorBoundary //Global error capture component
│ │ ├── FormCustom //Form package component
│ │ ├── Exception //Grouping of components such as global exceptions
│ │ ├── RightContent //Top bar component
│ │ └── TableCustom //Table package component
│ ├── global.css //Global style file
│ ├── layouts //The global routing public layout can be used optionally
│ │ └── index.tsx
│ ├── locales //Internationalization
│ │ ├── en-US.js
│ │ └── zh-CN.js
│ ├── models //Global state directory named XXXXModel interface
│ │ ├── globalUserModel.ts //dva writing
│ │ ├── useGlobalModel.ts //umijs writing
│ │ └── useUserModel.ts
│ ├── pages
│ │ └── document.ejs //html file configuration
│ ├── hooks //Custom hooks storage folder
│ │ └── usexxxx.ts
│ ├── services //request directory
│ │ ├── config.ts //Request interceptor
│ │ ├── handler.ts //Request type encapsulation
│ │ └── index.ts //Storage request
│ ├── e2e //Browser test
│ │ ├── baseLayout.e2e.js //public test file format routes automatic test page
│ └── utils //The directory for storing public tools or methods
│ ├── globalUtils.ts //Global method, automatically loaded to the global when webpack compiles
│ ├── utils.test.ts //function test
│ └── index.ts //Business public use separately
├── tests //Automatic test extension writing
└── tsconfig.json //ts configuration file
```

## Bale

Local development environment: `yarn start | npm run start`

Online development environment: `npm run build:dev`

Online testing environment: `npm run build:testing`

Online official environment: `npm run build`

### Address and description

Project logic, interaction, function please read RP

Project GIT: \`\`

Project RP: \`\`

Project UI: [Blue Lake Address]()

Interface API: [Interface Documentation]()

Test JIRA: [JIRA address]()

### Test/Development login path

/login

### account

# LICENSE MIT

# State Management

- Using this custom store base on hookstate with custom plugin that we can access without hook and with hook

- Feature

  - Easy to Use with no need to learn it's almost the same javascript reactive
  - Proxy base prevent unnecessary re-render without using selector
  - Access both hook and out side hook
  - Build-in persist like redux-persist with whitelist or blacklist
  - No need provider call it every where from store to store, store to function or hook
  - Out of box with many plugin
  - Learn more about <https://hookstate.js.org/> or [sample code](https://github.com/avkonst/hookstate/tree/master/docs/demos/todolist/src/components)

## Create Store

```tsx
import { createStore, useGlobalStore } from '@/hooks'

/**
 * this is sample of usage hookstate with persist plugin
 * @link https://hookstate.js.org/docs/global-state
 */

/**
 * init interface
 */
type IInitStore = {
  colorScheme: 'dark' | 'light'
}

//init store value with interface it will use own value as interface
const initWithOwnType = {
  counter: 0,
}

// init store value with interface it will use IInitStore for typing
const initWithType: IInitStore = {
  colorScheme: 'light',
}

// combine init type & own type together
const initStore = {
  ...initWithOwnType,
  ...initWithType,
}

// get combine type for store interface
type IStore = IInitStore & typeof initStore

// get combine store key interface for whitelist typing
type IStoreKey = keyof IStore

// create hook store
const store = createStore(initStore)

// store key and whitelist persist
const wrapStore = wrapGlobalStore<IStoreKey, IStore>({
  key: 'useSampleStore',
  store,
  whitelist: ['counter'],
})

/**
 *  this one is normal custom hook we can return other state too
 *  but make sure following the rule of custom hook
 */

export default function useSampleStore() {
  /**
   * useGlobalStore is a custom hook base on hookstate
   * provide persistence with whitelist or blacklist
   */
  const { state } = useGlobalStore(wrapStore)

  // usage of update state with arg
  const setCounterDecBy = (by = 1) => {
    state.counter.set((p) => p - by)
  }

  return {
    /**
     * usage of get state it will render only state.counter change due to it use proxy base
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
     */
    get counter() {
      return state.counter.get()
    },
    //return func as normal custom hook
    setCounterDecBy,
  } as const
}

//return store type
export type IDemoStore = Partial<ReturnType<typeof useSampleStore>>

//return store type and store for using outside react
export const demoStore = getGlobalStore(wrapStore)
```

## Use store in component

```tsx
import useSampleStore, { demoStore } from '@/store';

// want to access store without using hook and can use every where
const getCounter = demoStore.counter.get();
const setCounter =()=> demoStore.counter.set(10);

export default function HomePage() {
  const { counter } = useSampleStore();

  return <>
     /**
   * this counter get from store also it's persist in local storage
   * it will re-render only counter update
   */
  <h1>{counter}</h1>

// access counter without using hook
  <h1>{getCounter}</h1>

  {/*  setCounterDecBy with arg will update counter cause component re-render */}
  <button onClick={()=>setCounterDecBy(1)> </button>

  {/*  setCounter without using hook */}
  <button onClick={setCounter}> </button>

  </>;
}
```

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

# Locale

### Usage of locales or i18n with i18nNext

### Step 1: add locale key to language file

- `Add locale key` to all language file inside `src/locales/resources/xx.json`

- Translate for english

```json
// resources/en.json
{
  "welcome": "Welcome to Nextjs Next Boilerplate",
  "settings": {
    "currentLanguage": "Current Language : {{locale}}"
  }
}
```

- Translate for khmer

```json
// resources/km.json

{
  "welcome": "សូមស្វាគមន៍មកកាន់ Nextjs Next Boilerplate",
  "settings": {
    "currentLanguage": "ភាសាបច្ចុប្បន្ន : {{locale}}"
  }
}
```

### Step 2: Get Typescript update

- For current issue with typescript not update new key that we have added so we need to reload IDE to get new typescript update.

- For VS-CODE IDE

  - Mac User

```bash
command key + p then input > then input reload then click Reload Window
```

### Step 3: Usage

```tsx
export const HomePage = () => {
// get t func from store if those page already call seSettingsStore
const { t } = useSettingsStore();

//if not yet call seSettingsStore we also can call useTranslation from i18n it self
const { t } = useTranslation();

  return <>
// with dynamic text translate
   <h1> {t('settings.currentLanguage', { locale: 'khmer' })} <h1/>

// with normal translate
   <h1> {t('welcome')} <h1/>
  </>;
};
```

# Typescript tutorial Common use in ReactJS

```tsx
type LiteralUnion<T extends U, U> = T | (U & {})
type someProps = {
  color?: LiteralUnion<'a' | 'b', string>
}
// usage: color="red" or color="#000" it can assign type and string the same time

/**
 * interface: defined interface
 */
export interface IUser {
  name: string
  id: number
  gender: 'MALE' | 'FEMALE'
}

/**
 * type is like is new shorthand syntax for interface and it only a bit feature different
 */
type UserType = {
  name: string
  id?: number
  gender: 'MALE' | 'FEMALE'
}

type AdditionalUserType = {
  school: string
  grade: string
}

// usage:
export const userInfo: IUser = {
  gender: 'FEMALE',
  id: 1,
  name: 'Sila',
}

const getUserInfoFunc = () => userInfo

/**
 * Access to object property type
 *
 * -Ex: if we want to create UserName type we don't need to write type name:string again
 * just access to use existing property in base type
 */
export type UserName = IUser['name']

/**
 * extends: inherits the properties for other type
 * - using & sign to extends type like UserType extends AdditionalUserType...
 */
export type FullUserType = UserType &
  AdditionalUserType & {
    schoolId: string
  }

/**
 * Partial: convert all type to optional
 */

// ex: type will not required name and id
export const partialUser: Partial<UserType> = {
  gender: 'FEMALE',
}

/**
 * Required: convert all type to required
 * -Ex: all type will be required event will put optional in our base type like id in UserType
 */

export const requiredUser: Required<UserType> = {
  id: 1,
  name: 'sila',
  gender: 'MALE',
}

/**
 * Omit: remove property in type
 * - Ex: name is remove from UserType
 */
export const omitUserType: Omit<UserType, 'name'> = {
  gender: 'MALE',
  id: 1,
}

/**
 * Pick: select property in type
 * - Ex: name is remove from UserType
 */
export const pickUserType: Omit<UserType, 'name'> = {
  gender: 'MALE',
  id: 1,
}

/**
 * Exclude: remove property in type
 * - Ex: banana is remove from FruitType
 */
type FruitType = 'coffee' | 'banana'
// excludeFruit can't equal to 'banana'
export const excludeFruit: Exclude<FruitType, 'banana'> = 'coffee'

/**
 * ReturnType get inherited type from func
 *
 * -Ex: returnTypeFunc func bellow will return UserInfoType
 */
export const returnTypeFunc = (fruit: ReturnType<typeof getUserInfoFunc>) => {
  return fruit
}

/**
 * Generic: can be pass new type to type
 */

// U if optional because already assign sting
type dynamicTypeArg<T, U = string> = {
  name: U
  otherInfo: Partial<T>
}

export const dynamicData: dynamicTypeArg<UserType> = {
  name: 'Sila',
  otherInfo: {
    gender: 'FEMALE',
  },
}

// usage in normal func
export const genericArr = <T extends unknown = string>(arg1?: T) => {
  return arg1
}
// usage in arrow func
export function genericFunc<T>(arg: T) {
  return arg
}

// conditional generic

export type GenConditionalType<T = boolean> = T extends boolean
  ? boolean
  : string

export const renderCondition = <T extends unknown>(v: T) => v

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}

const userName = getProperty({ name: 'sila' })
// log(userName.name) ==> "sila"
```

[Back2Top](#nextjs-next-boilerplate)

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

# Generator

this boilerplate also has generator command using `yo generator` inside root folder `generator`

## Available generator command

- `yarn com`: starter for component with auto import to index

```bash
yarn com
```

- `yarn page`: starter for page

```bash
yarn page
```

- `yarn hook`: starter for hook with auto import ot index

```bash
yarn hook
```

- `yarn context`: starter for context with auto import ot index

```bash
yarn context
```

- `yarn enum`: starter for hook with auto import ot index

```bash
yarn enum
```

- `yarn constant`: starter for constant with auto import ot index

```bash
yarn constant
```

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
