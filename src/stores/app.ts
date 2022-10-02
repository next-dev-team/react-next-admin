export const _appStore = $proxyWithComputed(
  {
    count: 0,
    inc: () => {
      ++_appStore.count;
    },
    dec: () => {
      --_appStore.count;
    },
  },
  {
    doubleCount: (state) => state.count * 2,
  },
);
