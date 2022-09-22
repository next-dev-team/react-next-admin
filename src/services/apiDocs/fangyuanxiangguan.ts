// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 房源批量删除 POST /api/house/batchDeleteHouse */
export async function batchDeleteHouseUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.batchDeleteHouseUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmufangyuanshanchuqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/house/batchDeleteHouse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 属性批量修改 POST /api/house/batchUpdateAttr */
export async function batchUpdateAttrUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.batchUpdateAttrUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmufangyuanpiliangxiugaiqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/house/batchUpdateAttr', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 楼栋删除 POST /api/house/deleteBuilding */
export async function deleteBuildingUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteBuildingUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/house/deleteBuilding', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 房源删除 POST /api/house/deleteHouse */
export async function deleteHouseUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteHouseUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/house/deleteHouse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 单元删除 POST /api/house/deleteUnit */
export async function deleteUnitUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUnitUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/house/deleteUnit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 房源导出 POST /api/house/export */
export async function exportExcelUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportExcelUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/house/export', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 房源导入 POST /api/house/import */
export async function importExcelUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.importExcelUsingPOSTParams & {
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

  return request<API.xiangyingshitiExceldaorujieguo>('/api/house/import', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 房源查询 POST /api/house/query */
export async function queryUsingPOST10(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUsingPOST10Params & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmufangyuanliebiaofenyechaxunshaixuan,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifenyexinxishitixiangmufangyuanDto>('/api/house/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 房源分析查询 POST /api/house/queryAnalysis */
export async function queryAnalysisUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryAnalysisUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitixiangmufangyuanfenxishiti>('/api/house/queryAnalysis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 房源楼栋户型分析查询 POST /api/house/queryBuildingFrameAnalysis */
export async function queryBuildingFrameAnalysisUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryBuildingFrameAnalysisUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListxiangmufangyuanfenxiDto>(
    '/api/house/queryBuildingFrameAnalysis',
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

/** 房源配置查询 POST /api/house/queryHouseBasicsConfig */
export async function queryHouseBasicsConfigUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryHouseBasicsConfigUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.qingqiucanshulong,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitifangyuanjichupeizhi>('/api/house/queryHouseBasicsConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 房源统计查询 POST /api/house/queryStatistics */
export async function queryStatisticsUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryStatisticsUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmufangyuanchaxunqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListxiangmufangyuantongjiDto>('/api/house/queryStatistics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 房源视图查询 POST /api/house/queryView */
export async function queryViewUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryViewUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmufangyuanchaxunqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitiListxiangmufangyuanshituDto>('/api/house/queryView', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 属性修改 POST /api/house/updateAttr */
export async function updateAttrUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateAttrUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmufangyuanxiugaiqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/house/updateAttr', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 状态修改 POST /api/house/updateStatus */
export async function updateStatusUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateStatusUsingPOSTParams & {
    // header
    /** 登录令牌 */
    token?: { id?: number };
  },
  body: API.xiangmufangyuanxiugaizhuangtaiqingqiucanshu,
  options?: { [key: string]: any },
) {
  return request<API.xiangyingshitistring>('/api/house/updateStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
