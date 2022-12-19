/**
 * extract obj locale menu key to one level
 * @example
 *   const menuObj = {
 * 'menu.welcome': {
     'en-US': 'welcome',
     'zh-CN': '欢迎',
     }
    const getKey = getMenuKey('en-US',menuObj)
    ====> {  'menu.welcome': 'welcome' }
 * }

 */
export const getMenuKey = <T extends Record<string, any>>(
  langKey: LangKey,
  obj: T,
) => {
  let newObj = {}
  Object.keys(obj).forEach((i) => {
    const draftObj = { [i]: obj?.[i]?.[langKey] }
    newObj = { ...newObj, ...draftObj }
  })
  // console.log('[getMenuKey]', newObj);

  return newObj
}

/**
 * define menu key base on LangKey
 * @param obj
 */
export const defineLocaleMenu = <
  T extends Record<any, Record<LangKey, string>>,
>(
  obj: T,
) => {
  return obj
}
