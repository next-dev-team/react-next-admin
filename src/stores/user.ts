export const _userStore = $proxyWithComputed(
  {
    name: 'foo',
    count: 1,
    setName: (name: string) => {
      _userStore.name = name;
    },
  },
  {
    double: (snap) => snap.count * 2,
  },
);
