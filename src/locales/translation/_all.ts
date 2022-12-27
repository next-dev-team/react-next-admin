import component from './component'
import menu from './menu'
import common from './common'

export const allTranslation = (langKey: LangKey) => {
  return {
    ...getMenuKey(langKey, common),
    ...getMenuKey(langKey, menu),
    ...getMenuKey(langKey, component),
  }
}
