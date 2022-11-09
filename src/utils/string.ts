/**
 * 生成唯一随机值
 * @returns
 */
export const _uuid = () => {
  const s: any = []
  const hexDigits: string = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  return s.join('')
}

export const _isCamelCase = (str: string) => {
  return /^[a-z][A-Za-z]*$/.test(str)
}

/**
 * see https://github.com/antfu/icones/blob/main/src/utils/case.ts
 */
export const _stringCase = {
  bare(id: string) {
    return id.replace(/^.*:/, '')
  },
  barePascal(id: string) {
    return id
      .replace(/^.*:/, '')
      .replace(/(?:^|[-_:]+)(\w)/g, (_, c) => c.toUpperCase())
  },
  iconify(id: string) {
    return id
  },
  dash(id: string) {
    return id.replace(/:/g, '-')
  },
  camel(id: string) {
    return id.replace(/[-_:]+(\w)/g, (_, c) => c.toUpperCase())
  },
  pascal(id: string) {
    return id.replace(/(?:^|[-_:]+)(\w)/g, (_, c) => c.toUpperCase())
  },
  component(id: string) {
    return `<${id.replace(/(?:^|[-_:]+)(\w)/g, (_, c) => c.toUpperCase())}/>`
  },
  componentKebab(id: string) {
    return `<${id.replace(/:/g, '-')}/>`
  },
  unocss(id: string) {
    return `i-${id.replace(/:/g, '-')}`
  },
}
