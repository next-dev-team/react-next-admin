import { AhooksPresent } from './ahooks-present';
import { antdIconPresent } from './antd-icons-present';
import { antdPresent } from './antd-present';
import { antdProPresent } from './antdpro-present';
import { lodashPresent } from './lodash-present';

const IconsResolver = require('unplugin-icons/resolver');

export const autoImportPlugin = () =>
  require('unplugin-auto-import/webpack')({
    dts: './auto-import.d.ts',
    include: [
      /\.[t]sx?$/, // .ts, .tsx,
    ],
    imports: [
      'react',
      {
        antd: antdPresent,
        'lodash-es': lodashPresent,
        ahooks: AhooksPresent,
        '@ant-design/pro-components': antdProPresent,
        '@ant-design/icons': antdIconPresent,
        '@umijs/max': ['useSnapshot', 'proxy', 'Link', ['history', '_history']],
        'hox': ['createGlobalStore','HoxRoot'],
      },
    ],
    vueTemplate: false,

    // Auto import for all module exports under directories
    // when using in file names mostly use prefixes _ and $ to avoid conflicts
    dirs: [
      './src/utils',
      './src/stores',

      // './composables/**', // all nested modules
    ],
    resolvers: [
      IconsResolver({
        componentPrefix: 'Icon',
        extension: 'jsx',
      }),
    ],
  });
