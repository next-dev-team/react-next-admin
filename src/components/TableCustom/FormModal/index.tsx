import FormCustom from '@/components/FormCustom';
import { useRef, useState, useEffect } from 'react';
import type { ModalRenderPropsType } from '@/components/TableCustom/types';
import { message } from 'antd';
import { responseConfig } from '@/services/config';
import { deepCopy } from '@/utils';
import type { FormInstance } from 'antd';

/**
 * 递归遍历表格配置文件
 * @param columns
 * @param item
 * @returns
 */
const recursionChildren = (columns: any, item: any) => {
  if (!item.children) {
    columns.push({ ...item, formOrder: item.formOrder ?? 99 });
    return;
  }
  item.children.forEach((i: any) => {
    if (i.hideInForm === true) {
      return;
    }
    recursionChildren(columns, i);
  });
};

export declare type FormCustomRefType = {
  /**
   * 关闭当前会话窗
   */
  closeFormCustom: () => void;
};

/**
 * 处理tabel传入进来的格式
 * @param newColumns
 * @param tableColumns
 * @param tableProps
 * @param edit
 */
const formatColumnsFn = (newColumns: any, tableColumns: any, tableProps: any, edit: any) => {
  // 如果没有自定义表格配置、取表格配置、遍历一次去掉索引关系
  tableProps.columns.forEach((item: any) => {
    // 去掉不相关的
    if (item.hideInForm === true || item.valueType === 'option') {
      return;
    }
    recursionChildren(newColumns, item);
  });
  // 排序
  newColumns.sort((a: any, b: any) => {
    return a.formOrder - b.formOrder;
  });
  // 分组
  newColumns.forEach((column: any) => {
    // 如果是只生效表格删除宽度
    if (column.tableWidth) {
      delete column.width;
    }
    if (column.formWidth) {
      column.width = column.formWidth;
    }
    if (edit) {
      if (!column.hideInForm) {
        // 因为编辑的时候已经赋值记录值 删除默认值就不会警告提醒
        if (column.hasOwnProperty('initialValue')) {
          delete column.initialValue;
        }
      }
    }
    if (!column.formGroup) {
      tableColumns.push({ ...column });
    } else {
      const has = tableColumns.find((i: any) => {
        return i.formGroup === column.formGroup && i.valueType === 'group';
      });

      if (has) {
        has.columns.push({ ...column });
      } else {
        tableColumns.push({
          // title: '',
          formGroup: column.formGroup,
          valueType: 'group',
          columns: [{ ...column }],
        });
      }
    }
  });
};

/**
 * 内置功能表单
 */
function Form(props: ModalRenderPropsType) {
  // 存放表单的ref
  const customFormRef = useRef<FormInstance>();
  const { modelchildName, closeModal, btnConfig, tableProps, clickConfig, tableRef } = props;
  // 内部显示状态
  const [visible, setVisible] = useState<boolean>(true);
  // 解构按钮配置的弹窗配置
  const { config, edit = false, columns, formatColumns = false } = btnConfig.modalConfig || {};
  // 存放一份进入就保存的表单配置 不会因为回调columnBefor 改变变化
  const [oldFormColumns, setOldFormColumns] = useState<any>(null);
  // 存放当前表单配置
  const [formColumns, setFormColumns] = useState<any>(null);
  // 存放进入就计算好的表单参数配置
  const [newConfig, setNewConfig] = useState<any>(null);
  // 表单默认赋值
  const [formInitialValues, setFormInitialValues] = useState<any>(null);

  // 表单配置参数
  const {
    request,
    columnBefor,
    initialValuesBefor,
    submitValuesBefor,
    submitRequest,
    submitOnDone,
    onValuesChange,
    params,
    formCustomRef,
    ...configRest
  } = config;

  // 如果是有传入formRef 取外面传入 否则自己正常
  let formRef: any;
  if (config.formRef) {
    formRef = config.formRef;
  } else {
    formRef = customFormRef;
  }

  if (formCustomRef) {
    formCustomRef.current = {
      closeFormCustom: () => {
        setVisible(false);
        if (closeModal) {
          closeModal();
        }
      },
    };
  }
  useEffect(() => {
    if (visible) {
      let initialValues: any = {};
      const tableColumns: any = [];

      if (!columns) {
        const newColumns: any = [];
        formatColumnsFn(newColumns, tableColumns, tableProps, edit);
      } else {
        if (formatColumns) {
          const newColumns: any = [];
          formatColumnsFn(
            newColumns,
            tableColumns,
            {
              columns: columns,
            },
            edit,
          );
        }
      }

      let configColumns: any = deepCopy(tableColumns.length > 0 ? tableColumns : columns);

      // 保存一份全量值
      setOldFormColumns(configColumns);

      // 如果显示 并且 开启编辑模式
      if (edit) {
        initialValues = { ...clickConfig.irecord };

        // 如果动态标题
        if (typeof configRest.title === 'function') {
          configRest.title = configRest.title(initialValues);
        }
        if (typeof configRest.title === 'function') {
          configRest.title = configRest.title(initialValues);
        }
        // 如果没有自定义表单配置
        if (tableColumns.length > 0) {
          configColumns.forEach((newItem: any) => {
            if (!newItem.hideInForm) {
              // 因为编辑的时候已经赋值记录值 删除默认值就不会警告提醒
              if (newItem.hasOwnProperty('initialValue')) {
                delete newItem.initialValue;
              }
              if (newItem.columns) {
                newItem.columns.forEach((iItem: any) => {
                  if (iItem.hasOwnProperty('initialValue')) {
                    delete iItem.initialValue;
                  }
                });
              }
            }
          });
        }
      }

      // 渲染之前可以动态的修改配置
      if (typeof columnBefor === 'function') {
        const deepColumn = deepCopy(configColumns);
        configColumns = columnBefor(deepColumn, initialValues);
      }

      if (request) {
        (async () => {
          const hide = message.loading('数据请求中...', 0);
          try {
            const requestParams = { ...params };

            if (edit) {
              requestParams.id = initialValues.id;
            }
            const data = await request(requestParams);

            if (
              data[responseConfig.code] !== undefined &&
              data[responseConfig.message] &&
              data[responseConfig.data]
            ) {
              initialValues = data.data;
            } else {
              initialValues = data;
            }
            // 如果配置了展示请初始化数据的钩子
            if (initialValuesBefor) {
              initialValues = initialValuesBefor(initialValues);
            }
            setFormInitialValues(initialValues);

            hide();
          } catch (error) {
            if (closeModal) {
              closeModal();
            }
            hide();
          }
        })();
      } else {
        // 如果配置了展示请初始化数据的钩子
        if (initialValuesBefor) {
          initialValues = initialValuesBefor(initialValues);
        }
        setFormInitialValues(initialValues);
      }

      const defaultConfig = {
        layoutType: 'ModalForm',
        title: '弹窗表单',
        onFinish: async (values: any) => {
          // 遍历处理默认数据
          let submitValue: any = { ...values };
          if (edit) {
            // 如果是编辑默认带上id
            submitValue = { ...submitValue, id: clickConfig.irecord.id };
          }
          // tableProps.columns.forEach((item: any) => {
          //   if (!item.hideInForm) {
          //     if (item.initialValue) {
          //       initialValue[item.dataIndex] = item.initialValue;
          //     } else {
          //       initialValue[item.dataIndex] = undefined;
          //     }
          //   }
          // });
          // 数据提交前的钩子函数
          if (submitValuesBefor) {
            submitValue = submitValuesBefor(submitValue);
          }
          // 如果配置了自动请求
          if (submitRequest) {
            try {
              const result = await submitRequest(submitValue);
              // 如果设置请求回调
              if (submitOnDone) {
                submitOnDone({
                  status: 'success',
                  result,
                  params: submitValue,
                });
              }
              tableRef.current.reload();

              return result;
            } catch (error) {
              if (submitOnDone) {
                submitOnDone({
                  status: 'error',
                  result: {},
                  params: submitValue,
                });
              }
              return false;
            }
          }
          try {
            return await btnConfig.onClick(submitValue, tableRef);
          } catch (error) {
            return false;
          }
        },
        onVisibleChange: (value: any) => {
          if (!value) {
            setVisible(value);
          }
        },
        modalProps: {
          afterClose: () => {
            if (closeModal) {
              closeModal();
            }
          },
        },
        initialValues: initialValues,
      };

      setNewConfig({ ...defaultConfig, ...configRest });
      setFormColumns(configColumns);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!formColumns || !newConfig || !formInitialValues) {
    return null;
  }

  const formValuesChange = async (value: any) => {
    if (typeof onValuesChange === 'function') {
      await onValuesChange(
        value,
        deepCopy(formColumns),
        setFormColumns,
        formRef,
        deepCopy(oldFormColumns),
      );
    }
  };

  return (
    <FormCustom
      formRef={formRef}
      id={modelchildName}
      key={modelchildName}
      {...newConfig}
      initialValues={formInitialValues}
      columns={formColumns}
      visible={visible}
      onValuesChange={formValuesChange}
      // request={formRequest}
    />
  );
}

export default Form;
