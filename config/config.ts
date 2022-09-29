
import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import routes from './routes';
import theme from './theme';
import { autoImportPlugin } from './webpack/auto-import';
import defaultSettings from './defaultSettings';
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  npmClient: 'pnpm',
  define: {
    'process.env.version': '1.1.0',
  },

  fastRefresh: true,
  srcTranspiler: 'esbuild' as any,
  // targets: {
  //   ie: 11,
  // },

  // title: '',
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  base: '/',
  // 为所有非三方脚本加上 crossorigin="anonymous" 属性，通常用于统计脚本错误。
  crossorigin: false,
  //开启 TypeScript 编译时类型检查
  // forkTSChecker: {},
  //hash配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
  hash: true,
  //生成map文件
  // devtool: 'source-map',
  devtool: 'source-map',
  // 代理配置(跨域处理)
  proxy: proxy,
  //路由 不配置 默认为约定式路由
  routes: routes,
  // 别名配置
  alias: {},
  /**
   * 配置 external
   * 对于一些大尺寸依赖，比如图表库、antd 等，可尝试通过 externals 的配置引入相关 umd 文件，减少编译消耗
   */
  externals: isDev
    ? {
        react: 'React',
        'react-dom': 'ReactDOM',
        // 'react-amap': 'reactAmap',
      }
    : {},
  //配置额外的 meta 标签。数组中可以配置key:value形式的对象。
  // metas:[],
  //配置 <head> 里的额外脚本，数组项为字符串或对象。
  // headScripts:[],
  // 配置 <body> 里的额外脚本。。
  scripts: isDev
    ? [
        // 'https://unpkg.com/react-amap@1.2.6/dist/react-amap.min.js',
        // 'https://lib.baomitu.com/antd/4.9.1/antd.min.js',
        '//unpkg.com/react@18.2.0/umd/react.production.min.js',
        '//unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
      ]
    : [],
  //配置额外的 link 标签。
  // links:[],
  /**
   * 配置额外 CSS。
   * styles: [
   *`body { color: red; }`,
   * `https://a.com/b.css`,
   * ],
   */
  styles: [
    // 'https://lib.baomitu.com/antd/4.9.1/antd.min.css'
  ],
  //配置需要兼容的浏览器最低版本，会自动引入 polyfill 和做语法转换。
  //配置主题，实际上是配 less 变量。
  /**
   * https://ant.design/docs/react/customize-theme-cn
   * theme: {
   * '@primary-color': '#1DA57A',
   *},
   */
  theme: theme,
  //targets
  //配置图片文件是否走 base64 编译的阈值。默认是 10000 字节，少于他会被编译为 base64 编码，否则会生成单独的文件
  inlineLimit: 10000,
  //配置额外的 umi 插件。
  plugins: [],

  //auto import not working with mfsu
  mfsu: isDev,
  // @ts-ignore
  chainWebpack(config: any, { webpack }: any) {
    //引入全局公用方法
    // config.plugin('$global').use(
    //   //@ts-ignore
    //   new webpack.ProvidePlugin({
    //     $global: [resolve(`src/utils/globalUtils.ts`), 'default'],
    //   }),
    // );

    config.plugin('unplugin-icons').use(
      require('unplugin-icons/webpack')({
        compiler: 'jsx',
        jsx: 'react',
      }),
    );
    config.plugin('unplugin-auto-import').use(autoImportPlugin());

    return config;
    // //如果是build下js/css分组
    // if (env === "production") {
    //   config.output
    //     .filename(`js/${config.toConfig().output.filename}`)
    //     .chunkFilename(`js/${config.toConfig().output.chunkFilename}`);

    //   // config.plugin("extract-css").tap((args: any) => {
    //   //   return [
    //   //     {
    //   //       filename: "css/[name].[contenthash:8].css",
    //   //       chunkFilename: "css/[name].[contenthash:8].chunk.css",
    //   //       ignoreOrder: true,
    //   //     },
    //   //   ];
    //   // });

    //   // 文件分块
    //   config.merge({
    //     optimization: {
    //       minimize: true,
    //       splitChunks: {
    //         chunks: "all",
    //         cacheGroups: {
    //           "custom-components": {
    //             test: /[\\/]src[\\/](components).*[\\/]/,
    //             name: "custom-components",
    //             enforce: true,
    //             priority: 5,
    //           },

    //           "custom-common": {
    //             test: /[\\/]node_modules[\\/](dayjs|lodash).*[\\/]/,
    //             name: "custom-common",
    //             enforce: true,
    //             priority: 5,
    //           },

    //           "react-vendor": {
    //             test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
    //             name: "react-vendor",
    //             enforce: true,
    //             priority: 5,
    //           },

    //           "ant-design": {
    //             test: /[\\/]node_modules[\\/](@ant-design).*[\\/]/,
    //             name: "ant-design-vendor",
    //             enforce: true,
    //             priority: 4,
    //           },

    //           "react-amap-vendor": {
    //             test: /[\\/]node_modules[\\/](react-amap)[\\/]/,
    //             name: "react-amap-vendor",
    //             enforce: true,
    //             priority: 4,
    //           },

    //           // 'gg-editor-vendor': {
    //           //   test: /[\\/]node_modules[\\/](gg-editor).*[\\/]/,
    //           //   name: 'gg-editor-vendor',
    //           //   enforce: true,
    //           //   priority: 4,
    //           // },
    //           // 'antv-vendor': {
    //           //   test: /[\\/]node_modules[\\/](@antv)[\\/]/,
    //           //   name: 'antv-vendor',
    //           //   enforce: true,
    //           //   priority: 4,
    //           // },
    //           "antd-vendor": {
    //             test: /[\\/]node_modules[\\/](antd)[\\/]/,
    //             name: "antd-vendor",
    //             enforce: true,
    //             priority: 4,
    //           },

    //           default: {
    //             test: /[\\/]src[\\/]((?!(pages)).*)[\\/]/,
    //             name: "default",
    //             enforce: true,
    //           },
    //         },
    //       },
    //     },
    //   });
    // }
  },
  // 使用 antd
  antd: {
    // configProvider
    // configProvider: {},
    // themes
    dark: false,
    compact: false,
    // babel-plugin-import
    // import: true,
    // less or css, default less
    style: 'less',
  },

  //配置 html 的输出形式，常用来解决没有服务端情况下，页面的 SEO 和首屏渲染提速
  // exportStatic:{}
  //启动ssr渲染
  // ssr: {},

  // request请求配置
  request: {},
  // 国际化配置 https://umijs.org/zh-CN/plugins/plugin-locale
  // locale: {
  //   default: 'zh-CN',
  //   antd: true,
  //   baseNavigator: true,
  // },
  locale: false,
  //加载dumi文档配置
  // ...dumi,

  //登录以后权限不刷新
  access: {},
  model: {},
  initialState: {},
  tailwindcss: {},
});
