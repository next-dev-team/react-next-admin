import ImportModalCustom from '@/components/ModalCustom/ImportModalCustom';
import type { ModalRenderPropsType } from '@/components/TableCustom/types';
import { Modal } from 'antd';

/**
 * 内置功能表单
 */
function Import(props: ModalRenderPropsType) {
  const { modelchildName, closeModal, btnConfig, clickConfig, tableRef } =
    props;
  // 内部显示状态
  const [visible, setVisible] = useState<boolean>(true);
  // 解构按钮配置的弹窗配置
  const { config, edit = false } = btnConfig.modalConfig || {};
  // 表单配置参数
  const { submitValuesBefor, submitRequest, submitOnDone, ...configRest } =
    config;

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
    visible,
    onOk: async (values: any) => {
      // 遍历处理默认数据
      let submitValue: any = values;

      // 数据提交前的钩子函数
      if (submitValuesBefor) {
        submitValue = submitValuesBefor(submitValue);
      }
      // 如果配置了自动请求
      if (submitRequest) {
        try {
          const result = await submitRequest(submitValue);
          const error = result.data.error;
          if (error && error.length > 0) {
            const errorDom = error.map((i: string, index: any) => {
              return (
                <div key={`error${index * 1}`} style={{ color: 'red' }}>
                  {i}
                </div>
              );
            });
            Modal.error({
              title: '数据导入出现以下问题:',
              content: (
                <div style={{ maxHeight: 400, overflow: 'auto' }}>
                  {errorDom}
                </div>
              ),
            });
          }
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
          return true;
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
        await btnConfig.onClick(submitValue, tableRef);
        setVisible(false);
        return true;
      } catch (error) {
        return false;
      }
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

  return (
    <ImportModalCustom
      id={modelchildName}
      key={modelchildName}
      {...newConfig}
    />
  );
}

export default Import;
