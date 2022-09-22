// 我是约定@umijs/plugin-model写法、可以写很多全局状态管理
import { useCallback } from 'react';
import { useLocalStorageState } from 'ahooks';

export const LocalStorageName = 'USER_INFO';
export const LocalStorageTokenName = 'USER_INFO_TOKEN';

export const getUserLocalStorage = () => {
  const userInfo: any = localStorage.getItem(LocalStorageName);
  return JSON.parse(userInfo);
};

export const setUserLocalStorage = (data: any) => {
  localStorage.setItem(LocalStorageName, JSON.stringify(data));
};

export const getUserTokenLocalStorage = () => {
  return localStorage.getItem(LocalStorageTokenName);
};

export const removeLocalStorageTokenName = () => {
  localStorage.removeItem(LocalStorageTokenName);
};
export const removeUserLocalStorage = () => {
  localStorage.removeItem(LocalStorageName);
};

export default function useUserModel() {
  const [user, setUser] = useLocalStorageState<any>(LocalStorageName, {
    defaultValue: null,
  });
  const [token, setToken] = useLocalStorageState<any>(LocalStorageTokenName, {
    defaultValue: null,
  });

  const updateUser = useCallback(async (userInfo: any, userToken?: string) => {
    setUser(userInfo);
    if (userToken) {
      setToken(userToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearUser = useCallback(() => {
    setUser(undefined);
    setToken(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
    token,
    updateUser,
    clearUser,
  };
}
