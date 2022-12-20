export const SubCom = (props?: any) => {
  const { tasks, setTasks } = useModel('welcome.counter')

  return (
    <Button onClick={() => setTasks('hello')} {...props}>
      Sub: {tasks}
    </Button>
  )
}
