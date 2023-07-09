import type { ItemType } from 'antd/es/menu/hooks/useItems'
import type { MenuInfo } from 'rc-menu/lib/interface'
import { flushSync } from 'react-dom'
import HeaderDropdown from '../HeaderDropdown'

export type GlobalHeaderRightProps = {
  menu?: boolean
}

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    setToken()
  }

  const { initialState, setInitialState } = useModel('@@initialState')

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event
      if (key === 'logout') {
        loginOut()
        flushSync(() => {
          setInitialState((s) => ({ ...s, currentUser: undefined }))
        })
        location.href = '/auth/login'
        return
      }
      $history.push(`/account/${key}`)
    },
    [setInitialState],
  )

  const loading = (
    <span>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  )

  if (!initialState) {
    return loading
  }

  const { currentUser } = initialState

  if (!currentUser || !currentUser.name) {
    return loading
  }

  const menuItems: ItemType[] = [
    ...(menu
      ? [
          {
            key: 'center',
            icon: <UserOutlined />,
            label: 'Center',
          },
          {
            key: 'settings',
            icon: <SettingOutlined />,
            label: 'Settings',
          },
          {
            type: 'divider' as const,
          },
        ]
      : []),
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
    },
  ]

  const menuHeaderDropdown = (
    <Menu selectedKeys={[]} onClick={onMenuClick} items={menuItems} />
  )

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span>
        <Avatar size="small" src={currentUser?.avatar} alt="avatar" />
        <span>{currentUser.name}</span>
      </span>
    </HeaderDropdown>
  )
}

export default AvatarDropdown
