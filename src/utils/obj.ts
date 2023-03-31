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
): T => {
  let newObj = {}
  Object.keys(obj).forEach((i) => {
    const draftObj = { [i]: obj?.[i]?.[langKey] }
    newObj = {
      ...newObj,
      ...draftObj,
    }
  })
  // console.log('[getMenuKey]', newObj);

  return newObj as T
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

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable max-len */

/**
 * Takes an object and removes null or undefined values from it
 *
 * @param obj - The object to sanitize
 * @returns a new sanitized object
 *  * @example
 * // Removes null and undefined properties from the input object.
 *
 * const obj = {
 *   name: 'John',
 *   age: null,
 *   city: undefined,
     gender: 'male'
 }
 */
export const sanitizeObj = <T extends Record<any, any>>(obj: T): T => {
  return Object.entries(obj).reduce((accumulator, [key, value]) => {
    if (value != null) {
      accumulator[key as keyof T] = value
    }
    return accumulator
  }, {} as T)
}

type ObjectWithPrefix<T> = {
  [K in keyof T as K extends `${string}${infer S}` ? S : never]: T[K]
}

/**
 * Convert an object with prefixed keys into an object with keys without the prefix.
 * Optionally, replace the key for values when the prefix matches with a dynamic key.
 *
 * @template T - A type extending Record<string, unknown> representing input object type.
 * @param {ObjectWithPrefix<T>} input - The input object with prefixed keys.
 * @param {string} [prefix] - The prefix to remove from the keys. If not provided, the input object is returned unmodified.
 * @param {string} [dynamicKey] - An optional key to replace the key for the value when the prefix matches.
 * @returns {Record<string, unknown>} - The output object with keys without the prefix or replaced with the dynamic key.
 *
 * @example
 * const input = { "examplePrefixKey": "value" };
 * const prefix = "examplePrefix";
 * const dynamicKey = "newKey";
 * const output = convertPrefixedObject(input, prefix, dynamicKey);
 * console.log(output); // { "newKey": "value" }
 */
export function convertPrefixedObject<T extends Record<string, unknown>>(
  input: ObjectWithPrefix<T>,
  prefix?: string,
  dynamicKey?: string,
): Record<string, unknown> {
  if (!prefix) return input
  const output: Record<string, unknown> = {}
  Object.entries(input).forEach(([key, value]) => {
    if (`${key}-` === prefix) {
      if (dynamicKey) {
        output[dynamicKey] = value
      } else {
        output[key] = value
      }
    } else if (key.startsWith(prefix)) {
      const newKey = key.slice(prefix.length)
      output[newKey.charAt(0) + newKey.slice(1)] = value
    }
  })
  return output
}

/**
 * Filters out obj by type string and returns a new object without the specified obj.
 * @example
 * const Obj = {
 *   'max-xs': '767px',
 *   'min-sm': '768px',
 * };
 *
 * const filterMin = filterObj(obj, ['min]);
 * // Output: { 'max-xs': '767px', 'max-sm': '1023px' }
 */
export const filterObjEndsWith = (
  obj: Record<string, any>,
  types: string[],
): Record<string, string> => {
  return Object.keys(obj).reduce((acc, key) => {
    if (!types.some((type) => key.endsWith(type))) {
      acc[key] = obj[key]
    }
    return acc
  }, {} as Record<string, string>)
}
