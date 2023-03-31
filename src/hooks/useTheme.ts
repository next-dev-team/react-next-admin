import { convertPrefixedObject, filterObjEndsWith } from '@/utils/obj'
import { theme } from 'antd'
import { kebabCase } from 'lodash-es'

type Token = {}

const useTheme = () => {
  const { token } = theme.useToken()

  const filterTheme = (
    filterName: string,
    opt?: { toPx?: boolean; isReplacePrefix?: boolean },
  ) => {
    const newFilter = kebabCase(filterName)
    const { toPx, isReplacePrefix = true } = opt ?? {}
    const colors: Record<string, string> = {}
    const keys = Object.keys(token).filter((i) =>
      i.includes(filterName),
    ) as Array<keyof Token>

    keys.forEach((key) => {
      const colorValue = toPx ? `${token[key]}px` : token[key] || ''
      colors[kebabCase(key)] = colorValue
    })

    return isReplacePrefix
      ? convertPrefixedObject(colors, `${newFilter}-`, 'base')
      : colors
  }

  const themeValue = {
    fontWeight: filterTheme('fontWeightStrong'),
    colors: filterTheme('color'),
    fontSize: filterTheme('fontSize'),
    space: filterObjEndsWith(filterTheme('margin'), ['horizontal']),
    borderRadius: filterTheme('borderRadius'),
    lineHeight: filterTheme('lineHeight'),
    boxShadow: filterTheme('boxShadow'),
    screen: filterObjEndsWith(filterTheme('screen', { toPx: true }), [
      'min',
      'max',
    ]),
  }

  console.log('themeValue', themeValue)
  return { token, ...themeValue }
}

export default useTheme
