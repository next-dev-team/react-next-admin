import type { models as rawModels } from '@@/plugin-model/model'
type Models = typeof rawModels

type GetNamespaces<M> = {
  [K in keyof M]: M[K] extends { namespace: string } ? M[K]['namespace'] : never
}[keyof M]

type Namespaces = GetNamespaces<Models>
type GetModelByNamespace<M, N> = {
  [K in keyof M]: M[K] extends { namespace: string; model: unknown }
    ? M[K]['namespace'] extends N
      ? M[K]['model'] extends (...args: any) => any
        ? ReturnType<M[K]['model']>
        : never
      : never
    : never
}[keyof M]
type Model<N> = GetModelByNamespace<Models, N>
type Selector<N> = Model<N>

/**
 * custom useModel for shorter selectors
 * @param model
 * @param keys
 * @see https://umijs.org/docs/max/data-flow#%E5%88%9B%E5%BB%BA-model
 *
 */
const useModels = <N extends Namespaces, K extends keyof Selector<N>>(
  model: N,
  keys?: K[],
): Pick<Selector<N>, K> => {
  const modelState = useModel(model, (state) => {
    if (!keys || (Array.isArray(keys) && keys.length === 0)) return state
    const selectedState: Partial<Selector<N>> = {}
    for (const key of keys) {
      selectedState[key] = state[key]
    }
    return selectedState as Selector<N>
  })
  return modelState
}

export default useModels
