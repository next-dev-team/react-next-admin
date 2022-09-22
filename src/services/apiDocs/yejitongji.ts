// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 业绩导出 POST /api/performanceStatistics/export */
export async function exportUsingPOST2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportUsingPOST2Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/performanceStatistics/export', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 业绩查询 POST /api/performanceStatistics/query */
export async function queryUsingPOST7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST7Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.yejitongjifenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitiyejitongjiDto>(
    '/api/performanceStatistics/query',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { ...params },
      data: body,
      ...(options || {}),
    },
  );
}
