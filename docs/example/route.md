---
title: 路由配置样例
nav:
  title: 使用样例
---

# 文档地址

> 1. [umi-routes](https://umijs.org/zh-CN/docs/routing)

# 路由配置样例


```js

import { IBestAFSRoute } from '@umijs/plugin-layout';

export const routes: IBestAFSRoute[] =  [
  {
    path: '/404',
    component: '@/pages/404',
    headerRender: false,//是否隐藏导航
    footerRender: false,//是否隐藏底部
    menuRender: false,// 是否隐藏菜单
  },
  {
    path: '/login',
    component: '@/pages/login/index',
    headerRender: false,
    footerRender: false,
    menuRender: false,
  },
  {
    path: '/loginM',
    component: '@/pages/login/mobile',
    headerRender: false,
    footerRender: false,
    menuRender: false,
  },
  {
    path: '/',
    name:"首页",
    icon:"AppleFilled",
    component: '@/pages/home/index',
    access:'checkAuth',//验证的权限
    accessId: 29,//验证权限的id
    pageContainer: false, // 隐藏顶部layout  pageContainer
  },
  {
    path: '/proform',
    name:"ProForm",
    icon:"AppleFilled",
    routes:[
      {
        path: '/proform/ordinary',
        name:"内嵌普通表单",
        component: '@/pages/proForm/ordinary/index',
        helps: '流程中心主管<br>流程中心主管<br>',// 顶部右上角通用操作帮助弹窗内容 可以是html格式
      },
      {
        path: '/proform/ordinaryModel',
        name:"弹窗普通表单",
        component: '@/pages/proForm/ordinaryModel/index',
      },
      {
        path: '/proform/steps',
        name:"内嵌分步骤卡片表单",
        component: '@/pages/proForm/steps/index',
      },
      {
        path: '/proform/stepsModel',
        name:"弹窗分步骤卡片表单",
        component: '@/pages/proForm/stepsModel/index',
      }
    ]
  },
  {
    path: '/menus',
    name:"我有子菜单",
    icon:"GithubFilled",
    component: '@/pages/menus/_layout',
    access:'checkAuth',
    accessId: 29,//验证权限的id
    routes:[
      {
        path: '/menus/menu',
        name:"子菜单",
        icon:"CodeSandboxCircleFilled",
        component: '@/pages/menus/menu/index',
      },
      {
        path: '/menus/menu1',
        name:"子菜单1",
        icon:"CodeSandboxCircleFilled",
        component: '@/pages/menus/menu1/index',
      },
    ]
  },
  {
    path: '/noAuth',
    name:"我没有权限",
    icon:"CodepenCircleFilled",
    access:'checkAuth',
    accessId: 29,//验证权限的id
  },
  {
    path: '/public',//注意在使用多级配置时、父级必须配置path路径
    name:'隐藏父级',
    icon:"LinkedinFilled",
    component: '@/layouts/index',
    flatMenu:true,//隐藏父级 子集上提
    routes:[
      {
        path: '/public/form',
        name:"form",
        icon:"DribbbleSquareFilled",
        component: '@/pages/public/form/index',
      },
      {
        path: '/public/menu2',
        name:"我会隐藏左侧菜单",
        icon:"DribbbleSquareFilled",
        component: '@/pages/public/menu3/index',
        layout:{
          hideFooter:true,
          hideMenu:true,
          hideNav:false,
        },
      },
      {
        path: '/public/menu3',
        name:"子菜单3",
        disabled:true,
        icon:"DribbbleSquareFilled",
        component: '@/pages/public/menu3/index',
      },
    ]
  },
  {
    path: '/protable',
    name:"表格测试",
    icon:"GithubFilled",
    component: '@/pages/protable/',
    access:'checkAuth',
  },
  {
    path: '/sys', //三级菜单 注意 path的格式
    name: '系统管理',
    icon: 'SettingOutlined',
    accessId: 120000,
    routes: [
      {
        path: '/sys/sys1',
        name: '系统管理1',
        icon: 'SettingOutlined',
        accessId: 120000,
        routes: [
          {
            path: '/sys/sys1/account1',
            name: '用户管理1',
            component: '@/pages/sys/account/index',
            accessId: 120100,
            helps: '只能授权已经在钉钉数据库的人员访问该系统。',
          },
        ],
      },
    ],
  },
  
];

```
