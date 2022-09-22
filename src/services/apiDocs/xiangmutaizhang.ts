// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 批量更新日期 POST /api/projectLedger/batchUpdateDate */
export async function batchUpdateDateUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.batchUpdateDateUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.dingdanriqipiliangxiugaiqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/projectLedger/batchUpdateDate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 编辑备注 POST /api/projectLedger/editNote */
export async function editNoteUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.editNoteUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmufangyuanbeizhubiaoshiti,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/projectLedger/editNote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 台账导出 POST /api/projectLedger/export */
export async function exportUsingPOST3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportUsingPOST3Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/projectLedger/export', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 回款导出 POST /api/projectLedger/exportReturn */
export async function exportReturnUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportReturnUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/projectLedger/exportReturn', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 回款导入 POST /api/projectLedger/importReturn */
export async function importReturnUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.importReturnUsingPOSTParams & {
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

  return request<API.xiangyingshitiExceldaorujieguo>('/api/projectLedger/importReturn', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 台账查询 POST /api/projectLedger/query */
export async function queryUsingPOST11(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST11Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmutaizhangfenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitixiangmutaizhangDto>('/api/projectLedger/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 批量更新台账详情查询 POST /api/projectLedger/queryBatchUpdateDetail */
export async function queryBatchUpdateDetailUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryBatchUpdateDetailUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.pilianggengxintaizhangxiangqingchaxunqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitigongyongListxiangyingxiangmutaizhangDto>(
    '/api/projectLedger/queryBatchUpdateDetail',
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
