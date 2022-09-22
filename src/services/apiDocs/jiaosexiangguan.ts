// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 角色删除 POST /api/role/delete */
export async function saveUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshuint,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/role/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 角色详情 POST /api/role/detail */
export async function detailUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshuint,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitijiaosebiaoshiti>('/api/role/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 岗位映射角色核对表 POST /api/role/downloadMapping */
export async function downloadMappingUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadMappingUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/role/downloadMapping', {
    method: 'POST',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 映射岗位 POST /api/role/mappingPosition */
export async function mappingPositionUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.mappingPositionUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.jiaoseyingshegangweiqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/role/mappingPosition', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 角色列表 POST /api/role/query */
export async function queryUsingPOST13(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST13Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.jiaoseliebiaofenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitijiaoseliebiaoDto>('/api/role/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 角色保存 POST /api/role/save */
export async function saveUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveUsingPOST1Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.baocunjiaoseqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/role/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
