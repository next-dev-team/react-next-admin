export const getToken = () => {
  const token = localStorage.getItem('token')
  return typeof token === 'string' && JSON.parse(token)
}
export const setToken = (value = '') =>
  localStorage.setItem('token', JSON.stringify(value))
