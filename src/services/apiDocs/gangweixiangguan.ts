// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 岗位查询 POST /api/position/queryAll */
export async function queryAllUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryAllUsingPOST1Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListgangweibiaoDto>('/api/position/queryAll', {
    method: 'POST',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}
