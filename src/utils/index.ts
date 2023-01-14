/**
 * register auto import
 */
export { allTranslation } from '@/locales/translation/_all'
export {
  getMenuData,
  PageLoading,
  ProCard,
  ProForm,
  ProFormDigitRange,
  ProFormText,
  StatisticCard,
} from '@ant-design/pro-components'
export { PageContainer as PageContainer } from '@ant-design/pro-layout/es/components/PageContainer'
export { SettingDrawer as PSettingDrawer } from '@ant-design/pro-layout/es/components/SettingDrawer'
export { default as Marquee } from 'react-fast-marquee'
export * from '../../config/defaultSettings' // default settings
export { default as routesUmi } from '../../config/routes'
import theme from 'antd/es/theme'
export const useToken = theme.useToken
