/**
 * any export here must be provide or match with UMI app.tsx configs
 */

import { RequestConfig } from '@umijs/max';

const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: any;
  loading?: boolean;
  fetchUserInfo?: () => Promise<any | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      return {};
    } catch (error) {
      $history.push(loginPath);
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  if ($history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: { layout: 'mix' },
    };
  }
  return {
    fetchUserInfo,
    settings: { layout: 'mix' },
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  return {
    rightContentRender: () => <GHeaderRight />,
    disableContentMargin: false,
    onPageChange: () => {
      // const { location } = history;
      // 如果没有登录，重定向到 login
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   history.push(loginPath);`
      // }
    },
    links: _consIsNodeEnvDev
      ? [
          <Link to="/~docs">
            <IconBookOutlined />
            <span>Document</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    unAccessible: <div>unAccessible</div>,
    childrenRender: (children, props) => {
      if (initialState?.loading) return <PageLoading />;
      return (
        <HoxRoot>
          {children}
          {!props.location?.pathname?.includes('/login') && _consIsAppEnvDev && (
            <PSettingDrawer
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </HoxRoot>
      );
    },
    ...initialState?.settings,
  };
};
/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request: RequestConfig = {
  ...errorConfig,
  baseURL: BASE_API,
};
