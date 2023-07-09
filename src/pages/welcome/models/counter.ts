export default function useWelcomeLogic() {
  const [tasks, setTasks] = useState('')
  const {
    data: dataUser,
    loading: loadingGetUser,
    refresh: refetchGetUser,
  } = {} as any

  return {
    refetchGetUser,
    dataUser,
    loadingGetUser,
    setTasks,
    tasks,
  }
}
