import { LoginForm } from '@ant-design/pro-components'
import { SelectLang } from '@umijs/max'

const ActionIcons = () => {
  const iconCls = 'hover:opacity-75 cursor-pointer'
  return (
    <Space>
      <Icon fontSize={30} icon="logos:facebook" className={iconCls} />
      <Icon fontSize={30} icon="logos:google-icon" className={iconCls} />
      <Icon fontSize={29} icon="skill-icons:instagram" className={iconCls} />
    </Space>
  )
}

const Lang = () => {
  return (
    <div data-lang className="float-right">
      {SelectLang && <SelectLang />}
    </div>
  )
}

const Login = () => {
  return (
    <PageContainer
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'auto',
        backgroundImage:
          "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
        backgroundSize: '100% 100%',
      }}
    >
      <div
        style={{
          backgroundImage:
            "url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg')",
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ProCard style={{ maxWidth: 560 }}>
          <Lang />
          <LoginForm
            logo={
              <img alt="logo" src="https://preview.pro.ant.design/logo.svg" />
            }
            title="Ant Design"
            subTitle={
              'Ant Design is the most influential web design specification in Xihu district'
            }
            initialValues={{
              autoLogin: true,
            }}
            actions={[
              <Space align="center" key="actions">
                <GText key="text">Login with :</GText>
                <ActionIcons />
              </Space>,
            ]}
          >
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名: admin or user'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码: ant.design'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </LoginForm>
        </ProCard>
      </div>
    </PageContainer>
  )
}

export default Login
