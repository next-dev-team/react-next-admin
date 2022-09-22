// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出任务汇总表 POST /api/projectTask/export */
export async function exportUsingPOST4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportUsingPOST4Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/projectTask/export', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取批量修改底表 POST /api/projectTask/exportEditTemplate */
export async function exportEditTemplateUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportEditTemplateUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/projectTask/exportEditTemplate', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出指定项目详情表 POST /api/projectTask/exportProjectDetail */
export async function exportProjectDetailUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportProjectDetailUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/projectTask/exportProjectDetail', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取公司任务配置(公司ID) POST /api/projectTask/getConfig */
export async function getConfigUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getConfigUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitixiangmurenwupeizhiDto>('/api/projectTask/getConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 导入批量修改表 POST /api/projectTask/import */
export async function importExcelUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.importExcelUsingPOST1Params & {
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

  return request<API.xiangyingshitiExceldaorujieguo>('/api/projectTask/import', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 查询 POST /api/projectTask/query */
export async function queryUsingPOST12(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST12Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmurenwuchaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitixiangmurenwufenyeshujuDto>(
    '/api/projectTask/query',
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

/** 编辑 POST /api/projectTask/update */
export async function updateUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmurenwubianjicanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/projectTask/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 修改当月任务分配开关 POST /api/projectTask/updateConfigAssignment */
export async function updateConfigAssignmentUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateConfigAssignmentUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.UpdateAssignmentConfigParam,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/projectTask/updateConfigAssignment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 修改其他参数 POST /api/projectTask/updateConfigParam */
export async function updateConfigParamUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateConfigParamUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.UpdateDayConfigParam,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/projectTask/updateConfigParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
