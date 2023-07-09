import { useLocalStorageState } from 'ahooks'

type ThemeScheme = 'light' | 'realDark'

export default function useDemo() {
  const [counter, setCounter] = useState(0)

  const [darkMode, setDarkMode] = useLocalStorageState<ThemeScheme>(
    'darkMode',
    {
      defaultValue: 'light',
    },
  )

  const inc = _useMemoizedFn(() => {
    setCounter((prev) => prev + 1)
  })

  const dec = _useMemoizedFn((val: number) => {
    setCounter((prev) => prev - val ?? 1)
  })

  const handleDarkTheme = _useMemoizedFn(() => {
    setDarkMode((curr) => {
      const darkTheme: ThemeScheme = curr === 'light' ? 'realDark' : 'light'
      return darkTheme
    })
  })

  return {
    handleDarkTheme,
    dec,
    inc,
    counter,
    setDarkMode,
    darkMode,
  }
}
