import { defineConfig } from '@umijs/max'
import dotEnv from 'dotenv'
import { dirname } from 'path'
import { autoImportPlugin } from './auto-import'
import defaultSettings from './defaultSettings'
import proxy from './proxy'
import routes from './routes'

const isUmiProd = process.env.UMI_ENV === 'prod'

// support multiple env https://github.com/nuxt-community/dotenv-module/issues/59#issuecomment-814245372
const getEnv = dotEnv.config({
  path: isUmiProd
    ? `${dirname(__dirname)}/.env`
    : `${dirname(__dirname)}/.env.${process.env.UMI_ENV}`, // default is env (prod)
})
/**
 * !check is exist env and prevent accidentally deploy to server
 */
const appEnv = getEnv?.parsed?.UMI_ENV || 'prod' // default is env (prod) if provide UMI_ENV=prod will error stick only prod environment

if (!appEnv) {
  throw new Error(
    `===========> .env seem not provide ${appEnv} <=================`,
  )
} else {
  console.log('========== APP Environment ========>', appEnv)
  console.log('========== NODE Environment ========>', process.env.NODE_ENV)
}

// all UMI config here
export default defineConfig({
  npmClient: 'pnpm',
  define: {
    'process.env.version': '1.1.0',
    ...(getEnv.parsed ?? {}),
    UMI_ENV: getEnv.parsed?.UMI_ENV,
  },
  // targets: {
  //   ie: 11,
  // },
  // Do not recognize files in the components and models directories as routes
  conventionRoutes: {
    exclude: [/\/components\//, /\/models\//],
  },
  // title: '',
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    ...defaultSettings,
  },
  base: '/',
  // Add the attribute crossorigin="anonymous" to all non-third-party scripts, usually used to count script errors.
  crossorigin: false,
  //Enable TypeScript compile-time type checking
  // forkTSChecker: {},
  //whether the hash configuration allows the generated file to contain a hash suffix, which is usually used for incremental publishing and avoiding browser loading cache
  hash: true,
  proxy,
  // Routing is not configured, the default is conventional routing
  routes,
  // alias configuration
  alias: {},
  ignoreMomentLocale: true,

  // Configure additional link tags.
  // links: [],
  /**
   * Configure additional CSS.
   * styles: [
   *`body { color: red; }`,
   * `https://a.com/b.css`,
   * ],
   */
  styles: [
    // 'https://lib.baomitu.com/antd/4.9.1/antd.min.css'
  ],
  //The configuration requires the minimum version of compatible browsers, and polyfills and syntax conversions will be automatically introduced.
  //Configure the theme, in fact, configure the less variable.
  /**
   * https://ant.design/docs/react/customize-theme-cn
   * theme: {
   * '@primary-color': '#1DA57A',
   *},
   */
  // theme,
  //targets
  //Configure the threshold of base64 compilation for image files. The default is 10000 bytes, less than it will be compiled into base64 encoding, otherwise a separate file will be generated
  inlineLimit: 10000,
  // Configure additional umi plugins.
  plugins: [],

  chainWebpack(config: any, {}: any) {
    // when need to import outside src
    // config.module.rule('ts-in-node_modules').include.clear();
    //Introduce global public method
    // config.plugin('$global').use(
    // //@ts-ignore
    // new webpack. ProvidePlugin({
    // $global: [resolve(`src/utils/globalUtils.ts`), 'default'],
    // }),
    // );

    config.plugin('unplugin-icons').use(
      require('unplugin-icons/webpack')({
        compiler: 'jsx',
        jsx: 'react',
      }),
    )
    config.plugin('unplugin-auto-import').use(autoImportPlugin())

    return config
  },
  // 使用 antd

  antd: {},

  //配置 html 的输出形式，常用来解决没有服务端情况下，页面的 SEO 和首屏渲染提速
  // exportStatic: {},
  request: {
    /**
     * The build-time configuration can be configured for useRequest dataField, the default value of which is data. The main purpose of this configuration is to facilitate the direct consumption of data by useRequest. If you want to get backend raw data when consuming data, you need to configure dataField as ''.
     */
    //@ts-ignore
    // dataField: 'data',
  },
  // 国际化配置 https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: true,
  },
  //加载dumi文档配置
  // ...dumi,
  moment2dayjs: {},
  //登录以后权限不刷新
  access: {},
  model: {},
  initialState: {},
  tailwindcss: {},
  autoprefixer: {},
  valtio: {},
  clientLoader: {},
  svgr: {},
  routePrefetch: {},
  manifest: {},
  // not stable yet
  // lowImport:{}
})
