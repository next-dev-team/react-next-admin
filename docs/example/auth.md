---
title: 权限使用样例
nav:
  title: 使用样例
---

# 文档说明

> 1. 基于umi插件开发使用参考文档：[@umijs/plugin-access](https://umijs.org/zh-CN/plugins/plugin-access)


## 权限验证
```js

export default function(initialState: any) {
  // const {  role } = initialState;

  return {
    checkAuth:(access:any)=>{
      if(access.path === '/noAuth'){
         return false;
      }
      return true;
    },
    authShow: true,
    canUpdateFoo:false,
    canDeleteFoo: (cid: number) => {
      return cid === 1;
    },
  };
}

```

## 菜单权限使用
```js

import { IBestAFSRoute } from '@umijs/plugin-layout';

export const routes: IBestAFSRoute[] =  [
  {
    path: '/',
    name:"首页",
    icon:"AppleFilled",
    component: '@/pages/home/index',
    access:'checkAuth',//验证的权限
  },
];

```

---

## 页面和按钮级权限使用
```js

import React from 'react';
import styles from './index.less';
import { Pagination,Tag } from 'antd';
import { Helmet, useAccess, Access, useModel, request } from '@umijs/max';


function Home() {

  //约定全局权限状态获取
  const access = useAccess();

  if (access.authShow) {
    // 如果可以读取 Foo，则...
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example"/>
      </Helmet>
      <h1 className={styles.title}>我是首页了</h1>
      <Access
        accessible={access.authShow}
        fallback={<div>我没有看的权限了</div>}
      >
        <div>我拥有看的权限了</div>
      </Access>
      <Access
        accessible={access.canUpdateFoo}
        fallback={<div>我不能更新操作.</div>}
      >
        <div>我可以跟新操作</div>
      </Access>
      <Access
        accessible={access.canDeleteFoo(1)}
        fallback={<div>我不能删除</div>}
      >
        我能删除
      </Access>
    </div>
  );
};


// home.title = '我设置了标题';

export default Home;



```
