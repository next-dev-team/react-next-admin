import { message } from 'antd'

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
    const isLogged = value.password === mockUser && value.username === mockUser
    if (isLogged) {
      runLogin().finally(() => {
        setToken(API_TOKEN)
        redirectSuccess()
      })
    } else {
      message.error('Invalid credentials')
    }
  }
  return { handleLogin, loadingLogin }
}
