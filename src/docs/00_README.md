# description

> 1. Umijs and its ecology Scaffolding for secondary packaging.
> 2. The business resources and business-related configuration in the project need to be adjusted and supplemented according to the business.

## Framework Features

> 1. Framework idea: Make development easier, upgrade from writing-based development to development-configured comprehensive development, greatly improve development efficiency and development unity, and configure one page and one json to complete.
> 1. Component idea: The business component is a component based on the UI presentation form of the project business, with specific business nature and close to the business itself.
> 1. Commonality: have the same business commonality (for example: a company has multiple management backgrounds, the UI presentation is basically the same, and the same components can be used).
> 1. Scaffolding encapsulates components such as forms and tables, so that the writing business can be configured.

## Project Architecture

Umi (React + AntD + TypeScript)

Umi website: [https://umijs.org/](https://umijs.org)

React official website: [https://reactjs.org](https://reactjs.org)

AntDesign website: [https://ant.design](https://ant.design)

AntDesign-Pro: [https://pro.ant.design/docs/overview](https://pro.ant.design/docs/overview)

AntDesign-Procomponents: [https://procomponents.ant.design/](https://procomponents.ant.design/)

Less official website: [http://lesscss.cn/](http://lesscss.cn/)

TypeScript official website: [https://www.tslang.cn/](https://www.tslang.cn/)

## vscode plugin installation

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) Code Formatting Style Verification

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Code formatting style validation auto-completion

[stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) style style validation

[git-commit-plugin](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin) Submit git copywriting tool

### vscode local settings.json

```json
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
```

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

## Development

Local development environment: `pnpm start`

Online development environment: `pnpm build:dev`

Online testing environment: `pnpm build:testing`

Online official environment: `pnpm build`
