import { ProBreadcrumb } from '@ant-design/pro-components'
import { BreadcrumbProps } from 'antd/es/breadcrumb'
export default function HeaderContentRender() {
  const { token } = useToken()

  const itemRender: BreadcrumbProps['itemRender'] = (
    route,
    _,
    routes,
    paths,
  ) => {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')} style={{ color: token.colorPrimaryText }}>
        {route.breadcrumbName === 'Home' ? (
          <HomeFilled />
        ) : (
          route.breadcrumbName
        )}
      </Link>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        minWidth: 180,
      }}
    >
      <ProBreadcrumb itemRender={itemRender} />
    </div>
  )
}
