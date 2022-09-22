// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 组织查询 POST /api/organization/query */
export async function queryUsingPOST5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST5Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.zuzhichaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListzuzhishiti>('/api/organization/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 根据部门查询组织 POST /api/organization/queryByDepartmentId */
export async function queryByDepartmentIdUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryByDepartmentIdUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshuint,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListzuzhishiti>('/api/organization/queryByDepartmentId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 根据企业查询组织 POST /api/organization/queryByEnterpriseId */
export async function queryByEnterpriseIdUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryByEnterpriseIdUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshuint,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListzuzhishiti>('/api/organization/queryByEnterpriseId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
