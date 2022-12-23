/**
 * https://github.com/yunsii/ant-design-pro-plus/blob/master/src/layouts/SwitchTabsLayout/index.tsx
 */
import type { MenuDataItem } from '@ant-design/pro-layout'
import { PageLoading } from '@ant-design/pro-layout'
import deepEqual from 'fast-deep-equal'
import _isArray from 'lodash-es/isArray'
import memoizedOne from 'memoize-one'
import React from 'react'
import { useIntl, useLocation } from 'umi'

import type { SwitchTabsProps } from '@/components/SwitchTabs'
import SwitchTabs from '@/components/SwitchTabs'
import type { Mode, RouteConfig } from 'use-switch-tabs'
import { isSwitchTab } from 'use-switch-tabs'

export interface MakeUpRoute
  extends MenuDataItem,
    Pick<RouteConfig, 'follow' | 'redirect'> {}

/** 根据路由定义中的 name 本地化标题 */
function localeRoutes(
  routes: MakeUpRoute[],
  formatMessage: any,
  parent: MakeUpRoute | null = null,
): MenuDataItem[] {
  const result: MenuDataItem[] = []

  routes.forEach((item) => {
    const { routes: itemRoutes, ...rest } = item

    if (item.layout === false || item.path?.startsWith('/_demos')) {
      return
    }
    // 为标签页展示的页面注入 redirect 路由
    if (item.redirect && item.path !== '/') {
      result.push(item)
      return
    }
    if (!item.name) {
      return
    }

    // 初始化 locale 字段
    let newItem: MenuDataItem = {
      ...rest,
      routes: [] as any,
      locale: item.name,
    }

    const localeId = parent
      ? `${parent.locale}.${newItem.locale}`
      : `menu.${newItem.locale}`

    newItem = {
      ...rest,
      locale: localeId,
      name: formatMessage({ id: localeId }),
    }

    if (_isArray(itemRoutes) && (itemRoutes as any).length) {
      newItem = {
        ...newItem,
        children: localeRoutes(itemRoutes, formatMessage, newItem),
      }
    }

    result.push(newItem)
  })

  return result
}

const memoizedOneLocaleRoutes = memoizedOne(localeRoutes, deepEqual)

export interface RouteTabsLayoutProps
  extends Pick<
    SwitchTabsProps,
    'persistent' | 'fixed' | 'setTabName' | 'footerRender'
  > {
  mode?: Mode | false
  loading?: boolean
  routes?: MakeUpRoute[]
  children: React.ReactElement
}

export default function SwitchTabsLayout(
  props: RouteTabsLayoutProps,
): JSX.Element {
  const { mode, loading, routes, children, ...rest } = props

  const { formatMessage } = useIntl()
  const location = useLocation()
  const originalTabsRoutes = memoizedOneLocaleRoutes(routes!, formatMessage)
  if (mode && isSwitchTab(location, originalTabsRoutes)) {
    if (loading) {
      return <PageLoading />
    }
    if (routes) {
      return (
        <SwitchTabs
          mode={mode}
          {...rest}
          originalRoutes={originalTabsRoutes}
          animated={true}
        >
          {children}
        </SwitchTabs>
      )
    }
  }
  return children
}
