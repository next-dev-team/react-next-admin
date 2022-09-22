/* eslint-disable react-hooks/exhaustive-deps */
// 我是约定@umijs/plugin-model写法、可以写很多全局状态管理
import React, { useState, useCallback, useMemo } from "react";
import Loading from "@/components/Exception/Loading";

interface DictionariesItem {
  label: string;
  value: string;
}

interface GlobalModelType {
  dictionaries?: Record<
    /**
    /* 字典类型：role:角色,sex:性别 
    */
    string | number,
    DictionariesItem[]
  >;
}

export default function useGlobalModel() {
  const [globalInfo, setGlobalInfo] = useState<GlobalModelType>();

  const setGlobalDictionaries = useCallback((dictionaries: any) => {
    return setGlobalInfo({
      ...globalInfo,
      dictionaries,
    });
  }, []);

  const getGlobalInfo = (field: string) => {
    if (!field) {
      return globalInfo;
    }
    // @ts-ignore
    return globalInfo[field];
  };

  // const refreshGlobalDictionaries = (type: string) => {
  //   getDictionaryByType({
  //     type,
  //   })
  //     .then((res: any) => {
  //       const dconfig: any = [];
  //       res.data.list?.forEach((i: API.zidianxuanxiang) => {
  //         dconfig.push({
  //           label: i.value,
  //           value: i.id,
  //         });
  //       });
  //       const dictionaries = { ...globalInfo?.dictionaries };
  //       dictionaries[type] = dconfig;
  //       setGlobalDictionaries(dictionaries);
  //     })
  //     .catch(() => {});
  // };

  const loading = useMemo(() => React.createElement(Loading), []);

  return {
    loading,
    globalInfo,
    getGlobalInfo,
    setGlobalDictionaries,
    // refreshGlobalDictionaries
  };
}
