
import * as antd from '@ant-design/icons';

// https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/antdv.ts
// console.log('all',all);
export const antdIconPresent = Object.keys(antd).map((i) => {
  return [i, `Icon${i}`];
});