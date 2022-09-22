// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 预警规则查询 POST /api/warning/query */
export async function queryUsingPOST16(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST16Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.yujingguizechaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiyujingguizebiaoshiti>('/api/warning/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 公司级预警规则保存 POST /api/warning/saveCompanyRule */
export async function saveCompanyRuleUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveCompanyRuleUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.gongsijiyujingguizebaocuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/warning/saveCompanyRule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 项目级预警规则保存 POST /api/warning/saveProjectRule */
export async function saveProjectRuleUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveProjectRuleUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmujiyujingguizebaocuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/warning/saveProjectRule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
