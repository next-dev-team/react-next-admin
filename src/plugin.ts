//存在这个文件，会被当前项目加载为 Umi 插件，你可以在这里解一些需要插件级支撑的问题。

import type { IApi } from "@umijs/max";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (_api: IApi) => {
  //   api.onDevCompileDone((opts) => {
  //     opts;
  //     // console.log('> onDevCompileDone', opts.isFirstCompile);
  //   });
  //   api.onBuildComplete((opts) => {
  //     opts;
  //     // console.log('> onBuildComplete', opts.isFirstCompile);
  //   });
  //   api.chainWebpack((memo) => {
  //     memo;
  //   });
};
