import type { MenuDataItem } from "@ant-design/pro-components";

const routes: MenuDataItem[] = [
 
  {
    path: "/",
    redirect: "/welcome",
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './welcome',
  },

];

export default routes;
