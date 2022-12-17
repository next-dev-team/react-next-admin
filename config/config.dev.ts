import { defineConfig } from '@umijs/max'

// console.log('config.dev is working');

// all UMI Dev config here
export default defineConfig({
  clickToComponent: {},
  devtool: 'source-map',
  //auto import react is not working with mfsu
  mfsu: {},

  /**
   * 配置 external
   * 对于一些大尺寸依赖，比如图表库、antd 等，可尝试通过 externals 的配置引入相关 umd 文件，减少编译消耗
   */
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  //配置额外的 meta 标签。数组中可以配置key:value形式的对象。
  // metas:[],
  //配置 <head> 里的额外脚本，数组项为字符串或对象。
  // headScripts:[],
  // 配置 <body> 里的额外脚本。。
  scripts: [
    '//unpkg.com/react@18.2.0/umd/react.development.js',
    '//unpkg.com/react-dom@18.2.0/umd/react-dom.development.js',
  ],
})
