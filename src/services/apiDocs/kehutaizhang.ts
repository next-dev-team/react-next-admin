// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 客户导入(来电访客户) POST /api/customer/customerDataImport */
export async function customerDataImportUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.customerDataImportUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.xiangyingshitiExceldaorujieguo>('/api/customer/customerDataImport', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 客户台账-来电或者来访 POST /api/customer/customerPhoneOrInArrive */
export async function customerPhoneOrInArriveUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.customerPhoneOrInArriveUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.CustomerParam,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitilaidianlaifangshuju>(
    '/api/customer/customerPhoneOrInArrive',
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

/** 客户台账-来电或者来访数据导出 POST /api/customer/customerPhoneOrInArriveDataExport */
export async function customerPhoneOrInArriveDataExportUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.customerPhoneOrInArriveDataExportUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/customer/customerPhoneOrInArriveDataExport', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 成交客户台账 POST /api/customer/customerTrade */
export async function customerTradeUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.customerTradeUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.CustomerParam,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitichengjiaokehutaizhang>(
    '/api/customer/customerTrade',
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

/** 成交客户台账导出 POST /api/customer/customerTradeExport */
export async function customerTradeExportUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.customerTradeExportUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/customer/customerTradeExport', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 置业顾问查询(0:所有客户类型,来电页面的type为1，来访页面的type为2，成交和客户梳理页面type为3) POST /api/customer/queryAgent */
export async function queryAgentUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryAgentUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.CustomerParam,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListyonghubiaoshiti>('/api/customer/queryAgent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 获取自定义字段对应关系 POST /api/customer/queryCustomFieldRel */
export async function queryCustomFieldRelUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryCustomFieldRelUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListzidingyiziduanduiyingguanxi>(
    '/api/customer/queryCustomFieldRel',
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
