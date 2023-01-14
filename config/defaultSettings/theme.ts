import { ThemeConfig } from 'antd/es/config-provider/context'

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#fed12e',
    colorPrimaryHover: '#D9AA1C',
    colorSuccess: '#019e00',
    colorError: '#cb1132',
    colorInfo: '#fed12e',
    borderRadius: 5,
    colorTextBase: '#000000',
    colorTextSecondary: '#878787',
    colorBgBase: '#ffffff',
    colorBorder: '#F1F1F1',
    colorBgSpotlight: '#505050',
    colorPrimaryActive: '#FED12E',
    colorPrimaryText: '#FED12E',
    colorPrimaryTextActive: '#FED12E',
  },
  components: {
    Select: {
      controlItemBgActive: '#FCE59680',
    },
    Menu: {
      controlItemBgActive: '#fffef0',
    },
    Slider: {
      colorPrimaryBorder: '#fed12e',
    },
    Tag: {
      colorSuccessBg: '#ecfbeb',
    },
    Alert: {
      colorSuccessBg: '#ebf7e9',
    },
    Button: {
      colorLink: '#E1A900',
      colorTextDisabled: '#B0B0B0',
    },
    Typography: {
      colorWarning: '#FED12E',
    },
  },
}
