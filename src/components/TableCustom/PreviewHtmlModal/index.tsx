import PreviewHtmlModalCustom from "@/components/ModalCustom/PreviewHtmlModalCustom";
import { useState, useEffect } from "react";
import type { ModalRenderPropsType } from "@/components/TableCustom/types";
import { responseConfig } from "@/services/config";
import { message } from "antd";

/**
 * 内置功能表单
 */
function PreviewHtml(props: ModalRenderPropsType) {
  const { modelchildName, closeModal, btnConfig, clickConfig } = props;
  // 内部显示状态
  const [visible, setVisible] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<any>({});
  // 解构按钮配置的弹窗配置
  const { config } = btnConfig.modalConfig || {};

  // 表单配置参数
  const { params, request, initialValuesBefor, ...configRest } = config;

  useEffect(() => {
    let values: any = { ...clickConfig.irecord };

    // 如果配置了网络请求数据
    if (request) {
      const hide = message.loading("数据请求中...", 0);
      const requestParams = { ...params };
      requestParams.id = values.id;
      request(requestParams)
        .then((data: any) => {
          if (
            data[responseConfig.code] !== undefined &&
            data[responseConfig.message] &&
            data[responseConfig.data]
          ) {
            values = data.data;
          } else {
            values = data;
          }
          // 数据初始化复制前的钩子执行
          if (initialValuesBefor) {
            values = initialValuesBefor(values);
          }
          setInitialValues(values);
          setVisible(true);
        })
        .catch(() => {})
        .finally(() => {
          hide();
        });
    } else {
      // 数据初始化复制前的钩子执行
      if (initialValuesBefor) {
        values = initialValuesBefor(values);
      }
      setInitialValues(values);
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultConfig = {
    visible,
    title: initialValues.title || "",
    desc: initialValues.desc || "",
    date: initialValues.date || "",
    content: initialValues.content || "",
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
    <PreviewHtmlModalCustom
      id={modelchildName}
      key={modelchildName}
      {...newConfig}
    />
  );
}

export default PreviewHtml;
