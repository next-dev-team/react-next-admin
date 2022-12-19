export default function Login() {
  return (
    <ProCard
      bodyStyle={{
        minHeight: 'calc(100vh - 140px)',
      }}
    >
      <AuthLogin1
        onFinish={async (values) => {
          alert(JSON.stringify(values, null, 2))
        }}
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="Github"
        subTitle="Welcome to NextDev, login now to access the system"
      />
    </ProCard>
  )
}
