/* eslint-disable react/self-closing-comp */
import RightContent from '@/components/RightContent';
import {
  BellOutlined,
  BookOutlined,
  HomeOutlined,
  LinkOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import ProLayout from '@ant-design/pro-layout';
import {
  Link,
  matchRoutes,
  useAccessMarkedRoutes,
  useAppData,
  useLocation,
  useNavigate,
} from '@umijs/max';
import { BackTop } from 'antd';
import { useMemo } from 'react';
import { getAllRoutes } from '../../config/routes';
import Exception from './Exception';
import './Layout.less';
import PageContainer from './PageContainer';

const IconMap: any = {
  HomeOutlined: <HomeOutlined />,
  BellOutlined: <BellOutlined />,
  SettingOutlined: <SettingOutlined />,
};

const loopMenus = (routes: any) => {
  routes.children.forEach((item: any) => {
    if (item.icon && IconMap[item.icon]) {
      item.icon = IconMap[item.icon];
    }
    if (item.children) {
      loopMenus(item);
    }
  });
};
export default () => {
  $global.log('我是全局layouts钩子。');
  const location = useLocation();
  const navigate = useNavigate();
  const { clientRoutes }: any = useAppData();

  const matchedRoute: any = useMemo(
    //@ts-ignore
    () => matchRoutes(clientRoutes, location.pathname).pop()?.route,

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname],
  );

  const [route] = useAccessMarkedRoutes(
    clientRoutes.filter(({ file }: any) => file === '@/layouts/layouts.tsx'),
  );
  loopMenus(route);

  return (
    <ProLayout
      route={route}
      location={location}
      title="plugin-layout"
      siderWidth={256}
      onMenuHeaderClick={(e: any) => {
        e.stopPropagation();
        e.preventDefault();
        navigate('/');
      }}
      itemRender={(_route: any) => {
        // 查找路由配置里面对于路由是否
        const localRoutes: any = getAllRoutes();
        const localRoute: any = localRoutes.find((i: any) => {
          return i.path === _route.path;
        });
        const props: any = {};
        // 如果配置 component 表示有页面可以跳转
        if (localRoute.component) {
          props.to = localRoute.path;
          props.name = _route.breadcrumbName;
        } else {
          props.name = _route.breadcrumbName;
        }

        return props.to ? <Link to={props.to}>{props.name}</Link> : <span>{props.name}</span>;
      }}
      logo={
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="linearGradient-1" x1="62.102%" x2="108.197%" y1="0%" y2="37.864%">
              <stop offset="0%" stopColor="#4285EB"></stop>
              <stop offset="100%" stopColor="#2EC7FF"></stop>
            </linearGradient>
            <linearGradient id="linearGradient-2" x1="69.644%" x2="54.043%" y1="0%" y2="108.457%">
              <stop offset="0%" stopColor="#29CDFF"></stop>
              <stop offset="37.86%" stopColor="#148EFF"></stop>
              <stop offset="100%" stopColor="#0A60FF"></stop>
            </linearGradient>
            <linearGradient
              id="linearGradient-3"
              x1="69.691%"
              x2="16.723%"
              y1="-12.974%"
              y2="117.391%"
            >
              <stop offset="0%" stopColor="#FA816E"></stop>
              <stop offset="41.473%" stopColor="#F74A5C"></stop>
              <stop offset="100%" stopColor="#F51D2C"></stop>
            </linearGradient>
            <linearGradient
              id="linearGradient-4"
              x1="68.128%"
              x2="30.44%"
              y1="-35.691%"
              y2="114.943%"
            >
              <stop offset="0%" stopColor="#FA8E7D"></stop>
              <stop offset="51.264%" stopColor="#F74A5C"></stop>
              <stop offset="100%" stopColor="#F51D2C"></stop>
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g transform="translate(-20 -20)">
              <g transform="translate(20 20)">
                <g>
                  <g fillRule="nonzero">
                    <g>
                      <path
                        fill="url(#linearGradient-1)"
                        d="M91.588 4.177L4.18 91.513a11.981 11.981 0 000 16.974l87.408 87.336a12.005 12.005 0 0016.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c1.17-1.169 2.944-1.169 4.114 0l27.783 27.76c4.209 4.205 11.032 4.205 15.24 0 4.209-4.205 4.209-11.022 0-15.227L108.581 4.056c-4.719-4.594-12.312-4.557-16.993.12z"
                      ></path>
                      <path
                        fill="url(#linearGradient-2)"
                        d="M91.588 4.177L4.18 91.513a11.981 11.981 0 000 16.974l87.408 87.336a12.005 12.005 0 0016.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c2.912-2.51 7.664-7.596 14.642-8.786 5.186-.883 10.855 1.062 17.009 5.837L108.58 4.056c-4.719-4.594-12.312-4.557-16.993.12z"
                      ></path>
                    </g>
                    <path
                      fill="url(#linearGradient-3)"
                      d="M153.686 135.855c4.208 4.205 11.031 4.205 15.24 0l27.034-27.012c4.7-4.696 4.7-12.28 0-16.974l-27.27-27.15c-4.218-4.2-11.043-4.195-15.254.013-4.209 4.205-4.209 11.022 0 15.227l18.418 18.403c1.17 1.169 1.17 2.943 0 4.111l-18.168 18.154c-4.209 4.205-4.209 11.023 0 15.228z"
                    ></path>
                  </g>
                  <ellipse
                    cx="100.519"
                    cy="100.437"
                    fill="url(#linearGradient-4)"
                    rx="23.6"
                    ry="23.581"
                  ></ellipse>
                </g>
              </g>
            </g>
          </g>
        </svg>
      }
      menuItemRender={(menuItemProps: any, defaultDom: any) => {
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom;
        }
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            // handle wildcard route path, for example /slave/* from qiankun
            <Link to={menuItemProps.path.replace('/*', '')} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          );
        }
        return defaultDom;
      }}
      disableContentMargin
      fixSiderbar
      fixedHeader
      rightContentRender={RightContent}
      layout="mix"
      navTheme="light"
      // token={{
      //   layoutBgColor: '#fff',
      //   header: {
      //     headerBgColor: '#fff',
      //   },
      //   sider: {
      //     menuBackgroundColor: '#fff',
      //   },
      //   pageContainer: {
      //     pageContainerBgColor: '#fff',
      //     pageContainerContentMargin: '#fff',
      //   },
      // }}
      onError={(err: any) => {
        $global.log(err);
      }}
      footerRender={false}
      links={
        process.env.UMI_ENV === 'local'
          ? [
              <Link key="docs" to="/~docs" target="_blank">
                <BookOutlined />
                <span>业务组件文档</span>
              </Link>,
              <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
                <LinkOutlined />
                <span>openAPI 文档</span>
              </Link>,
            ]
          : []
      }
      // layoutBgImgList={[
      //   {
      //     src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
      //     left: 85,
      //     bottom: 100,
      //     height: '303px',
      //   },
      //   {
      //     src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
      //     bottom: -68,
      //     right: -45,
      //     height: '303px',
      //   },
      //   {
      //     src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
      //     bottom: 0,
      //     left: 0,
      //     width: '331px',
      //   },
      // ]}
    >
      <Exception route={matchedRoute}>
        <PageContainer />
        <BackTop />
      </Exception>
    </ProLayout>
  );
};
