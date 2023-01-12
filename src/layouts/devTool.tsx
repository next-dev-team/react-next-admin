import { capitalize } from 'lodash-es'

// global root container
function LayoutDevTools(props: any) {
  $terminal.log(`Root App`, _consIsAppEnvProd)

  const iconsValue = 'https://icon-sets.iconify.design'
  const allOption = [
    {
      label: 'ProComponents',
      value: 'https://procomponents.ant.design/en-US/components',
    },
    {
      label: 'Next Dev',
      value: 'https://next-dev-team.github.io/next-dev',
    },
    {
      label: 'Icons',
      value: iconsValue,
    },

    {
      label: 'Antd Design',
      value: 'https://ant.design/components/button',
    },

    {
      label: 'Antd design pro',
      value: 'https://pro.ant.design/docs/getting-started/',
    },
    {
      label: 'Tailwindcss',
      value: 'https://tailwindcss.com/docs/customizing-colors',
    },
  ]
  const itemsDropdown = [
    { label: 'Bundle Size', key: 'https://bundlephobia.com' },
  ]

  const state = _useReactive({
    iframeIndex: allOption?.[0]?.value,
    resultIconText: '',
  })

  const { run: onConvertIconsText } = _useDebounceFn(
    (e) => {
      state.resultIconText = e.target.value
      // console.log('Copy Icons', e.target.value)
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
              items: itemsDropdown,
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
      width: '95%',
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
                {state.resultIconText && (
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
                )}
              </Col>
            </Row>
          )}
          <iframe
            className="w-full  h-[calc(100vh-100px)]"
            src={state.iframeIndex}
          ></iframe>
        </>
      ),
      extra: (
        <Space>
          <Button
            type="link"
            target="_blank"
            onClick={() => {
              window.open('https://github.com/next-dev-team')
            }}
          >
            <Space>
              <GithubFilled />
              Next Dev
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

  // useEffect(() => {
  _useUpdateEffect(() => {
    renderIframeFn()
  }, [state.iframeIndex, state.resultIconText])

  return (
    <div>
      {props.children}

      <a
        className="absolute bottom-8 right-8 inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
        onClick={renderIframeFn}
      >
        <span className="block px-2.5 py-2 text-sm font-medium bg-white rounded-full hover:bg-transparent">
          <Icon className="arcticons:doc-scanner relative top-0 hover:text-white hover:font-bold text-2xl hover:text-lg " />
        </span>
      </a>
    </div>
  )
}

export default LayoutDevTools
