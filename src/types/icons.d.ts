//@ts-nocheck

/**
 * auto import will generate type only when we save so when we run dev it will remove those type.
 * to avoid eslint mark it error we need to Manual icon type here
 */

export {}

declare global {
  const IconIonRefreshCircleSharp: typeof SvgComponent
}
