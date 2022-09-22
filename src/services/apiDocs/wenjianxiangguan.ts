// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 上传授权 POST /api/file/auth */
export async function authUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.authUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.shangchuanshouquanqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiSTSwenjianshangchuanshouquanxinxi>('/api/file/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
