// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加人员 POST /api/assignmentTask/add */
export async function addUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.zhiyeguwenrenwutianjiarenyuancanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/assignmentTask/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 申请超期修改(项目任务ID) POST /api/assignmentTask/applyAssignment */
export async function applyAssignmentUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.applyAssignmentUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/assignmentTask/applyAssignment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 分配任务 POST /api/assignmentTask/assignment */
export async function assignmentUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.assignmentUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.fenpeirenwucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/assignmentTask/assignment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 导出详情表 POST /api/assignmentTask/export */
export async function exportDetailUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportDetailUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/assignmentTask/export', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分配任务获取剩余产值(项目任务ID) POST /api/assignmentTask/getAssignmentVolume */
export async function getAssignmentVolumeUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAssignmentVolumeUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenpeirenwuhuoqushengyuchanzhiDto>(
    '/api/assignmentTask/getAssignmentVolume',
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

/** 任务总览 POST /api/assignmentTask/overview */
export async function overviewUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.overviewUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.zhiyeguwenrenwuzonglanchaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitizhiyeguwenrenwuzonglanDto>('/api/assignmentTask/overview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 查询 POST /api/assignmentTask/query */
export async function queryUsingPOST8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST8Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.zhiyeguwenrenwuchaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitizhiyeguwenrenwufenyeshujuDto>(
    '/api/assignmentTask/query',
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

/** 移除人员 POST /api/assignmentTask/remove */
export async function removeUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.zhiyeguwenrenwuyichurenyuancanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/assignmentTask/remove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
