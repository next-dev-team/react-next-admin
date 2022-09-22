// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 菜单查询 POST /api/menu/queryAll */
export async function queryAllUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryAllUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListcaidanbiaoshiti>('/api/menu/queryAll', {
    method: 'POST',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}
