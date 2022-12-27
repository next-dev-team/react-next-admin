/**
 * any export here must be provide or match with UMI app.tsx configs
 */

import { MenuDataItem } from '@ant-design/pro-components'
import { ApolloProvider } from '@apollo/client'
import NiceModal from '@ebay/nice-modal-react'
import { FormattedMessage, RequestConfig } from '@umijs/max'
import { debounce, isEmpty } from 'lodash'
import { createElement } from 'react'
const loginPath = '/user/login'

// all supported functions in defineApp
// $defineApp({

// })

// export function innerProvider(container: any) {
//   return React.createElement(Foo, { title: 'innerProvider' }, container);
// }
//
// export function i18nProvider(container: any) {
//   return React.createElement(Foo, { title: 'i18nProvider' }, container);
// }
//
// export function dataflowProvider(container: any) {
//   return React.createElement(Foo, { title: 'dataflowProvider' }, container);
// }
//

export function onRouteChange({ location, action }: any) {
  console.log('onRouteChange', location, action)
}

export function patchRoutes({ routes, routeComponents }: any) {
  console.log('patchRoutes', routes, routeComponents)
}

export function patchClientRoutes({ routes }: any) {
  console.log('patchClientRoutes', routes, Array.isArray(routes))
}

export const antd = (memo: any) => {
  memo.theme ||= {}
  memo.theme.algorithm = _theme.darkAlgorithm
  return memo
}

const filterByMenuData = (
  data: MenuDataItem[] = [],
  keyWord = '',
): MenuDataItem[] =>
  data
    .map((item) => {
      if (
        item?.name?.toLowerCase().includes(keyWord?.toLowerCase()) ||
        filterByMenuData(item.children || [], keyWord).length > 0
      ) {
        return {
          ...item,
          children: filterByMenuData(item.children || [], keyWord),
        }
      }

      return undefined
    })
    .filter((item) => !isEmpty(item)) as MenuDataItem[]

const loopMenuItem = (menus: any[]): MenuDataItem[] =>
  menus.map(({ routes, ...item }) => ({
    ...item,
    children: routes && loopMenuItem(routes),
  }))

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>
  currentUser?: any
  loading?: boolean
  fetchUserInfo?: () => Promise<any | undefined>
}> {
  const fetchUserInfo = async () => {
    try {
      return {
        name: 'Zila',
        avatar:
          'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      }
    } catch (error) {
      $history.push(loginPath)
    }
    return undefined
  }
  // 如果是登录页面，不执行
  if ($history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo()
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    }
  }
  return {
    fetchUserInfo,
  }
}

// global provider
function WrapperApp(props: any) {
  const { token } = useToken()
  return (
    <ApolloProvider client={apolloConfig}>
      {/* 
           https://ant.design/docs/react/customize-theme#api 
           https://ant.design/theme-editor
       */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: token.colorPrimary,
          },
        }}
      >
        <NiceModal.Provider>{props.children}</NiceModal.Provider>
      </ConfigProvider>
    </ApolloProvider>
  )
}

export function rootContainer(container: any, opts: any) {
  return createElement((props) => props.children, opts, container)
}

export function outerProvider(container: any) {
  return createElement(WrapperApp, { title: 'outerProvider' }, container)
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({
  initialState,
  // setInitialState,
}) => {
  return {
    // onError: (err) => {
    //   console.log('App: onError', err)
    // },
    token: {
      // sider: {
      //   paddingBlockLayoutMenu: 4,
      //   paddingInlineLayoutMenu: 4,
      // },
    }, // change token layout
    disableContentMargin: false,
    links: _consIsNodeEnvDev
      ? [
          <Link to="/~docs" key="docs">
            <BookOutlined />
            <span>{<FormattedMessage id="documents" />}</span>
          </Link>,
        ]
      : [],

    rightContentRender: () => <GRightContent />,
    menuFooterRender: (props) => {
      if (props?.collapsed) return undefined
      return (
        <div
          style={{
            textAlign: 'center',
            paddingBlockStart: 12,
          }}
        >
          <div>© {new Date().getFullYear()} Made with love</div>
          <div>by Next Dev</div>
        </div>
      )
    },
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    pageTitleRender: false,
    menuDataRender: (menuData = []) => loopMenuItem(menuData),
    postMenuData: (menus) => {
      const searchMenu = ($history?.location.state as any)?.menu
      const s = filterByMenuData(menus || [], searchMenu)
      return s
    },
    menuExtraRender: ({ collapsed }) => {
      // const route = $matchRoutes(menuData as any, location.pathname)?.pop()
      //   ?.route as MenuDataItem
      const searchMenu = ($history?.location.state as any)?.menu

      return (
        !collapsed && (
          <div className="space-y-2 mb-2">
            <Input
              style={{
                borderRadius: 4,
                backgroundColor: 'rgba(0,0,0,0.03)',
              }}
              prefix={
                <SearchOutlined
                  style={{
                    color: 'rgba(0, 0, 0, 0.15)',
                  }}
                />
              }
              allowClear
              defaultValue={searchMenu}
              placeholder="Search Menu"
              bordered={false}
              onChange={(e) => {
                debounce(() => {
                  $history.push(
                    {},
                    { menu: (e.target as HTMLInputElement).value },
                  )
                }, 500)()
              }}
            />
          </div>
        )
      )
    },
    headerContentRender: ({ isMobile }) =>
      !isMobile && <GHeaderContentRender />,
    breadcrumbRender: (routers = []) => [
      {
        path: '/',
        breadcrumbName: 'Home',
      },
      ...routers,
    ],
    // footerRender: () => <GFooter />,
    onPageChange: () => {
      // const { location } = $history;
      // 如果没有登录，重定向到 login
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   $history.push(loginPath);
      // }
    },
    bgLayoutImgList: [
      {
        src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],

    menuHeaderRender: undefined,
    appList: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'Ant Design',
        desc: 'The well-known UI',
        url: 'https://ant.design',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        title: 'AntV',
        desc: `Ant Group's new generation `,
        url: 'https://antv.vision/',
        target: '_blank',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
        title: 'Pro Components',
        desc: 'Professional UI component library',
        url: 'https://procomponents.ant.design/',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
        title: 'umi',
        desc: 'A plug-in enterprise-level ',
        url: 'https://umijs.org/zh-CN/docs',
      },

      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
        title: 'qiankun',
        desc: 'Probably the most complete 🧐',
        url: 'https://qiankun.umijs.org/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
        title: 'Language Sparrow',
        desc: 'Knowledge creation and sharing tool',
        url: 'https://www.yuque.com/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
        title: 'Kitchen',
        desc: 'Sketch toolset',
        url: 'https://kitchen.alipay.com/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: 'A documentation tool ',
        url: 'https://d.umijs.org/zh-CN',
      },
    ],
    // 自定义 403 页面
    unAccessible: <div>unAccessible</div>,
    // childrenRender: (children) => {
    //   // Generate the intl object
    //   // const enUSIntl1 = createIntl('en_US', enUSIntl);
    //   if (initialState?.loading) return <PageLoading />
    //   return <>{children}</>
    // },
    ...initialState?.settings,
  }
}
/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request: RequestConfig = {
  ...errorConfig,
  baseURL: BASE_API as string,
}
