import { findMenuRoute } from '@/utils';
import type { PageContainerProps } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-components';
import { Outlet, useLocation } from '@umijs/max';
import { useEffect, useState } from 'react';
// import { BackTop } from "antd";

// import { useModel } from '@umijs/max';

export default function () {
  $global.log('我是全局PageContainer钩子。');
  const [config, setConfig] = useState<PageContainerProps>({});
  const location = useLocation();

  // 存放全局登录后进入layout 数据
  // const { globalInfo, setGlobalDictionaries, loading } = useModel<any>('useGlobalModel');

  useEffect(() => {
    const router = findMenuRoute(location.pathname);
    let nowConfig = {};
    if (router && router.pageContainer === false) {
      nowConfig = {
        header: {
          title: null,
          breadcrumb: {},
        },
      };
    }
    setConfig(nowConfig);
  }, [location.pathname]);

  useEffect(() => {
    // getDictionaryConfig()
    //   .then((res: any) => {
    //     const dictionaryConfig: Record<
    //       /**
    //       /* 字典类型：role:角色,sex:性别
    //       */
    //       string | number,
    //       {
    //         // 值
    //         value: any;
    //         // 显示
    //         label: string;
    //       }[]
    //     > = {};
    //     setGlobalDictionaries(res);
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //   });

    $global.eventsBus.$on('setPageContainerConfig', (data: PageContainerProps) => {
      setTimeout(() => {
        setConfig(data);
      }, 0);
    });
    return () => {
      $global.eventsBus.$off('setPageContainerConfig');
    };
  }, []);

  // if (!globalInfo) {
  //   return loading;
  // }

  return (
    <>
      <PageContainer fixedHeader {...config}>
        <Outlet />
      </PageContainer>
      {/* <BackTop /> */}
    </>
  );
}
