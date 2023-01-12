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

  type LangKey = LiteralUnion<'en-US' | 'zh-CN', string>

  type TranKey = keyof ReturnType<
    typeof import('@/locales/translation/_all')['allTranslation']
  >

  /**
   *  ========= UMI ================
   */
  type RunTimeLayoutConfig = import('@umijs/max').RunTimeLayoutConfig
  type LayoutSettings = import('../../config/defaultSettings').SettingsConfig
}
