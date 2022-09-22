// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 台账导出 POST /api/changeLedger/export */
export async function exportUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/changeLedger/export', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 台账查询 POST /api/changeLedger/query */
export async function queryUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST1Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.biangengtaizhangfenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitibiangengtaizhangDto>('/api/changeLedger/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
