---
nav:
  title: Docs
  order: 1

toc: content
title: Get Started
---

# React-Next-Admin

The next generation of admin enterprise applications with awesome architecture, x3 time faster development and better performance `Preview:`<https://react-admin-pro.netlify.app>

## Features

- [Umi](https://umijs.org/) - React Framework: File-based routing(V6), auto importing, plugins(role/i18n etc), micro-front-end etc.
- 💡 TypeScript, of course 100%
- ✅ State management: Umi Model(context with selector) / Valtio (Proxy Base)
- ✅ Apollo GraphQL: auto generator base on gql schema
- 🎨 UnoCSS - The instant on-demand atomic CSS engine (Uno,Tailwind,Bootstrap...)
- 😃 Use UnoCSS icons in Pure CSS, small bundles
- 💎 Antd V5: Beautiful, Fast, enterprise UI components
- ✅ Antd Procomponents - Template component, Layout/Skeleton/Table/Form/Validation/Charts
- 📱 Responsive: Designed for variable screen sizes
- 🎨 Theming and layout: Customizable with theme editor and layout editor
- 💎 [AHooks](https://ahooks.js.org/hooks): high-quality & reliable React Hooks library
- 🌐 International: Built-in i18n
- ⚙️ Best Practices: Solid workflow to make your code healthy
- Eslint & Prettier: lint system to improve our code clean and consistency
- ✅ Husky & Commitlint: commits with rule Commit convention (feat|chore|fix..: 'first commit' )
- ✅ Custom VsCode Snippets
- ✅ Mock development: Easy to use mock development solution
- ✅ UI Test (cypress,Jest): Fly safely with unit and e2e tests
- ✅ Page Tab: multi-page navigation like chrome with persistent support
- ✅ Documents/DevTool: use Dumi for writing doc and Floating dev tools browsing view in one place

## TODO

- CRUD components
-

## Teach Stack & Preparation

- [node](http://nodejs.org/) and [git](https://git-scm.com/) - Project development environment
- [Webpack MFSU](https://umijs.org/blog/mfsu-faster-than-vite) - Familiar with Webpack features
- [React](https://reactjs.org) - React] official website:
- [TypeScript](https://www.typescriptlang.org/) - Familiar with the basic syntax of `TypeScript`
- [Es6+](http://es6.ruanyifeng.com/) - Familiar with es6 basic syntax
- [Vue-Router-Next](https://next.router.vuejs.org/) - Familiar with the basic use of vue-router
- [Ant-Design V5](https://ant.design) - Enterprise UI library
- [Antd procomponents](https://procomponents.ant.design/) - Antd procomponent

## file structure

```ts
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

### Use Gitpod

Open the project in Gitpod (free online dev environment for GitHub) and start coding immediately.

[![Open in Gitpod] soon

## Development

Local development environment: `pnpm start`

Online development environment: `pnpm build:dev`

Online testing environment: `pnpm build:testing`

Online production environment: `pnpm build`

## Browsers support

Modern browsers.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## Contributing

Any type of contribution is welcome, here are some examples of how you may contribute to this project:

- Use `React Next Admin` in your daily work.
- Submit [issues](https://github.com/next-dev-team/react-next-admin/issues) to report bugs or ask questions.

## MIT License
