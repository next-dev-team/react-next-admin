import { SubCom } from './subCom'
/**
 * most of the component or function are auto import by unplugin-auto-import
 * see in folder config/webpack/auto-import
 *
 */

const Index = () => {
  // useModel global store
  const {
    tasks,
    setTasks,
    appStore,
    dataUser,
    refetchGetUser,
    loadingGetUser,
  } = useModel('welcome.counter')
  const { counter, dec, inc } = useModel('demo')

  // global Valtio store
  const { count } = useAppStore()

  // graphql
  const {
    data: dataPostRes,
    loading: loadingPost,
    refetch: refetchPost,
  } = usePostQuery({
    variables: { id: '1' },
  })

  // antd
  const modal = () => {
    AModal.info({ title: 'hello1' })
    _notification.info({ message: 'ant notification' })
  }

  // auto-import react
  useEffect(() => {
    // console.log('useEffect', count)
  }, [count])

  //auto-import ahook
  _useCreation(() => {
    // auto-import lodash
    // console.log('_omit', _omit({ a: 1, b: 2 }, 'a'))
    return {}
  }, [])

  return (
    <PageContainer content={'This page can only be viewed by admin'}>
      <ARow wrap gutter={[20, 30]}>
        <ACol span={8}>
          {/* ---- Modal/Drawer/message------ */}
          <ProCard loading={loadingPost} bordered title="Feedback">
            <ASpace wrap>
              <AButton
                onClick={() =>
                  _allModal.showTestModal({
                    title: 'Feedback',
                    children: 'body',
                  })
                }
              >
                Dynamic Modal
              </AButton>
              <AButton
                onClick={() =>
                  _allModal.showDrawerTest({
                    title: 'Feedback Drawer Test',
                    children: 'body',
                  })
                }
              >
                Dynamic Drawer
              </AButton>

              <AButton onClick={() => _message.success('Message Success ')}>
                Message Success
              </AButton>

              <AButton
                onClick={() =>
                  _notification.success({
                    message: 'Notification Success',
                    description: 'Description',
                  })
                }
              >
                Notification Success
              </AButton>
            </ASpace>
          </ProCard>
        </ACol>

        <ACol span={8}>
          {/* ---- graphql------ */}
          <ProCard
            loading={loadingPost}
            bordered
            title="GraphQL"
            extra={
              <IconIonRefreshCircleSharp
                className="text-lg"
                onClick={() => refetchPost()}
              />
            }
          >
            <StatisticCard
              statistic={{
                title: dataPostRes?.post?.title,
                value: dataPostRes?.post?.id as string,
              }}
            />
          </ProCard>
        </ACol>

        <ACol span={8}>
          {/* ---- share hook logic------ */}
          <ProCard
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
            <StatisticCard
              statistic={{
                title: dataUser?.[0]?.name,
                value: dataUser?.[0]?.id,
              }}
            />
          </ProCard>
        </ACol>

        <ACol span={8}>
          <ProCard bordered title="Iconify">
            {/*  icons --> command+p -> find icons -> search icons -> copy name + Prefix Icon*/}
            <div className="flex gap-2">
              <IconTeenyicons360Solid
                onClick={modal}
                className="text-2xl text-green-500"
              />
              <IconEmojioneFlagForCambodia className="text-2xl text-green-500" />
            </div>
          </ProCard>
        </ACol>

        <ACol span={8}>
          {/*  antd component and valtio store */}
          <ProCard bordered title="Global State Valtio" layout="center">
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
          </ProCard>
        </ACol>

        <ACol span={8}>
          {/* ---- share hook logic------ */}
          <ProCard bordered title="Global state model" layout="center">
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
          </ProCard>
        </ACol>
      </ARow>
    </PageContainer>
  )
}

export default Index
