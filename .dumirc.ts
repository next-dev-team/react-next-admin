import { defineConfig } from 'dumi'

export default defineConfig({
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  tailwindcss: {},
  locales: [{ id: 'en-US', name: 'EN', suffix: '' }],
  alias: {},
  // apiParser: {},
  resolve: {
    // Configure the entry file path, API parsing will start from here
    // entryFile: './packages/utils/src/index.ts',
    // auto generate docs
    atomDirs: [
      // utils
      { type: 'docs', dir: 'src' },
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
  ssr: process.env.NODE_ENV === 'development' ? undefined : {},
  chainWebpack(config, { webpack }) {
    config.module.rule('ts-in-node_modules').include.clear()
    return config
  },
})
