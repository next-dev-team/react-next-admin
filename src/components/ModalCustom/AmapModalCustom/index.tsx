import ModalCustom from '@/components/ModalCustom';
import styles from './index.less';
import type { ModalProps } from 'antd/lib/modal';
import type { AmapPropsType } from '@/components/AmapCustom';
import AmapCustom from '@/components/AmapCustom';

declare type AmapModalCustomType = {
  /**
   * 地图显示的Props 查看地图api
   * @description
   */
  amapProps?: AmapPropsType;
} & ModalProps;

/**
 * 业务确认删除弹窗
 * @param Props
 * @returns
 */
function AmapModalCustom(Props: AmapModalCustomType) {
  const { amapProps, onOk, onCancel, ...rest } = Props;

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
        wrapClassName={styles.amapModalCustom}
        okType="danger"
        onOk={handleOk}
        onCancel={handleCancel}
        width="800px"
      >
        <AmapCustom {...amapProps} />
      </ModalCustom>
    </>
  );
}

export default AmapModalCustom;
