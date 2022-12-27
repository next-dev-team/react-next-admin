# State Management

- Using this custom store base on hookstate with custom plugin that we can access without hook and with hook

- Feature
  - Easy to Use with no need to learn it's almost the same javascript reactive
  - Proxy base prevent unnecessary re-render without using selector
  - Access both hook and out side hook
  - Build-in persist like redux-persist with whitelist or blacklist
  - No need provider call it every where from store to store, store to function or hook
  - Out of box with many plugin
  - Learn more about https://hookstate.js.org/ or [sample code](https://github.com/avkonst/hookstate/tree/master/docs/demos/todolist/src/components)

## Create Store

```tsx | pure
import { createStore, useGlobalStore } from '@/hooks'

/**
 * this is sample of usage hookstate with persist plugin
 * @link https://hookstate.js.org/docs/global-state
 */

/**
 * init interface
 */
type IInitStore = {
  colorScheme: 'dark' | 'light'
}

//init store value with interface it will use own value as interface
const initWithOwnType = {
  counter: 0,
}

// init store value with interface it will use IInitStore for typing
const initWithType: IInitStore = {
  colorScheme: 'light',
}

// combine init type & own type together
const initStore = {
  ...initWithOwnType,
  ...initWithType,
}

// get combine type for store interface
type IStore = IInitStore & typeof initStore

// get combine store key interface for whitelist typing
type IStoreKey = keyof IStore

// create hook store
const store = createStore(initStore)

// store key and whitelist persist
const wrapStore = wrapGlobalStore<IStoreKey, IStore>({
  key: 'useSampleStore',
  store,
  whitelist: ['counter'],
})

/**
 *  this one is normal custom hook we can return other state too
 *  but make sure following the rule of custom hook
 */

export default function useSampleStore() {
  /**
   * useGlobalStore is a custom hook base on hookstate
   * provide persistence with whitelist or blacklist
   */
  const { state } = useGlobalStore(wrapStore)

  // usage of update state with arg
  const setCounterDecBy = (by = 1) => {
    state.counter.set((p) => p - by)
  }

  return {
    /**
     * usage of get state it will render only state.counter change due to it use proxy base
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
     */
    get counter() {
      return state.counter.get()
    },
    //return func as normal custom hook
    setCounterDecBy,
  } as const
}

//return store type
export type IDemoStore = Partial<ReturnType<typeof useSampleStore>>

//return store type and store for using outside react
export const demoStore = getGlobalStore(wrapStore)
```

## Use store in component

```tsx | pure
import useSampleStore, { demoStore } from '@/store';

// want to access store without using hook and can use every where
const getCounter = demoStore.counter.get();
const setCounter =()=> demoStore.counter.set(10);

export default function HomePage() {
  const { counter } = useSampleStore();

  return <>
     /**
   * this counter get from store also it's persist in local storage
   * it will re-render only counter update
   */
  <h1>{counter}</h1>

// access counter without using hook
  <h1>{getCounter}</h1>

  {/*  setCounterDecBy with arg will update counter cause component re-render */}
  <button onClick={()=>setCounterDecBy(1)> </button>

  {/*  setCounter without using hook */}
  <button onClick={setCounter}> </button>

  </>;
}
```
