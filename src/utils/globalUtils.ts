import eventsBus from '@/utils/eventsBus';
/**
 * 我是全局挂载吧需要引入 直接可以使用
 * 例如：
 * $global.log('测试打印信息')
 */
// @ts-ignore
const log = function log(...msg) {
  if (process.env.UMI_ENV !== 'build_pro') {
    // eslint-disable-next-line
    console.log(...msg);
  }
};

export default {
  log,
  eventsBus,
};
