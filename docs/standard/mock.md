---
title: Mock规范
nav:
  title: 规范
---

# Mock使用
- **[Mock-github](https://github.com/nuysoft/Mock/wiki/Getting-Started)**
- **[Mock-doc](http://mockjs.com/0.1/)**
- **封装内部方法getObj 和 getPagination 统一处理返回公用部分。调用请参考一下例子**

# 参数说明

| 名词   | 解释                                                                         |
| ------ | ---------------------------------------------------------------------------- |
| data | 请求返回的数据对象 |
| timeout    | 配置延迟返回时间 默认0                 |
| mock    | 是否开启mock生成数据功能 默认true                  |
| code    | 是否成功 ‘0’成功 其他失败 默认‘0’                  |
| reason  | 成功或者失败的显示文字                 |


# 使用样例

## 请求数据不分页
```js
  import { getObj } from './handler';
  const dataMap = [
        {
          id: 1,
          name: '@name',
        },
      ...
      ];
  export default {
    // list测试
    'POST /api/table/userlist': getObj.bind(null, {
      data: ,
    }),
  };

```

## 请求数据分页
```js
  import { getPagination } from './handler';
  export default {
    // list测试
    'POST /api/table/list': getPagination.bind(null, {
      data: {
        'list|20': [
          {
            'id|+1': 1,
            avatar: "@image('100x100','@color')",
            title: '@ctitle',
            datetime: '@datetime',
            description: '@title',
            'user_id|+1|1-20': 1,
            'status|1-3': 1,
            'type|1-3': 1,
          },
        ],
      },
    }),
  };

```

## 请求数据延迟返回
```js
  import { getObj } from './handler';
  export default {
    // 新增数据
    'POST /api/protable/proTableAddRow': getObj.bind(null, {
      data: {},
      mock: false, 
      timeout: 1000,
    }),
  };

```

## 请求数据失败返回
```js
  import { getObj } from './handler';
  export default {
    // 新增数据
    'POST /api/protable/proTableAddRow': getObj.bind(null, {
      data: {},
      code: -1,
      reason: '请求错误',
    }),
  };

```