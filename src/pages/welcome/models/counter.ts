export default function useWelcomeLogic() {
  const [tasks, setTasks] = useState('');
  const {
    data: dataUser,
    loading: loadingGetUser,
    refresh: refetchGetUser,
  } = useRequest('/users');

  return {
    refetchGetUser,
    dataUser,
    loadingGetUser,
    setTasks,
    tasks,

  };
}
