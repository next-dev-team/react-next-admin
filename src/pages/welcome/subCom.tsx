export const SubCom = (props?: any) => {
  const { tasks, setTasks } = useModel('welcome.counter');

  return (
    <AButton onClick={() => setTasks('hello')} {...props}>
      Sub: {tasks}
    </AButton>
  );
};
