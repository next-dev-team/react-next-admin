// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 用户详情 POST /api/user/detail */
export async function detailUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingPOST1Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiyonghubiaoshiti>('/api/user/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 任职身份核对表 POST /api/user/downloadIdentity */
export async function downloadIdentityUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadIdentityUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/user/downloadIdentity', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 身份确定 POST /api/user/identity */
export async function identityUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.identityUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.denglushenfenquedingqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiyonghubiaoshiti>('/api/user/identity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 是否登录 POST /api/user/isLogin */
export async function isLoginUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isLoginUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiyonghubiaoshiti>('/api/user/isLogin', {
    method: 'POST',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 用户注销 POST /api/user/logout */
export async function logoutUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.logoutUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/user/logout', {
    method: 'POST',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 密码登录 POST /api/user/pwdLogin */
export async function pwdLoginUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pwdLoginUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.yonghudengluqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitidaiquerendengluyonghushiti>('/api/user/pwdLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 扫码登录 POST /api/user/qrLogin */
export async function qrLoginUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.qrLoginUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.dingdingshouquandengluqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitidaiquerendengluyonghushiti>('/api/user/qrLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 用户列表 POST /api/user/query */
export async function queryUsingPOST15(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST15Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.yonghuliebiaofenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitiyonghuliebiaoDto>('/api/user/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 置业顾问列表 POST /api/user/queryConsultant */
export async function queryConsultantUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryConsultantUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListyonghubiaoshiti>('/api/user/queryConsultant', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 用户保存 POST /api/user/save */
export async function saveUsingPOST2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveUsingPOST2Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.yonghubaocunqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/user/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 验证码 GET /api/user/verifyCode */
export async function verifyCodeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.verifyCodeUsingGETParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/user/verifyCode', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
