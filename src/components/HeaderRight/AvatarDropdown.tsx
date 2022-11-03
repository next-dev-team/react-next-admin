export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown = ({}: GlobalHeaderRightProps) => {
  // const menuItems: ItemType[] = [
  //   ...(menu
  //     ? [
  //         {
  //           key: 'center',
  //           icon: <IconUserOutlined />,
  //           label: '个人中心',
  //         },
  //         {
  //           key: 'settings',
  //           icon: <IconSettingOutlined />,
  //           label: '个人设置',
  //         },
  //         {
  //           type: 'divider' as const,
  //         },
  //       ]
  //     : []),
  //   {
  //     key: 'logout',
  //     icon: <IconLogoutOutlined />,
  //     label: '退出登录',
  //   },
  // ];

  // const onMenuClick = useCallback((event: MenuInfo) => {
  //   const { key } = event;
  //   if (key === 'logout') {
  //     return;
  //   }
  // }, []);

  // const menuHeaderDropdown = <AMenu selectedKeys={[]} onClick={onMenuClick} items={menuItems} />;

  return (
    <ASpace>
      <AAvatar size="small" alt="avatar" />
      <ATypography.Text>Next Dev</ATypography.Text>
    </ASpace>
  );
};

export default AvatarDropdown;
