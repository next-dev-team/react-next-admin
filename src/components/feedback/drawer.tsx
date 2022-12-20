import NiceModal, { useModal } from '@ebay/nice-modal-react'
import type { DrawerProps } from 'antd/es'

export type TNiceModal = DrawerProps
export default NiceModal.create((props: TNiceModal) => {
  // Use a hook to manage the modal state
  const modal = useModal()
  return (
    <Drawer
      open={modal.visible}
      onClose={() => modal.hide()}
      afterOpenChange={(visible) => {
        if (!visible) modal.remove()
      }}
      {...props}
    >
      {props?.children}
    </Drawer>
  )
})
