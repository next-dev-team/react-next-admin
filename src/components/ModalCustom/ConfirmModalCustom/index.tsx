import ModalCustom from '@/components/ModalCustom';
import styles from './index.less';
import type { ModalProps } from 'antd/lib/modal';

declare type ConfirmModalCustomType = {
  /**
   * 显示标题
   * @description
   * @default 确认信息
   */
  title?: string;
  /**
   * 显示描述
   * @description
   * @default 确定要此操作？
   */
  desc?: string;
} & ModalProps;

/**
 * 业务确认删除弹窗
 * @param Props
 * @returns
 */
function ConfirmModalCustom(Props: ConfirmModalCustomType) {
  const { title = '确认信息', desc = '确定要此操作？', onOk, onCancel, ...rest } = Props;

  const handleOk = async (e: any) => {
    if (onOk && typeof onOk === 'function') {
      await onOk(e);
    }
  };

  const handleCancel = (e: any) => {
    if (onCancel && typeof onCancel === 'function') {
      onCancel(e);
    }
  };

  return (
    <>
      <ModalCustom
        {...rest}
        title=""
        destroyOnClose={true}
        maskClosable={false}
        wrapClassName={styles.confirmModalCustom}
        onOk={handleOk}
        onCancel={handleCancel}
        width="400px"
      >
        <h2>{title}</h2>
        <p>{desc}</p>
      </ModalCustom>
    </>
  );
}

export default ConfirmModalCustom;
