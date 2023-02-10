import { Settings as LayoutSettings } from '@ant-design/pro-components'
import { Mode, UseSwitchTabsOptions } from 'use-switch-tabs'
import { themeConfig } from './theme'

export type SwitchTabsOptions = {
  mode: Mode
  /** Fixed tab header */
  fixed?: boolean
  /** Whether to display the refresh button on the top bar */
  reloadable?: boolean
} & Pick<UseSwitchTabsOptions, 'persistent'>
// ================ Antd Theme Config ================

/**
 * all default static settings
 */
export type SettingsConfig = LayoutSettings & {
  pwa?: boolean
  logo?: string
  siderWidth?: number
  switchTabs?: SwitchTabsOptions
  themeConfig?: typeof themeConfig
}

export const defaultSettings: SettingsConfig = {
  // ------------ All layout config ---------
  navTheme: 'light',
  siderWidth: 250,
  colorPrimary: themeConfig.token?.colorPrimary,
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Next Admin',
  pwa: true,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  // ------------ Custom config ---------
  switchTabs: {
    mode: Mode.Route,
    fixed: true,
    reloadable: true,
    persistent: {
      force: true,
    },
  },
  themeConfig,
}
