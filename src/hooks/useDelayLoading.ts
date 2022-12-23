// import _asyncSleep from 'next-dev-utils/dist/_asyncSleep'
export const useDelayLoading = (ms = 300) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // _asyncSleep(ms).then(() => {
    //   setLoading(false)
    // })
  }, [loading])

  return { loading, setLoading }
}
