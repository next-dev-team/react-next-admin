// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 客户梳理-梳理 POST /api/customerInspect/inspect */
export async function inspectUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.inspectUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.kehushuli0,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/customerInspect/inspect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 客户梳理-列表 POST /api/customerInspect/inspectList */
export async function inspectListUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.inspectListUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.CustomerInspectListParam,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitikehushuli>('/api/customerInspect/inspectList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 客户梳理-列表数据导出 POST /api/customerInspect/inspectListDataExport */
export async function inspectListDataExportUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.inspectListDataExportUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/customerInspect/inspectListDataExport', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 客户梳理-记录 POST /api/customerInspect/inspectLog */
export async function inspectLogUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.inspectLogUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.CustomerInspectParam,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitikehushulijilu>(
    '/api/customerInspect/inspectLog',
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

/** 客户梳理-记录数据导出 POST /api/customerInspect/inspectLogDataExport */
export async function inspectLogDataExportUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.inspectLogDataExportUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/customerInspect/inspectLogDataExport', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
