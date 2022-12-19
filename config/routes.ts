import type { MenuDataItem } from '@ant-design/pro-layout'

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
    path: '/auth/login',
    name: 'login',
    icon: 'smile',
    component: './auth/login',
  },
  {
    name: 'list_page',
    icon: 'TabletOutlined',
    path: '/components',
    routes: [
      {
        path: '/components/test',
        name: 'sub_page',
        icon: 'CrownOutlined',
        component: './components/test',
      },
    ],
  },
  {
    path: '*',
    layout: false,
    hideInMenu: true,
    component: './404',
  },
]

export default routes
