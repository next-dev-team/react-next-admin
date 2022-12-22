import { SubCom } from './subCom'
/**
 * most of the component or function are auto import by unplugin-auto-import
 * see in folder config/webpack/auto-import
 *
 */

export async function clientLoader() {
  const data = await fetch('https://gorest.co.in/public/v2/users')
  return data
}

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
  const { data } = useClientLoaderData()

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
    Modal.info({ title: 'hello1' })
    _notification.info({ message: 'ant notification' })
  }

  // auto-import react
  useEffect(() => {
    console.log('useEffect', count)
    console.log('useClientLoaderData', data)
  }, [count])

  //auto-import ahook
  _useCreation(() => {
    // auto-import lodash
    // console.log('_omit', _omit({ a: 1, b: 2 }, 'a'))
    $terminal.log(`Some info from the app`)
    $terminal.log({
      json: { foo: 'bar' },
    })
    $terminal.info(`Hey terminal, A message from the browser`)
    $terminal.warn(`Watch out, warning from the browser`)
    $terminal.error(`Ups, testing an error message from the browser`)

    return {}
  }, [])

  return (
    <Row wrap gutter={[20, 30]}>
      <Col span={8}>
        {/* ---- Modal/Drawer/message------ */}
        <ProCard loading={loadingPost} bordered title="Feedback">
          <Space wrap>
            <Button
              onClick={() =>
                _allModal.showTestModal({
                  title: 'Feedback',
                  children: 'body',
                })
              }
            >
              Dynamic Modal
            </Button>
            <Button
              onClick={() =>
                _allModal.showDrawerTest({
                  title: 'Feedback Drawer Test',
                  children: 'body',
                })
              }
            >
              Dynamic Drawer
            </Button>

            <Button onClick={() => _message.success('Message Success ')}>
              Message Success
            </Button>

            <Button
              onClick={() =>
                _notification.success({
                  message: 'Notification Success',
                  description: 'Description',
                })
              }
            >
              Notification Success
            </Button>
          </Space>
        </ProCard>
      </Col>

      <Col span={8}>
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
      </Col>

      <Col span={8}>
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
      </Col>

      <Col span={8}>
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
      </Col>

      <Col span={8}>
        {/*  antd component and valtio store */}
        <ProCard bordered title="Global State Valtio" layout="center">
          <Space>
            <Button onClick={appStore.dec} danger type="primary" shape="circle">
              -
            </Button>
            {appStore.count}
            <Button onClick={appStore.inc} type="primary" shape="circle">
              +
            </Button>
          </Space>
        </ProCard>
      </Col>

      <Col span={8}>
        {/* ---- share hook logic------ */}
        <ProCard bordered title="Global state model" layout="center">
          <div className="flex flex-col justify-center gap-4">
            <Space>
              <Button onClick={() => setTasks('kk')}>Main: {tasks}</Button>
              <SubCom onClick={() => setTasks('test')} />
            </Space>
            <Space>
              <Button
                onClick={() => dec(1)}
                danger
                type="primary"
                shape="circle"
              >
                -
              </Button>
              {counter}
              <Button onClick={inc} type="primary" shape="circle">
                +
              </Button>
            </Space>
          </div>
        </ProCard>
      </Col>
    </Row>
  )
}

export default Index
