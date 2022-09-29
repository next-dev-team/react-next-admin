// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 同步记录 POST /api/task/query */
export async function queryUsingPOST14(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST14Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.tongbujiluliebiaofenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishititongburenwujiluDto>('/api/task/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** D+同步记录 POST /api/task/queryPlus */
export async function queryPlusUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryPlusUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.Dtongbujiluliebiaofenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitiDtongbujilubiaoshiti>('/api/task/queryPlus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 手动同步 POST /api/task/sync */
export async function syncUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.syncUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/task/sync', {
    method: 'POST',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}
