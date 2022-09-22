import ModalCustom from '@/components/ModalCustom';
import styles from './index.less';
import type { ModalProps } from 'antd/lib/modal';

declare type DeleteCustomType = {
  /**
   * 显示标题
   * @description
   * @default 你确定要删除？
   */
  title?: string;
  /**
   * 显示描述
   * @description
   * @default 删除数据后将无法恢复
   */
  desc?: string;
} & ModalProps;

/**
 * 业务确认删除弹窗
 * @param Props
 * @returns
 */
function DeleteModalCustom(Props: DeleteCustomType) {
  const {
    title = '你确定要删除？',
    desc = '删除后数据将无法恢复',
    onOk,
    onCancel,
    ...rest
  } = Props;

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
        wrapClassName={styles.deleteModalCustom}
        okType="danger"
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

export default DeleteModalCustom;
