import { useState, useCallback, useEffect } from 'react';
import { getNoticeMessage } from '@/services';
import { useModel, history } from '@umijs/max';

const useNoticeModel = () => {
  const [globalMessage, _setGlobalMessage] = useState<any>(null);
  const [globalMessageCount, _setGlobalMessageCount] = useState<any>(null);
  const { user } = useModel('useUserModel');

  const onNoticeMessage = () => {
    getNoticeMessage().then((res: any) => {
      _setGlobalMessageCount(res.data.total);
      _setGlobalMessage(res.data.data);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      if (user && !globalMessage && history.location.pathname !== '/login') {
        onNoticeMessage();
      }
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const setGlobalMessage = useCallback((item) => _setGlobalMessage(item), []);
  const setGlobalMessageCount = useCallback((item) => _setGlobalMessageCount(item), []);
  const reset = useCallback(() => {
    _setGlobalMessage(null);
    _setGlobalMessageCount(null);
  }, []);
  const refresh = useCallback(() => {
    onNoticeMessage();
  }, []);
  return {
    globalMessage,
    globalMessageCount,
    setGlobalMessageCount,
    setGlobalMessage,
    reset,
    refresh,
  };
};

export default useNoticeModel;
