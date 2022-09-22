import DeleteModalCustom from '@/components/ModalCustom/DeleteModalCustom';
import { useState } from 'react';
import type { ModalRenderPropsType } from '@/components/TableCustom/types';

/**
 * 内置功能表单
 */
function Delete(props: ModalRenderPropsType) {
  const { modelchildName, closeModal, btnConfig, clickConfig, tableRef } = props;
  // 内部显示状态
  const [visible, setVisible] = useState<boolean>(true);
  // 解构按钮配置的弹窗配置
  const { config, edit = false } = btnConfig.modalConfig || {};
  // 表单配置参数
  const { submitValuesBefor, submitRequest, submitOnDone, ...configRest } = config;

  let initialValues: any = {};

  // 如果显示 并且 开启编辑模式
  if (visible && edit) {
    initialValues = { ...clickConfig.irecord };

    // 如果动态标题
    if (typeof configRest.title === 'function') {
      configRest.title = configRest.title(initialValues);
    }
  }

  const defaultConfig = {
    title: '确认删除?',
    desc: '删除数据后无法恢复',
    visible,
    onOk: async () => {
      // 遍历处理默认数据
      let submitValue: any = {};
      if (edit) {
        // 如果是编辑默认带上id
        submitValue = { ...clickConfig.irecord };
      }
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
          setVisible(false);
          tableRef.current.reload();
        } catch (error) {
          if (submitOnDone) {
            submitOnDone({
              status: 'error',
              result: {},
              params: submitValue,
            });
          }
        }
      }

      try {
        await btnConfig.onClick(submitValue, tableRef);
        setVisible(false);
      } catch (error) {}
    },
    onCancel: () => {
      setVisible(false);
    },
    afterClose: () => {
      if (closeModal) {
        closeModal();
      }
    },
  };

  const newConfig = { ...defaultConfig, ...configRest };

  return <DeleteModalCustom id={modelchildName} key={modelchildName} {...newConfig} />;
}

export default Delete;
