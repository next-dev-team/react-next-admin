import { useState } from 'react';
import { Modal } from 'antd';
import type { ModalProps } from 'antd/lib/modal';

declare type ModalPropsType = ModalProps & {
  /**
   * 显示的内容
   */
  children?: React.ReactNode;
};
/**
 * 弹窗和antd一样
 * 因为业务ui可能会有改变封装一层作为基础弹窗
 * @param Props
 * @returns
 */
function ModalCustom(Props: ModalPropsType) {
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const { children, onOk, onCancel, ...rest } = Props;

  const handleOk = async (e: any) => {
    if (onOk && typeof onOk === 'function') {
      setConfirmLoading(true);
      try {
        await onOk(e);
        setConfirmLoading(false);
      } catch (error) {
        setConfirmLoading(false);
      }
    }
  };

  const handleCancel = (e: any) => {
    if (onCancel && typeof onCancel === 'function') {
      onCancel(e);
    }
  };
  return (
    <>
      <Modal {...rest} confirmLoading={confirmLoading} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
}

export default ModalCustom;
