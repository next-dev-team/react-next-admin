// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 客户分析 POST /api/customerAnalysis/analysis */
export async function analysisUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.analysisUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.kehufenxichaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListkehufenxibiaogezhanshishuju>(
    '/api/customerAnalysis/analysis',
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

/** 获取查询纬度(0:全部 | 来电 | 来访,1: 成交 ) POST /api/customerAnalysis/dimension */
export async function dimensionUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dimensionUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshuint,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListchaxuntiaojian>('/api/customerAnalysis/dimension', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 获取查询条件(参数为项目ID值) POST /api/customerAnalysis/getQueryCondition */
export async function getQueryConditionUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQueryConditionUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListchaxuntiaojian>('/api/customerAnalysis/getQueryCondition', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
