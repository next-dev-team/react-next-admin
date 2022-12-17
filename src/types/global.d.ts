// Manual export global type

export {}

declare global {
  const SvgComponent: (
    props: React.SVGProps<SVGSVGElement>,
  ) => React.ReactElement

  interface Window {
    tabsAction: import('use-switch-tabs').ActionType
    routerBase: string
  }
  /**
   *  ========= Locale ================
   */
  type LangKey = 'en-US' | 'zh-CN'

  /**
   *  ========= UMI ================
   */
  type RunTimeLayoutConfig = import('@umijs/max').RunTimeLayoutConfig
  type LayoutSettings = import('../../config/defaultSettings').SettingsConfig
}
