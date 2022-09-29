
export const [useWelcomeLogic] = createGlobalStore(() => {
  const appStore = useAppStore();
  const userStore = useUserStore();
  const [tasks, setTasks] = useState(userStore.name);

  return {
    setTasks,
    tasks,
    appStore,
    userStore
  };
});
