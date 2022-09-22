import { getModelConfig } from '@/services';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { postBody } from '@/services/handler';
import type { ProColumnsTypes } from '@/components/TableCustom/types';
import Loading from '@/components/Exception/Loading';
import type { SubmitOnDoneType } from '@/components/TableCustom/types';
import { message } from 'antd';
import access from '@/access';
import { deepMerge } from '@/utils';

const { checkPermissionAuth } = access();

declare type modelConfigType = {
  /**
   * 表格请求接口
   */
  tableApi?: string;
  /**
   * 详情请求接口
   */
  detailsApi?: string;
  /**
   * 字段
   */
  columns?: ProColumnsTypes<any>[];
  /**
   * 是否开启搜索
   */
  search: boolean;
} & any;

const loopColumnConfig = (columns: any, mergeConfig: any = null) => {
  const newColumns: any = [];
  if (columns && columns.length > 0) {
    columns.forEach((column: any) => {
      let newColumn: any = { ...column };
      if (newColumn.children) {
        newColumn.children = loopColumnConfig(newColumn.children);
      }
      // 如果是特殊时间区间筛选
      if (newColumn.search === 'dateRange') {
        newColumn.search = false;
        newColumns.push({
          ...newColumn,
          hideInTable: true,
          hideInForm: true,
          search: {
            transform: (value: any) => {
              return {
                [`${newColumn.dataIndex}_start_time`]: value[0],
                [`${newColumn.dataIndex}_end_time`]: value[1],
              };
            },
          },
        });
      }

      if (mergeConfig) {
        const mergeColumn = mergeConfig.find((i: any) => i.dataIndex === newColumn.dataIndex);
        if (mergeColumn) {
          newColumn = deepMerge(newColumn, mergeColumn);
        }
      }
      newColumns.push(newColumn);
    });
  }
  return newColumns;
};

const setTableConfig = (tableProps: any, config: any, type = 'headerTitleConfig') => {
  tableProps[type] = {};

  config[type].forEach((item: any) => {
    const {
      submitter,
      width,
      title,
      desc,
      btnType,
      btnText,
      accessId,
      modalType,
      edit,
      api,
      ...itemRest
    } = item;

    const newConfig = {
      auth: () => {
        return checkPermissionAuth({ accessId: accessId });
      },
      text: btnText,
      modalConfig: {
        modalType: modalType,
        edit: edit,
        config: {
          // submitter: {
          //   searchConfig: {
          //     resetText: '重置',
          //     submitText: '提交',
          //   },
          // },
          title: title,
          // 提交数据的接口配置
          submitRequest: config[api],
          // 完成时回调
          submitOnDone: ({ status }: SubmitOnDoneType) => {
            if (status === 'success') {
              message.success('操作成功');
            }
          },
          ...itemRest,
        },
      },
    };
    if (width) {
      newConfig.modalConfig.config.width = width;
    }
    if (desc) {
      newConfig.modalConfig.config.desc = desc;
    }
    if (submitter) {
      newConfig.modalConfig.config.submitter = submitter;
    }
    tableProps[type][btnType] = newConfig;
  });
};
/**
 *
 * @param params 传递的参数
 * @param propColumns 配置字段默认值 会合并
 * @param propModelConfig 配置全部配置默认值 会合并
 * @returns
 */
function useGetModel(params: any, propColumns: any = null, propModelConfig = {}) {
  const [modelConfig, setModelConfig] = useState<modelConfigType>(null);

  const getConfig = async () => {
    const res = await getModelConfig(params);
    if (res.data.modelConfig) {
      const dataConfig: any = {};
      const keys = Object.keys(res.data.modelConfig);

      keys.forEach((key: any) => {
        dataConfig[key] = res.data.modelConfig[key];
        if (
          typeof res.data.modelConfig[key] === 'string' &&
          res.data.modelConfig[key].indexOf('/api/') !== -1
        ) {
          dataConfig[`${key}Fn`] = async (data: any) => postBody(res.data.modelConfig[key], data);
        }
      });

      const { columns, ...rest } = dataConfig;
      const config = {
        columns: loopColumnConfig(columns, propColumns),
        ...rest,
      };

      // 封装一个表格Props
      const tableProps: any = {
        search: config.search !== false,
        request: config.tableApiFn,
        columns: config.columns,
        pagination: rest.pagination,
      };

      if (config.headerTitleConfig) {
        setTableConfig(tableProps, config, 'headerTitleConfig');
      }
      if (config.operationConfig) {
        setTableConfig(tableProps, config, 'operationConfig');
      }
      return { ...config, tableProps, ...propModelConfig };
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const resConfig = await getConfig();
        setModelConfig(resConfig);
      } catch (error) {}
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modelLoading = useMemo(() => React.createElement(Loading), []);

  const modelRefresh = useCallback(async () => {
    const resConfig = await getConfig();
    setModelConfig(resConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [modelConfig, modelLoading, modelRefresh];
}

export default useGetModel;
