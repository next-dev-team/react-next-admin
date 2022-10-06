import type { MenuDataItem } from '@ant-design/pro-components';

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
    name: 'Login',
    icon: 'smile',
    component: './auth/login',
  },
];

export default routes;
