// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 项目撤场 POST /api/project/annul */
export async function annulUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.annulUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmuchechangqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/project/annul', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 下载名册 POST /api/project/downloadProjectUser */
export async function downloadProjectUserUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadProjectUserUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/project/downloadProjectUser', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 项目查询 POST /api/project/query */
export async function queryUsingPOST9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST9Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmuliebiaofenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitixiangmubiaoshiti>('/api/project/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 根据公司查询项目 POST /api/project/queryByCompanyId */
export async function queryByCompanyIdUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryByCompanyIdUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListxiangmubiaoshiti>('/api/project/queryByCompanyId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 团队名册历任人员 POST /api/project/queryHistory */
export async function queryHistoryUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryHistoryUsingPOST1Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmumingceliebiaofenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitituanduimingceDto>('/api/project/queryHistory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 团队名册维护人员 POST /api/project/queryManager */
export async function queryManagerUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryManagerUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmumingceliebiaofenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitituanduimingceDto>('/api/project/queryManager', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 团队名册任职人员 POST /api/project/queryOffice */
export async function queryOfficeUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryOfficeUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmumingceliebiaofenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitituanduimingceDto>('/api/project/queryOffice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
