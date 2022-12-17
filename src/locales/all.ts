import component from './translation/component'
import menu from './translation/menu'

export const allTranslation = (langKey: LangKey) => {
  return {
    ...getMenuKey(langKey, menu),
    ...getMenuKey(langKey, component),
  }
}
