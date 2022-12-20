import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { ModalProps } from 'antd/es'

export type TNiceModal = ModalProps
export default NiceModal.create((props: TNiceModal) => {
  // Use a hook to manage the modal state
  const modal = useModal()
  return (
    <Modal
      onOk={() => modal.hide()}
      open={modal.visible}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}
      {...props}
    >
      {props?.children}
    </Modal>
  )
})
