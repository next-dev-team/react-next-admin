import { SubCom } from './subCom';
import { useWelcomeLogic } from './useWelcomeLogic';

const Index = () => {
  const { tasks, setTasks ,appStore} = useWelcomeLogic();
  // demo auto import config/webpack/auto-import

  // valtio store

  // antd
  const modal = () => {
    AModal.info({ title: 'hello1' });
    _notification.info({ message: 'ant notification' });
  };

  // react
  useEffect(() => {
    console.log('sila');
  }, []);

  // ahook
  _useCreation(() => {
    console.log('ahook');
    return {};
  }, []);

  // other folder
  console.log('utils', _uuid());

  // lodash
  console.log('utils', __isArray([]));
  // pro component
  console.log('a', _isBrowser());

  return (
    // antd component
    <ASpace>
      <PProCard bordered title="Global State Valtio">
        <ASpace>
          <AButton onClick={appStore.dec}>-</AButton>
          Counter App: {appStore.count}
          <AButton onClick={appStore.inc}>+</AButton>
        </ASpace>
      </PProCard>
      
      <PProCard bordered title="Global Share hook">
        <ASpace>
          <AButton onClick={() => setTasks('kk')}>Main: {tasks}</AButton>
          <SubCom onClick={() => setTasks('test')} />
        </ASpace>
      </PProCard>

      <IconTeenyicons360Solid onClick={modal} />
    </ASpace>
  );
};

export default Index;
