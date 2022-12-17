import SwitchTabsLayout from '@/components/SwitchTabsLayout'

const Layout = () => {
  const { initialState, setInitialState } = useModel('@@initialState')
  const { settings } = initialState || {}

  return (
    <>
      <SwitchTabsLayout
        mode={settings?.switchTabs?.mode}
        persistent={settings?.switchTabs?.persistent}
        fixed={settings?.switchTabs?.fixed}
        routes={getMenuData(routesUmi).menuData}
      >
        <Outlet />
      </SwitchTabsLayout>

      {!$history.location?.pathname?.includes('/login') && _consIsAppEnvDev && (
        <PSettingDrawer
          enableDarkTheme
          settings={settings}
          onSettingChange={(settings) => {
            setInitialState((preInitialState) => ({
              ...preInitialState,
              settings,
            }))
          }}
        />
      )}
    </>
  )
}

export default Layout
