---
title: 按需引入调用
toc: 'menu'
nav:
  title: 工具
---

# 说明

> 1. 1.可以引入调用的方法;
> 2. 2.公用的一些方法都可以写在这里 */src/utils/index*;


## waitTime 延迟函数 
```js
  // 延迟函数
  export const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };
  // 调用
  import { waitTime } from '@/utils';
  waitTime(200)
```

## requestDebounce 请求防抖 
```js
  // 调用
  import { requestDebounce } from '@/utils';
  import { proTableAddRow } from '@/services';

  const debounceProTableAddRow: any = requestDebounce(proTableAddRow, 500);

  debounceProTableAddRow();
```

## downloadFile 下载文件 
```js
  // 调用
  import { downloadFile } from '@/utils';
  // A标签形式下载
  downloadFile('a', {
    url: '/api/XXX',
    params: {},
  });

  // post 下载本地后下载
  return downloadFile('blob', {
    data: res.data,// 二进制数据
    headers: {
      'content-disposition': res.response.headers.get('content-disposition'),
    },
  });
```

##  convertObjToUrl 对象拼接url参数 
```js
  // 调用返回完整url
  import { convertObjToUrl } from '@/utils';
  convertObjToUrl(url, params);
```



##  [IconFont](https://ant.design/components/icon-cn/#components-icon-demo-iconfont) 公用使用导出
```js
  import { IconFont } from '@/utils';

  <IconFont type="icon-xiaoxi" />
```



##  findMenuRoute 查找当前理由在路由配置中的配置信息
```js
  import { findMenuRoute } from '@/utils';

```
##  deepCopy 递归深度拷贝
```js
  import { deepCopy } from '@/utils';

```

##  deepMerge 递归深度合并
```js
  import { deepMerge } from '@/utils';

```

##  uuid 生成唯一随机值
```js
  import { uuid } from '@/utils';

```