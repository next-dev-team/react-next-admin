import ReactDOM from "react-dom/client"; // 修改后的引入路径
import type { ModalRenderPropsType } from "@/components/TableCustom/types";
import React from "react";
// 点击弹窗
import Form from "./FormModal";
import Delete from "./DeleteModal";
import Confirm from "./ConfirmModal";
import Import from "./ImportModal";
import PreviewHtml from "./PreviewHtmlModal";

// 直接运行
import Download from "./Download";
import OnClick from "./OnClick";

const components: any = {
  Form,
  Delete,
  PreviewHtml,
  Import,
  Confirm,
  OnClick,
  Download,
};

export const getModalDom = (key: string) => {
  return document.getElementById(key);
};

export const closeModal = (key: string) => {
  const node = getModalDom(key);
  if (node) {
    document.body.removeChild(node);
  }
};

/**
 * 动态插入页面
 */
const Modal = (props: ModalRenderPropsType) => {
  const { children, btnConfig } = props;

  if (!components[children.modalType]) {
    $global.log(`Table内置组件:${children.modalType}无法识别`);
    return;
  }

  // 判断是否是弹窗组件
  if (children.modalType === "Download" || children.modalType === "OnClick") {
    // 如果不是 就直接执行函数
    components[children.modalType](children.props);
    return;
  }

  const modelName = `${btnConfig.key}-modal`;
  const modelchildName = `${btnConfig.key}-modal-child`;

  // 如果弹窗dom存在 则不弹窗
  if (getModalDom(modelName)) {
    return;
  }
  // 向组件内添加props属性
  const newChildren = React.createElement(components[children.modalType], {
    closeModal: () => {
      // const node = document.getElementById(modelchildName);
      // if (node && node.parentNode) {
      //   document.body.removeChild(node.parentNode);
      // }

      const node: any = document.getElementById(modelName);
      if (node.nextElementSibling) {
        const has =
          node.nextElementSibling.getElementsByClassName(modelchildName);
        if (has.length > 0) {
          has[0].parentNode.remove();
        }
      }

      closeModal(modelName);
    },
    modelName,
    modelchildName,
    ...children.props,
  });

  const rootDom = document.body;
  const node = document.createElement("div");
  node.style.display = "unset";
  node.id = modelName;
  // @ts-ignore
  rootDom.appendChild(node);

  ReactDOM.createRoot(node).render(newChildren);
};

export default Modal;
