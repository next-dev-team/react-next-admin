/**
 * 我是约定入口文件
 */
import { history } from "@umijs/max";
import requestConfig from "@/services/config";
import { isLogin } from "@/services";
import { setUserLocalStorage } from "@/models/useUserModel";

// 约定一个地方生产和消费初始化数据。
export async function getInitialState() {
  $global.log("启动应用进入页面");

  if (
    history.location.pathname !== "/login" &&
    history.location.pathname !== "/404"
  ) {
    try {
      // 确认用户登陆权限、更新用户最新信息
      const res = await isLogin();
      setUserLocalStorage(res.data);
    } catch (error) {}
  }
  // return { name: 'dasad' };
}

/**
 * 公用请求拦截器
 */
export const request = requestConfig;
