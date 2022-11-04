import type { ItemType } from 'antd/es/menu/hooks/useItems';
import type { MenuInfo } from 'rc-menu/lib/interface';
import { flushSync } from 'react-dom';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {};

  const { initialState, setInitialState } = useModel('@@initialState');

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout') {
        flushSync(() => {
          setInitialState((s) => ({ ...s, currentUser: undefined }));
        });
        loginOut();
        return;
      }
      $history.push(`/account/${key}`);
    },
    [setInitialState],
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <ASpin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState as any;

  // if (!currentUser || !currentUser.name) {
  //   return loading;
  // }

  const menuItems: ItemType[] = [
    ...(menu
      ? [
          {
            key: 'center',
            icon: <IconUserOutlined />,
            label: '个人中心',
          },
          {
            key: 'settings',
            icon: <IconSettingOutlined />,
            label: '个人设置',
          },
          {
            type: 'divider' as const,
          },
        ]
      : []),
    {
      key: 'logout',
      icon: <IconLogoutOutlined />,
      label: '退出登录',
    },
  ];

  const menuHeaderDropdown = (
    <AMenu
      className={styles.menu}
      selectedKeys={[]}
      onClick={onMenuClick}
      items={menuItems}
    />
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <AAvatar
          size="small"
          className={styles.avatar}
          src={currentUser.avatar}
          alt="avatar"
        />
        <span className={`${styles.name} anticon`}>{currentUser.name}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;