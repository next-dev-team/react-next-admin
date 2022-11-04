import AntdFormCrud from './crud'
import { SubCom } from './subCom'

const Index = () => {
  const {
    tasks,
    setTasks,
    appStore,
    dataUser,
    refetchGetUser,
    loadingGetUser,
  } = useModel('welcome.counter')
  const { counter, dec, inc } = useModel('demo')

  const { count } = useAppStore()

  /**
   * most of the component or function are auto import by unplugin-auto-import
   * see in folder config/webpack/auto-import
   *
   */

  // antd
  const modal = () => {
    AModal.info({ title: 'hello1' })
    _notification.info({ message: 'ant notification' })
  }

  // react
  useEffect(() => {
    console.log('sila', count)
  }, [count])

  // ahook
  _useCreation(() => {
    console.log('ahook')
    return {}
  }, [])

  // lodash
  console.log('_omit', _omit({ a: 1, b: 2 }, 'a'))

  return (
    <PageContainer content={'This page can only be viewed by admin'}>
      <div className="flex gap-4 mb-4">
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
        <PProCard bordered title="Global state model" layout="center">
          <div className="flex flex-col justify-center gap-4">
            <ASpace>
              <AButton onClick={() => setTasks('kk')}>Main: {tasks}</AButton>
              <SubCom onClick={() => setTasks('test')} />
            </ASpace>
            <ASpace>
              <AButton
                onClick={() => dec(1)}
                danger
                type="primary"
                shape="circle"
              >
                -
              </AButton>
              {counter}
              <AButton onClick={inc} type="primary" shape="circle">
                +
              </AButton>
            </ASpace>
          </div>
        </PProCard>
      </div>
      <AntdFormCrud />
    </PageContainer>
  )
}

export default Index
