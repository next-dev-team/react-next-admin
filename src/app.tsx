/**
 * any export here must be provide or match with UMI app.tsx configs
 */

import { ProFormText } from '@ant-design/pro-components'
import { ApolloProvider } from '@apollo/client'
import NiceModal from '@ebay/nice-modal-react'
import type { RequestConfig } from '@umijs/max'
import { createElement } from 'react'

const loginPath = '/user/login'

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
  return (
    <ApolloProvider client={apolloConfig}>
      <NiceModal.Provider>{props.children}</NiceModal.Provider>
    </ApolloProvider>
  )
}

// global root container
function RootApp(props: any) {
  // global modal register
  _allModalRegistered()
  const iconsValue = 'https://icon-sets.iconify.design'
  const allOption = [
    {
      label: 'Daily Dev',
      value: 'https://app.daily.dev',
    },
    {
      label: 'ProComponents',
      value: 'https://procomponents.ant.design/en-US/components',
    },
    {
      label: 'Next Dev',
      value: 'https://next-dev-team.github.io/next-dev',
    },
    {
      label: 'Icons',
      value: iconsValue,
    },

    {
      label: 'Antd Design',
      value: 'https://ant.design/components/button',
    },

    {
      label: 'Antd design pro',
      value: 'https://pro.ant.design/docs/getting-started/',
    },
    {
      label: 'Tailwindcss',
      value: 'https://tailwindcss.com/docs/customizing-colors',
    },
  ]
  const itemsDropdown = [
    { label: 'Bundle Size', key: 'https://bundlephobia.com' },
  ]

  const state = _useReactive({
    iframeIndex: allOption?.[0]?.value,
    resultIconText: '',
  })

  const { run: onConvertIconsText } = _useDebounceFn(
    (e) => {
      state.resultIconText = e.target.value
      // console.log('Copy Icons', e.target.value)
    },
    { wait: 300 },
  )

  const renderIframeFn = () => {
    _allModal.showDrawer_devTools({
      title: (
        <ASpace size="large">
          <ASegmented
            value={state.iframeIndex}
            options={allOption}
            onChange={(e) => (state.iframeIndex = e?.toString())}
          />
          <ADropdown
            menu={{
              items: itemsDropdown,
              onClick: (e) => {
                state.iframeIndex = e.key
              },
            }}
          >
            <ASpace>
              Tools
              <IconDownOutlined />
            </ASpace>
          </ADropdown>
        </ASpace>
      ),
      width: '80%',
      children: (
        <>
          {state.iframeIndex === iconsValue && (
            <ARow>
              <ACol span={12}>
                <ProFormText
                  label="Copy Icons"
                  placeholder="Basic usage"
                  fieldProps={{
                    onChange: onConvertIconsText,
                  }}
                />
                {state.resultIconText && (
                  <>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.component(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.bare(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.barePascal(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.componentKebab(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.dash(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.iconify(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.pascal(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.unocss(state.resultIconText)}
                    </ATypography.Text>
                  </>
                )}
              </ACol>
            </ARow>
          )}
          <iframe
            className="w-full  h-[calc(100vh-100px)]"
            src={state.iframeIndex}
          ></iframe>
        </>
      ),
      extra: (
        <ASpace>
          <AButton
            type="link"
            target="_blank"
            onClick={() => {
              window.open('https://github.com/next-dev-team')
            }}
          >
            <ASpace>
              <IconGithubFilled />
              Next Dev
            </ASpace>
          </AButton>
          <AButton
            type="link"
            target="_blank"
            onClick={() => {
              window.open('https://react-admin-pro.netlify.app')
            }}
          >
            <ASpace>
              <IconGithubFilled />
              Preview Site
            </ASpace>
          </AButton>
        </ASpace>
      ),
    })
  }

  // useEffect(() => {
  _useUpdateEffect(() => {
    renderIframeFn()
  }, [state.iframeIndex, state.resultIconText])

  return (
    <div>
      {props.children}

      <a
        className="absolute bottom-8 right-8 inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
        onClick={renderIframeFn}
      >
        <span className="block px-4 py-2.5 text-sm font-medium bg-white rounded-full hover:bg-transparent">
          <IconEtTools2 className="relative text-base top-1 hover:text-white hover:font-bold hover:text-lg " />
        </span>
      </a>
    </div>
  )
}

export function rootContainer(container: any, opts: any) {
  return createElement(RootApp, opts, container)
}

export function outerProvider(container: any) {
  return createElement(WrapperApp, { title: 'outerProvider' }, container)
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  return {
    disableContentMargin: false,

    // links: _consIsNodeEnvDev
    //   ? [
    //       <Link to="/~docs" key="docs">
    //         <IconBookOutlined />
    //         <span>Document</span>
    //       </Link>,
    //     ]
    //   : [],

    rightContentRender: () => <GRightContent />,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <GFooter />,
    onPageChange: () => {
      // const { location } = $history;
      // 如果没有登录，重定向到 login
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   $history.push(loginPath);
      // }
    },
    layoutBgImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    unAccessible: <div>unAccessible</div>,
    childrenRender: (children, props) => {
      // Generate the intl object
      // const enUSIntl1 = createIntl('en_US', enUSIntl);
      if (initialState?.loading) return <PageLoading />
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && _consIsAppEnvDev && (
            <PSettingDrawer
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }))
              }}
            />
          )}
        </>
      )
    },
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
