import type { MenuProps } from 'antd/lib/menu'
import type { TabsProps } from 'antd/lib/tabs'
import type * as H from 'history-with-query'
import _get from 'lodash/get'
import type { ActionType, UseSwitchTabsOptions } from 'use-switch-tabs'
import useSwitchTabs from 'use-switch-tabs'

enum CloseTabKey {
  Current = 'current',
  Others = 'others',
  ToRight = 'toRight',
}

export interface RouteTab {
  /** tab's title */
  tab: React.ReactNode
  key: string
  content: JSX.Element
  closable?: boolean
  /** used to extends tab's properties */
  location: Omit<H.Location, 'key'>
}

export interface SwitchTabsProps
  extends Omit<UseSwitchTabsOptions, 'location' | 'history'>,
    Omit<
      TabsProps,
      'hideAdd' | 'activeKey' | 'onEdit' | 'onChange' | 'children'
    > {
  fixed?: boolean
  footerRender?: (() => React.ReactNode) | false
}

export default function SwitchTabs(props: SwitchTabsProps): JSX.Element {
  const {
    mode,
    fixed,
    originalRoutes,
    setTabName,
    persistent,
    children,
    ...rest
  } = props

  const { token } = useToken()

  const { formatMessage } = useIntl()
  const location = useLocation() as any
  const actionRef = useRef<ActionType>()
  const {
    tabs,
    activeKey,
    handleSwitch,
    handleRemove,
    handleRemoveOthers,
    handleRemoveRightTabs,
  } = useSwitchTabs({
    children,
    setTabName,
    originalRoutes,
    mode,
    persistent,
    location,
    actionRef,
    history: _history,
  })

  const remove = _useMemoizedFn((key: string) => {
    handleRemove(key)
  })

  const handleTabEdit = _useMemoizedFn(
    (targetKey: string, action: 'add' | 'remove') => {
      if (action === 'remove') {
        remove(targetKey)
      }
    },
  )

  const handleTabsMenuClick = _useMemoizedFn(
    (tabKey: string): MenuProps['onClick'] =>
      (event) => {
        const { key, domEvent } = event
        domEvent.stopPropagation()

        if (key === CloseTabKey.Current) {
          handleRemove(tabKey)
        } else if (key === CloseTabKey.Others) {
          handleRemoveOthers(tabKey)
        } else if (key === CloseTabKey.ToRight) {
          handleRemoveRightTabs(tabKey)
        }
      },
  )

  const setMenu = _useMemoizedFn((key: string, index: number) => (
    <Menu onClick={handleTabsMenuClick(key)}>
      <Menu.Item disabled={tabs.length === 1} key={CloseTabKey.Current}>
        {formatMessage({ id: 'component.switchTabs.closeCurrent' })}
      </Menu.Item>
      <Menu.Item disabled={tabs.length === 1} key={CloseTabKey.Others}>
        {formatMessage({ id: 'component.switchTabs.closeOthers' })}
      </Menu.Item>
      <Menu.Item disabled={tabs.length === index + 1} key={CloseTabKey.ToRight}>
        {formatMessage({ id: 'component.switchTabs.closeToRight' })}
      </Menu.Item>
    </Menu>
  ))

  const setTab = _useMemoizedFn(
    (tab: React.ReactNode, key: string, index: number) => (
      <span onContextMenu={(event) => event.preventDefault()}>
        <Dropdown
          overlay={setMenu(key, index) as any}
          trigger={['contextMenu']}
        >
          <span className="py-2 px-2">{tab}</span>
        </Dropdown>
      </span>
    ),
  )

  useEffect(() => {
    window.tabsAction = actionRef.current!
  }, [])

  return (
    <PageContainer
      fixedHeader={fixed}
      {...rest}
      header={{
        // onBack() {
        //   $history.back()
        // },
        title: null,
        subTitle: null,

        style: { padding: '0px 12px 0 12px' },
      }}
      breadcrumb={undefined}
      // footer={[
      //   <Button key="3">Cancel</Button>,
      //   <Button key="2" type="primary">
      //     Submit
      //   </Button>,
      // ]}
      // ghost
      tabBarExtraContent="Hello, world!"
      childrenContentStyle={{
        padding: token.paddingSM,
        margin: 0,
      }}
      tabProps={{
        type: 'editable-card',
        hideAdd: true,
        activeKey,
        onEdit: handleTabEdit as TabsProps['onEdit'],
        onChange: handleSwitch,
        size: 'small',
        style: {
          margin: 0,
          padding: 2,
          background: 'none',
        },
      }}
      tabList={tabs.map((item, index) => {
        return {
          tab: setTab(item.title, item.key, index),
          key: item.key,
          closable: item.closable,
          forceRender: _get(persistent, 'force', false),
        }
      })}
    >
      {children}
    </PageContainer>
  )
}
