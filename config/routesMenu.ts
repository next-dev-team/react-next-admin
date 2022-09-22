import type { MenuDataItem } from "./routes";

const routesMenu: MenuDataItem[] = [
  {
    path: "/index",
    icon: "HomeOutlined",
    name: "首页",
    component: "@/pages/index/index",
    pageContainer: false,
  },
  {
    path: "/message",
    name: "通知管理",
    component: "@/pages/message/index",
    icon: "BellOutlined",
    accessId: 29,
    access: "checkMenusAuth",
  },
  {
    path: "/sys",
    name: "系统管理",
    icon: "SettingOutlined",
    accessId: 13,
    access: "checkMenusAuth",
    routes: [
      {
        path: "/sys/role",
        name: "角色管理",
        component: "@/pages/sys/role/index",
        accessId: 6,
        access: "checkMenusAuth",
      },
      {
        path: "/sys/account",
        name: "账号管理",
        component: "@/pages/sys/account/index",
        accessId: 11,
        access: "checkMenusAuth",
      },
      {
        path: "/sys/logs",
        name: "日志列表",
        component: "@/pages/sys/logs/index",
        access: "checkMenusAuth",
        accessId: 16,
      },
      {
        path: "/sys/backups",
        name: "数据备份",
        component: "@/pages/sys/backups/index",
        accessId: 18,
        access: "checkMenusAuth",
      },
    ],
  },
  {
    path: "/public/userInfo",
    name: "个人中心",
    hideInMenu: true,
    hideInBreadcrumb: true,
    component: "@/pages/public/userInfo/index",
  },
  {
    path: "/users",
    name: "用户",
    icon: "BellOutlined",
    component: "@/pages/users/index",
  },
];

export default routesMenu;
