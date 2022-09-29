import * as antd from 'antd';

// https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/antdv.ts
// console.log('all',all);
export const antdPresent = Object.keys(antd).map((i) => {
  if (i === String(i).toLowerCase()) {
    return [i, `_${i}`];
  }
  return [i, `A${i}`];
});
