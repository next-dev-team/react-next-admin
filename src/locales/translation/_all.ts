import common from './common'
import component from './component'
import menu from './menu'

/**
 *  Translates value type suggestions to avoid wrong parameters
 *  @example
 *  t('welcome',{'welcome': { name: 'sila', days: 'Monday' }})
 */
export type TransValue = {
  welcome: {
    name: string
    days: string
  }
}

export const allTranslation = (langKey: LangKey) => {
  return {
    ...getMenuKey(langKey, common),
    ...getMenuKey(langKey, menu),
    ...getMenuKey(langKey, component),
  }
}
