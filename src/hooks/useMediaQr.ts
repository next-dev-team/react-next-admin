import { useCreation, useResponsive } from 'ahooks'

export const useMediaQuery = () => {
  const responsive = useResponsive()

  // Memoize the getResponse function to avoid unnecessary re-renders.
  const getResponse = useCreation(
    () => (breakpoint: string) =>
      breakpoint in responsive && responsive[breakpoint] === true,
    [responsive],
  )

  // Define an array of breakpoints in order of decreasing size.
  const breakpoints = ['xl', 'lg', 'md', 'sm', 'xs']

  // Memoize the activeBreakpoint variable to avoid unnecessary re-computations.
  const activeBreakpoint = useCreation(() => {
    for (const breakpoint of breakpoints) {
      if (getResponse(breakpoint)) {
        return breakpoint
      }
    }
    return null
  }, [getResponse])

  // Define an object that maps breakpoint names to property names.
  const breakpointProps = {
    xs: 'isXs',
    sm: 'isSm',
    md: 'isMd',
    lg: 'isLg',
    xl: 'isXl',
  }

  const responsiveProps = useCreation(() => {
    const props = {
      isXl: false,
      isLg: false,
      isMd: false,
      isSm: false,
      isXs: false,
    }
    const selectedBreakpoint = (breakpointProps as Record<string, any>)[
      activeBreakpoint as string
    ] as keyof typeof props

    if (selectedBreakpoint) {
      props[selectedBreakpoint] = true
    }
    return {
      ...props,
      isMdDown: props.isSm || props.isXs,
      isSmUp: props.isMd || props.isLg || props.isXl,
    }
  }, [activeBreakpoint])

  return {
    responsive,
    ...responsiveProps,
  }
}
