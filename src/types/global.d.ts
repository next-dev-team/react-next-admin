// Manual export global type

export {}

declare global {
  const SvgComponent: (
    props: React.SVGProps<SVGSVGElement>,
  ) => React.ReactElement

  /**
   *  ========= Locale ================
   */
  type LangKey = 'en-US' | 'zh-CN'

  /**
   *  ========= UMI ================
   */
  type RunTimeLayoutConfig = import('@umijs/max').RunTimeLayoutConfig
  type LayoutSettings = import('@ant-design/pro-components').Settings
}
