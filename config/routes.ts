import type { MenuDataItem } from '@ant-design/pro-components'

const routes: MenuDataItem[] = [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './welcome',
  },
  {
    path: '/~docs',
    name: 'documents',
    icon: 'smile',
    component: './~docs',
    hideChildrenInMenu: true,
    hideInMenu: true,
  },
  {
    path: '/auth/login',
    name: 'login',
    icon: 'smile',
    component: './auth/login',
    layout: false,
  },
  {
    path: '/data-table',
    name: 'Data Table',
    icon: 'smile',
    component: './data-table',
  },
  // {
  //   name: 'list_page',
  //   icon: 'TabletOutlined',
  //   path: '/components',
  //   routes: [
  //     {
  //       path: '/components/test',
  //       name: 'sub_page',
  //       icon: 'CrownOutlined',
  //       component: './components/test',
  //     },
  //   ] as any,
  // },
  {
    path: '*',
    layout: false,
    hideInMenu: true,
    component: './404',
  },
]

export default routes
