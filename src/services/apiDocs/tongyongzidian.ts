// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 全量获取字典 POST /api/dictionary/query */
export async function queryUsingPOST2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST2Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListzidianshiti>('/api/dictionary/query', {
    method: 'POST',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 类型获取字典 POST /api/dictionary/queryByType */
export async function queryByTypeUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryByTypeUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.zidianqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitizidianshiti>('/api/dictionary/queryByType', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
