import { SelectLang, useModel } from '@umijs/max'
import { Space } from 'antd'
import HeaderSearch from '../HeaderSearch'
import Avatar from './AvatarDropdown'

export type SiderTheme = 'light' | 'dark'

const GlobalHeaderRight = () => {
  const { initialState } = useModel('@@initialState')

  if (!initialState || !initialState.settings) {
    return null
  }

  // const { navTheme, layout } = initialState.settings

  return (
    <Space>
      <HeaderSearch
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          {
            label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
            value: 'umi ui',
          },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]}
        // onSearch={value => {
        //   console.log('input', value);
        // }}
      />

      <Tag color={_consIsAppEnvDev ? 'orange' : 'green'} className="uppercase">
        {UMI_ENV}
      </Tag>
      <Avatar />
      <SelectLang />
    </Space>
  )
}
export default GlobalHeaderRight
