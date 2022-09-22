import { message } from 'antd';

const OnClick = async (props: any) => {
  const { btnConfig, clickConfig, tableRef } = props;
  // 内部显示状态
  // 解构按钮配置的弹窗配置
  const { config, edit = false } = btnConfig.modalConfig || {};
  // 表单配置参数
  const { submitValuesBefor, submitRequest, submitOnDone } = config;

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
    const hide = message.loading('请求中...', 0);
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
      hide();
      return result;
    } catch (error) {
      if (submitOnDone) {
        submitOnDone({
          status: 'error',
          result: {},
          params: submitValue,
        });
      }
      hide();
      return false;
    }
  }
  try {
    return btnConfig.onClick(submitValue, tableRef);
  } catch (error) {
    return false;
  }
};

export default OnClick;
