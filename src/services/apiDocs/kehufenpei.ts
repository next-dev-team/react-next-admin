// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 客户分配记录查询 POST /api/customerAssignment/customerAssignmentLog */
export async function customerAssignmentLogUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.customerAssignmentLogUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.kehufenpeijiluchaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitikehufenpeijilushuju>(
    '/api/customerAssignment/customerAssignmentLog',
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

/** 客户分配记录导出 POST /api/customerAssignment/customerAssignmentLogExport */
export async function customerAssignmentLogExportUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.customerAssignmentLogExportUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/customerAssignment/customerAssignmentLogExport', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 执行分配 POST /api/customerAssignment/executeAssign */
export async function executeAssignUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.executeAssignUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.CustomerAssignParam,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/customerAssignment/executeAssign', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 客户分配-分配-查询 POST /api/customerAssignment/waitAssignmentCustomer */
export async function waitAssignmentCustomerUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.waitAssignmentCustomerUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.daifenpeikehuchaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitidaifenpeikehuxinxizhanshi>(
    '/api/customerAssignment/waitAssignmentCustomer',
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
