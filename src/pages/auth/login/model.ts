export default function useLoginModel() {
  const { run: runLogin, loading: loadingLogin } = useRequest(_api.USER, {
    manual: true,
  })
  const mockUser = 'admin'

  const redirectSuccess = () => {
    location.replace('/')
  }

  const handleLogin = async (value: { password: string; username: string }) => {
    console.log('value', value)
    if (value.password === mockUser && value.username === mockUser) {
      runLogin().finally(() => {
        setToken(API_TOKEN)
        redirectSuccess()
      })
    }
  }
  return { handleLogin, loadingLogin }
}
