
export const _appStore = proxy({
  count: 0,
  inc: () => {
    ++_appStore.count;
  },
  dec: () => {
    --_appStore.count;
  },
});


