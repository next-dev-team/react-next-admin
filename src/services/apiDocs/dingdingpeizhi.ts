// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑审批模版 POST /api/ding/editApprovalConfig */
export async function editApprovalConfigUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.editApprovalConfigUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.dingdingshenpipeizhibianjicanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/ding/editApprovalConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 获取AppId配置 POST /api/ding/queryAppId */
export async function queryUsingPOST3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST3Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.dingdingpeizhichaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/ding/queryAppId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 获取钉钉审批配置 POST /api/ding/queryApproval */
export async function queryApprovalUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryApprovalUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.dingdingshenpipeizhichaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitigongyongListxiangyingdingdingshenpipeizhishiti>(
    '/api/ding/queryApproval',
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
