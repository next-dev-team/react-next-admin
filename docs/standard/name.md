---
title: 文件命名规范
nav:
  title: 规范
---

# 文件夹
1. **除react组件外的名称都使用小驼峰、react组件使用大驼峰**
  - ```js
      //普通
      '/pages/login'
      //组件
      '/components/FormCustom'
    ```
2. **pages文件夹命名方式：以业务来分文件夹层级（根据业务菜单层级来对应命名）**

# services 请求命名

1. **services文件夹命名方式：和pages一样,特殊公用的放public**
 

# 文件
1. **使用小驼峰**
  - ```js
      'btnConfig.tsx'
    ```

# React 函数
1. **除react组件外的函数名称都使用小驼峰、react组件函数使用大驼峰**
  - ```js
      //普通 /utils/index.ts
      export const waitTime = (time: number = 100) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, time);
        });
      };

      //组件
      '/components/FormCustom'
      function FormCustom(Props: FormCustomProps) {
        ...
      }
      '/pages/login'
      function UserMobileLogin() {
        ...
      }
    ```

# CSS
1. **css单独分离一个.less文件管理**
2. **使用cssModules方式引入，名称使用小驼峰**
