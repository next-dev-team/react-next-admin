export default function DevTools(props: any) {
  const { initialState, setInitialState } = useModel('@@initialState')
  const antdColor = {}
  const token = useToken()

  const { settings } = initialState || {}
  const iconsValue = 'https://icon-sets.iconify.design'
  const allOption = [
    {
      label: 'Design System',
      value: 'Design System',
    },
    {
      label: 'Antd Design',
      value: 'https://ant.design/components/button',
    },

    {
      label: 'Uno Css',
      value: 'https://uno.antfu.me/',
    },
    {
      label: 'Docs',
      value: 'http://localhost:3001/docs',
    },
    {
      label: 'Hooks',
      value: 'https://ahooks.js.org/hooks/use-request/index',
    },
    {
      label: 'Icons',
      value: iconsValue,
    },
    {
      label: 'ProComponents',
      value: 'https://procomponents.ant.design/en-US/components',
    },
  ]
  const itemsDropdown: { label: string; key: string }[] = [
    { label: 'Bundle Size', key: 'https://bundlephobia.com' },
    {
      label: 'Antd Theme',
      key: 'https://ant.design/theme-editor',
    },
    {
      label: 'Tailwindcss',
      key: 'https://tailwindcss.com/docs/customizing-colors',
    },
    {
      label: 'Antd Color',
      key: 'https://ant.design/docs/spec/colors#base-color-palettes',
    },
  ]

  const state = _useReactive({
    iframeIndex: allOption?.[0]?.value,
    resultIconText: '',
  })

  const { run: onConvertIconsText } = _useDebounceFn(
    (e) => {
      state.resultIconText = e.target.value
    },
    { wait: 300 },
  )

  const renderIframeFn = () => {
    _allModal.showDrawer_devTools({
      title: (
        <Space size="large">
          <Segmented
            value={state.iframeIndex}
            options={allOption}
            onChange={(e) => (state.iframeIndex = e?.toString())}
          />
          <Dropdown
            menu={{
              items: itemsDropdown as any,
              onClick: (e) => {
                state.iframeIndex = e.key
              },
            }}
          >
            <Space>
              Tools
              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      ),
      width: '92%',
      children: (
        <>
          {state.iframeIndex === iconsValue && (
            <Row>
              <Col span={12}>
                <ProFormText
                  label="Copy Icons"
                  placeholder="Basic usage"
                  fieldProps={{
                    onChange: onConvertIconsText,
                  }}
                />
                {/* {state.resultIconText && (
                  <>
                    <Typography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.component(
                        'Icon' + capitalize(state.resultIconText),
                      )}
                    </Typography.Text>
                    <Typography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.component(state.resultIconText)}
                    </Typography.Text>
                    <Typography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.bare(state.resultIconText)}
                    </Typography.Text>
                    <Typography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.barePascal(state.resultIconText)}
                    </Typography.Text>
                    <Typography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.componentKebab(state.resultIconText)}
                    </Typography.Text>
                    <Typography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.dash(state.resultIconText)}
                    </Typography.Text>
                    <Typography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.iconify(state.resultIconText)}
                    </Typography.Text>
                    <Typography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.pascal(state.resultIconText)}
                    </Typography.Text>
                    <Typography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.unocss(state.resultIconText)}
                    </Typography.Text>
                  </>
                )} */}
              </Col>
            </Row>
          )}
          {state.iframeIndex === allOption[0].value ? (
            <div className="w-full  h-[calc(100vh-100px)]">
              <ProCard
                defaultCollapsed
                collapsible
                title="Antd Color"
                headerBordered
              >
                <div className="space-y-2">
                  <GText>Usage:</GText>
                  <GText>{`  <div className='bg-colorPrimary' /> or <GText type="warn"> hello</GText> or  <UTitle level={1}> hello</UTitle>`}</GText>

                  <div className="flex flex-wrap gap-2">
                    {Object.keys(antdColor).map((color) => {
                      //@ts-ignore
                      const colorValue = antdColor?.[color]
                      return (
                        <div
                          key={color}
                          className="flex flex-col gap-7 justify-between "
                        >
                          <div>
                            <div
                              onClick={() => _copyToClipboard(color, true)}
                              className="outline outline-1 outline-colorBorder  h-10 w-35 rounded cursor-pointer"
                              style={{ background: colorValue }}
                            />
                            <Space>
                              <GText>{color}</GText>
                              <GText>{colorValue}</GText>
                            </Space>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </ProCard>
              <ProCard
                defaultCollapsed
                collapsible
                title={
                  <Space>
                    Antd Theme Config
                    {/* <Icon
                      icon="clarity:copy-to-clipboard-line"
                      className="text-base"
                      onClick={() => _copyToClipboard(token?.token, true)}
                    /> */}
                  </Space>
                }
                headerBordered
              >
                <GParagraph code>{JSON.stringify(token?.token)} </GParagraph>
              </ProCard>
            </div>
          ) : (
            <iframe
              className="w-full  h-[calc(100vh-100px)]"
              src={state.iframeIndex}
            ></iframe>
          )}
        </>
      ),
      extra: (
        <Space>
          <Button
            type="link"
            target="_blank"
            onClick={() => {
              window.open(
                'https://gitlab.initcapp.com/umpay/umpay/-/tree/main/apps/umpay-web',
              )
            }}
          >
            <Space>
              <GithubFilled />
              Github
            </Space>
          </Button>
          <Button
            type="link"
            target="_blank"
            onClick={() => {
              window.open('https://react-admin-pro.netlify.app')
            }}
          >
            <Space>
              <GithubFilled />
              Preview Site
            </Space>
          </Button>
        </Space>
      ),
    })
  }

  _useUpdateEffect(() => {
    renderIframeFn()
  }, [state.iframeIndex, state.resultIconText])

  return (
    <div>
      <PSettingDrawer
        enableDarkTheme
        settings={settings}
        colorList={[
          {
            key: '#9E823C',
            color: '#9E823C',
            title: '#9E823C',
          },
          {
            key: '#E1A900',
            color: '#E1A900',
            title: '#E1A900',
          },
          {
            key: '#F2C450',
            color: '#F2C450',
            title: '#F2C450',
          },
          {
            key: '#FED12E',
            color: '#FED12E',
            title: '#FED12E',
          },
          {
            key: '#FFAD00',
            color: '#FFAD00',
            title: '#FFAD00',
          },
          {
            key: '#FFBB00',
            color: '#FFBB00',
            title: '#FFBB00',
          },
        ]}
        onSettingChange={(settings) => {
          setInitialState((preInitialState: any) => ({
            ...preInitialState,
            settings,
          }))
        }}
      />
      {props.children}

      <a
        className="absolute bottom-0 right-8 inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
        onClick={renderIframeFn}
      >
        <span className="block px-0.5 font-medium bg-primary border-double border-4 border-white rounded-full hover:bg-transparent hover:opacity-80">
          <Icon icon="local:apple" fontSize={45} />
        </span>
      </a>
    </div>
  )
}
