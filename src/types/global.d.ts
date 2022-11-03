// Manual export global type

export {};

declare global {
  /**
   *  ========= Locale ================
   */
  type LangKey = 'en-US' | 'zh-CN';

  /**
   *  ========= UMI ================
   */
  type RunTimeLayoutConfig = import('@umijs/max').RunTimeLayoutConfig;
  type LayoutSettings = import('@ant-design/pro-components').Settings;
}
