---
title: PageContainer配置
nav:
  title: 使用样例
---

# 文档地址

> 1. [PageContaine](https://procomponents.ant.design/components/page-container)

# 路由配置样例


```js

  // 修改顶部菜单描述和配置tab
  useEffect(() => {
    $global.eventsBus.$emit('setPageContainerConfig', {
      content: '欢迎使用 ProLayout 组件',
      tabList: [
        {
          tab: '基本信息',
          key: 'base',
        },
        {
          tab: '详细信息',
          key: 'info',
        },
      ],
      onTabChange: (key: any) => {
        console.log('====================================');
        console.log(key);
        console.log('====================================');
      },
    });
  }, []);

  // 隐藏header
  useEffect(() => {
    $global.eventsBus.$emit('setPageContainerConfig', {
      header: {
        title: null,
        breadcrumb: {},
      },
    });
  }, []);
```
