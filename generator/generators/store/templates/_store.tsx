import { createStore, getGlobalStore, useGlobalStore, wrapGlobalStore } from '@/hooks';

type IInitStore = {
  colorScheme: 'dark' | 'light';
};

const initWithOwnType = {
  counter: 0,
};

const initWithType: IInitStore = {
  colorScheme: 'light',
};

const initStore = {
  ...initWithOwnType,
  ...initWithType,
};

type IStore = IInitStore & typeof initStore;

type IStoreKey = keyof IStore;

const store = createStore(initStore);

const wrapStore = wrapGlobalStore<IStoreKey, IStore>({
  key: '<%= storeName %>',
  store,
  whitelist: [],
});

export default function <%= storeName %>() {
  const { state } = useGlobalStore(wrapStore);

  return {
    get counter() {
      return state.counter.get();
    },

  } as const;
}

export type ISampleStore = Partial<ReturnType<typeof <%= storeName %>>>;

// get store outSide react
export const demoStore = getGlobalStore(wrapStore);
