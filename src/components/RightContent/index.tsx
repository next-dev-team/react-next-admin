import { Menu, Avatar, Dropdown, Space } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
// @ts-ignore
import { history, useModel, Link } from '@umijs/max';
import styles from './index.less';
import NoticeTip from './NoticeTip';

// interface LocalData {
//   lang: string;
//   label?: string;
//   icon?: string;
//   title?: string;
// }
function RightContent(Props: any) {
  const { user, clearUser } = useModel('useUserModel');
  const { reset } = useModel('useNoticeModel');
  // const intl = useIntl();

  if (!user) {
    return null;
  }

  const { theme, layout } = Props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  const { name, headimg } = user;

  const signOut = () => {
    setTimeout(() => {
      // 请求服务退出登录 目前没有
      history.push('/login');
      reset();
      clearUser();
    }, 100);
  };

  const menu = (
    <Menu>
      <Menu.Item key="userinfo">
        <Link to="/public/userInfo">
          <UserOutlined />
          个人中心
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <a onClick={signOut}>
          <LogoutOutlined />
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  );

  // const postLocalesData = (locales: LocalData[]) => {
  //   const nlocales: any = [];
  //   locales.forEach((item: any) => {
  //     nlocales.push({
  //       ...item,
  //       key: item.lang,
  //     });
  //   });

  //   return nlocales;
  // };

  return (
    <div className={className}>
      <NoticeTip />

      <Dropdown overlay={menu}>
        <Space
          style={{
            cursor: 'pointer',
          }}
        >
          <Avatar src={headimg} size="small" />
          <span>{name}</span>
        </Space>
      </Dropdown>

      {/* <SelectLang className={styles.action} postLocalesData={postLocalesData} /> */}
    </div>
  );
}

export default RightContent;
