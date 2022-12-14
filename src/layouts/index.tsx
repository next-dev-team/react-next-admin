import SwitchTabsLayout from '@/components/SwitchTabsLayout'
import LayoutDevTools from './devTool'

const Layout = () => {
  const { initialState, setInitialState } = useModel('@@initialState')
  const { settings } = initialState || {}

  // global modal register
  _allModalRegistered()

  return (
    <>
      <SwitchTabsLayout
        mode={settings?.switchTabs?.mode}
        persistent={settings?.switchTabs?.persistent}
        fixed={settings?.switchTabs?.fixed}
        routes={getMenuData(routesUmi).menuData}
      >
        <ProCard
          bodyStyle={{
            minHeight: 'calc(100vh - 180px)',
          }}
        >
          <Outlet />
        </ProCard>
      </SwitchTabsLayout>

      {!$history.location?.pathname?.includes('/login') &&
        !_consIsAppEnvProd && (
          <>
            <LayoutDevTools />
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
          </>
        )}
    </>
  )
}

export default Layout
