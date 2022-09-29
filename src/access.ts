// import { getUserLocalStorage } from '@/models/useUserModel';

// const loopMenus = (menus: any, menusAll: any) => {
//   menus.forEach((item: any) => {
//     menusAll.push(item.id);
//     if (item.children) {
//       loopMenus(item.children, menusAll);
//     }
//   });
// };

// 我们约定了 src/access.ts 为我们的权限定义文件，该文件需要默认导出一个方法，
// 导出的方法会在项目初始化时被执行。该方法需要返回一个对象，对象的每一个值就对应定义了一条权限

const checkAuth = (access: any) => {
  // const userInfo = getUserLocalStorage();

  const mockDev = true;
  if (mockDev) {
    return true;
  }


};

export default () => {
  return {
    checkMenusAuth: checkAuth,
    checkPermissionAuth: checkAuth,
  };
};
