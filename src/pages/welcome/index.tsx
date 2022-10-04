import { SubCom } from './subCom';
import { useWelcomeLogic } from './useWelcomeLogic';

const Index = () => {
  const {
    tasks,
    setTasks,
    appStore,
    dataUser,
    refetchGetUser,
    loadingGetUser,
  } = useWelcomeLogic();

  const { count } = useAppStore();

  /**
   * most of the component or function are auto import by unplugin-auto-import
   * see in folder config/webpack/auto-import
   *
   */

  // antd
  const modal = () => {
    AModal.info({ title: 'hello1' });
    _notification.info({ message: 'ant notification' });
  };

  // react
  useEffect(() => {
    console.log('sila', count);
  }, [count]);

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
  console.log('a', _regexEmail.test('gg@fka.co'));

  return (
    <PageContainer content={'This page can only be viewed by admin'}>
      <div className="flex gap-4">
        {/* ---- share hook logic------ */}
        <PProCard
          loading={loadingGetUser}
          bordered
          title="Fetch API"
          extra={
            <IconIonRefreshCircleSharp
              className="text-lg"
              onClick={refetchGetUser}
            />
          }
        >
          <PStatisticCard
            statistic={{
              title: dataUser?.[0]?.name,
              value: dataUser?.[0]?.id,
            }}
          />
        </PProCard>

        <PProCard bordered title="Iconify">
          {/*  icons --> command+p -> find icons -> search icons -> copy name + Prefix Icon*/}
          <div className="flex gap-2">
            <IconTeenyicons360Solid
              onClick={modal}
              className="text-2xl text-green-500"
            />
            <IconEmojioneFlagForCambodia className="text-2xl text-green-500" />
          </div>
        </PProCard>

        {/*  antd component and valtio store */}
        <PProCard bordered title="Global State Valtio" layout="center">
          <ASpace>
            <AButton
              onClick={appStore.dec}
              danger
              type="primary"
              shape="circle"
            >
              -
            </AButton>
            {appStore.count}
            <AButton onClick={appStore.inc} type="primary" shape="circle">
              +
            </AButton>
          </ASpace>
        </PProCard>

        {/* ---- share hook logic------ */}
        <PProCard bordered title="Global Share hook">
          <ASpace>
            <AButton onClick={() => setTasks('kk')}>Main: {tasks}</AButton>
            <SubCom onClick={() => setTasks('test')} />
          </ASpace>
        </PProCard>
      </div>
    </PageContainer>
  );
};

export default Index;
