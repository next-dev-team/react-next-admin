export default function useWelcomeLogic() {
  const appStore = useAppStore();
  const userStore = useUserStore();
  const [tasks, setTasks] = useState(userStore.name);
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
    appStore,
    userStore,
  };
}
