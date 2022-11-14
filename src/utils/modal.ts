// all global modal or drawer should be register here

import NiceModal from '@ebay/nice-modal-react'

export enum _modalEnumKey {
  'test_modal' = 'test_modal',
  'test_drawer' = 'test_drawer',
  'drawer_devTools' = 'drawer_devTools',
}

export const _allModalRegistered = () => {
  NiceModal.register(_modalEnumKey.test_modal, GModal)
  NiceModal.register(_modalEnumKey.test_drawer, GDrawer)
  NiceModal.register(_modalEnumKey.drawer_devTools, GDrawer)
}

export const _allModal = {
  // --- showTestModal ---
  showTestModal: (arg?: typeof GModal['defaultProps']) =>
    NiceModal.show(_modalEnumKey.test_modal, arg),
  hideTestModal: () => NiceModal.hide(_modalEnumKey.test_modal),
  // --- drawer test ---
  showDrawerTest: (arg?: typeof GDrawer['defaultProps']) =>
    NiceModal.show(_modalEnumKey.test_drawer, arg),
  hideDrawerTest: () => NiceModal.hide(_modalEnumKey.test_modal),
  // --- drawer devTools test ---
  showDrawer_devTools: (arg?: typeof GDrawer['defaultProps']) =>
    NiceModal.show(_modalEnumKey.drawer_devTools, arg),
}
