import { defineConfig } from 'dumi'
import umiConfig from './config/config'

const newConfig = () => {
  const config = { ...umiConfig }
  // some config are not support dumi
  const excludeKey = ['locale', 'layout', 'initialState', 'routes', 'icons']
  Object.keys(config).forEach((key) => {
    if (excludeKey.includes(key)) {
      delete config[key]
    }
  })
  return config
}

export default defineConfig({
  ...newConfig(),
  plugins: [
    require.resolve('@umijs/plugins/dist/moment2dayjs'),
    require.resolve('@umijs/plugins/dist/antd'),
    require.resolve('@umijs/plugins/dist/tailwindcss'),
    require.resolve('@umijs/plugins/dist/valtio'),
    require.resolve('@umijs/plugins/dist/request'),
    require.resolve('@umijs/plugins/dist/model'),
    require.resolve('@umijs/plugins/dist/access'),
  ],
  mfsu: false,
  locales: [{ id: 'en-US', name: 'EN', suffix: '' }],
  alias: {},
  // apiParser: {},
  resolve: {
    // Configure the entry file path, API parsing will start from here
    // entryFile: './packages/utils/src/index.ts',
    // auto generate docs
    atomDirs: [
      // utils
      { type: 'docs', dir: '.' },
      // { type: 'docs', dir: 'src' },
    ],
  },
  favicons: [
    'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
  ],
  // autoAlias: false,
  outputPath: 'docs-dist',
  publicPath: '/next-dev/',
  base: '/next-dev/',
  themeConfig: {
    name: 'Next Dev',
    logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
    footer: `Open-source MIT Licensed | Copyright © 2019-${new Date().getFullYear()}<br /> Powered by Next Dev`,
  },
  // ssr: process.env.NODE_ENV === 'development' ? undefined : {},
  // chainWebpack(config, { webpack }) {
  //   config.module.rule('ts-in-node_modules').include.clear()
  //   return config
  // },
})
