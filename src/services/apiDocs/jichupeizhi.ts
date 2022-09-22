// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 字段删除 POST /api/field/deleteField */
export async function deleteFieldUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFieldUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/field/deleteField', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 字段选项值删除 POST /api/field/deleteFieldValue */
export async function deleteFieldValueUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFieldValueUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/field/deleteFieldValue', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 字段选项值详情 POST /api/field/detailFieldValue */
export async function detailFieldValueUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailFieldValueUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xuanxiangzhixiangqingchaxunqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiziduanxuanxiangzhibiaoshiti>('/api/field/detailFieldValue', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 配置查询 POST /api/field/query */
export async function queryUsingPOST4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST4Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.jichupeizhichaxunqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListziduanbiaoshiti>('/api/field/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 字段保存 POST /api/field/saveField */
export async function saveFieldUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveFieldUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.ziduanbiaoshiti,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/field/saveField', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 字段选项值保存 POST /api/field/saveFieldValue */
export async function saveFieldValueUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveFieldValueUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xuanxiangzhibaocunqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/field/saveFieldValue', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 字段是否必填配置保存 POST /api/field/saveRequiredConfig */
export async function saveRequiredConfigUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveRequiredConfigUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.ziduanshifoubitianpeizhibaocunqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/field/saveRequiredConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
