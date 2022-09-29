import { useWelcomeLogic } from './useWelcomeLogic';
export const SubCom = (props?: any) => {
  const { tasks, setTasks } = useWelcomeLogic();
  return (
    <AButton onClick={() => setTasks('hello')} {...props}>
      Sub: {tasks}
    </AButton>
  );
};
