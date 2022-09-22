# 升级版本 umi4

```js
// 添加 .npmrc 修改 .gitignore
"@vh-cli/git-commit": "^1.0.6"
pnpm i
pnpm dlx @umijs/codemod@latest

```

```js
1. 添加 .npmrc 修改 .gitignore
2. 全局替换 'umi' => '@umijs/max'
2. 更换 $global 的文件和替换所有方法
2. 更换 location 中的 query 
3. package.json 修改很多
4. 修改.env 和本地可以添加 .env.local
5. 修改config/config.ts config/proxy.ts 整个文件 config/routes.ts config/routesMenu.ts 类型声明 config/ * 全部都有变化
// 6. 全局正则替换 '@ant-design/pro-.*' => '@ant-design/pro-components'
7. src/app.tx 修改为 app.tsx 和里面的内容、
8. 新增 src/plugin.ts 文件 新增 src/loading.tsx 文件
9. 修改 src/layouts/index.tsx 文件 <Outlet />使用,  修改location的引用，layouts/index.tsx 重命名 layouts/修改location的引用，layouts.tsx 重写了 src/layouts
10. 修改 mock/example.ts 的defineMock定义
12. 修改 .prettierrc.js  .stylelintrc.js .eslintrc.js
14. 修改 tsconfig.json 和 typings.d.ts 文件 删除 /src/typings.d.ts
15. 修改 /src/services/config.ts 请求拦截器
16. 修改 route.md
17. 全局查找 @ant-design/pro-components  替换应用方式例如： import ProList from "@ant-design/pro-components"; => import { ProList } from "@ant-design/pro-components";
// 18. 增加 openapi.config.ts
19. 修改global.less
20. 修改.gitignore
11. pnpm umig 使用 Tailwindcss,增加 .husky/pre-commit|  使用命令生成
13. 删除原有jest相关文件  pnpm umig 使用 Jest Configuration 和 E2E测试  文件夹 cypress增加

```
