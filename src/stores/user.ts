
export const _userStore = $proxy({
  name: 'foo',
  setName: (name: string) => {
    _userStore.name = name;
  },
});


