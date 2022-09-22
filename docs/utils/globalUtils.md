---
title: 全局调用
nav:
  title: 工具
---

# 说明

> 1. 1.全局都可以调用的方法、在这里定义方法 可以全局调用
> 2. 2.全局都需要用、调用比较方便都可以写在这里;
> 3. 3.需要在 /src/typings.d.ts global 中声明


```js
  // /src/utils/globalUtils

  const log = function log(...msg) {
    if (process.env.UMI_ENV !== 'build_pro') {
      console.log(...msg);
    }
  };

  export default {
    log,
  };
  // 调用
  $global.log('我是渲染事前的钩子');
```

## $global.log 开发欢迎下会打印、打包不显示 


## $global.eventsBus 单页面事件传递方法

>- src/layouts/ 页面已经监听setPageContainerConfig事件
> - 该事件用来修改PageContainer配置信息 所有参数 [PageContaine](https://procomponents.ant.design/components/page-container)

```js
  // 监听和效果使用
   useEffect(() => {
    $global.eventsBus.$on('setPageContainerConfig', (data: PageContainerProps) => {
      setTimeout(() => {
        setConfig(data);
      }, 0);
    });
    return () => {
      $global.eventsBus.$off('setPageContainerConfig');
    };
  }, []);

  // 触发事件使用
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
```