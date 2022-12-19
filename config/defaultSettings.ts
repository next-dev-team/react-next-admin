import { Settings as LayoutSettings } from '@ant-design/pro-components'
import { Mode, UseSwitchTabsOptions } from 'use-switch-tabs'

export type SwitchTabsOptions = {
  mode: Mode
  /** 固定标签页头部 */
  fixed?: boolean
  /** 是否在顶栏显示刷新按钮 */
  reloadable?: boolean
} & Pick<UseSwitchTabsOptions, 'persistent'>
export type SettingsConfig = LayoutSettings & {
  pwa?: boolean
  logo?: string
  switchTabs?: SwitchTabsOptions
}
const Settings: SettingsConfig = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Ant Design Pro',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  switchTabs: {
    mode: Mode.Route,
    fixed: true,
    reloadable: true,
    persistent: {
      force: true,
    },
  },
}

export default Settings
