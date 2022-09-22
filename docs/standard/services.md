---
title: 接口规范
nav:
  title: 规范
---

# Request使用
1. **1.强制要求：所有的请求都必须写在services文件夹内1.统一求情标准、方便管理2.方便查看、3.方便复用**
2. **2.文档**
    - **[plugin-request](https://umijs.org/zh-CN/plugins/plugin-request)**
    - **[umi-request](https://github.com/umijs/umi-request)**
    - **[hooks](https://ahooks.js.org/hooks/async)**
3. **3.配置接口返回数据的判断配置**
  - ```js
      // /services/config.ts
      export const responseConfig = {
        data: 'data', // 存放数据字段
        success: '0', // 判断成功值
        code: 'code', // 错误码字段
        message: 'reason', // 返回信息字段
      };

    ```
4. **4.内部封装**
    - **以下不限于的请求形式：**
      - **postBody：post请求参数放request-body里面**
      - **postQuery：post请求参数放url后面拼接**
      - **getBody：get请求参数放request-body里面**
      - **getQuery：get请求参数放url后面拼接**
      - **pathBody：post请求，动态的path地址**
      - **pathQuery：post请求，动态的path地址**
      - ```js
          // /services/handler.ts
          export function postBody(url: string, data?: any, options?: any) {
            return requestQuery(url, { method: 'post', data, ...options });
          }
          ...

        ```
5. **5.请求拦截器**
    - ```js
          // services/config.ts
          // 具体请查看 plugin-request 文档
          const requestConfig: RequestConfig = {
          timeout: 30000,
          errorConfig: {
            // 当后端接口不满足该规范的时候你需要通过该配置把后端接口数据转换为该格式，
            // 该配置只是用于错误处理，不会影响最终传递给页面的数据格式。
            adaptor: (resData) => {
              // 如果是http状态码错误
              if (!resData) {
                return {
                  success: false,
                  errorCode: 500,
                  errorMessage: '系统错误',
                  showType: ErrorShowType.ERROR_MESSAGE,
                };
              }
              if (resData.status && resData.error && resData.timestamp) {
                return {
                  success: false,
                  errorCode: resData.status,
                  errorMessage: `${resData.status} ${resData.error}`,
                  showType: ErrorShowType.ERROR_MESSAGE,
                };
              }
              // 如果http 状态 200 内部状态判断
              let showType = ErrorShowType.ERROR_MESSAGE;
              if (resData.code === '403') {
                showType = ErrorShowType.WARN_MESSAGE;
              }
              return {
                data: resData.data,
                success: resData.code === '0',
                errorCode: resData.code,
                errorMessage: resData.reason || '系统错误',
                showType,
              };
            },
          },
          middlewares: [
            // async function middlewareA(ctx, next) {
            //   console.log('我是请求中间件开始');
            //   await next();
            //   console.log('我是请求中间件结束');
            // },
          ],
          requestInterceptors: [
            function request(url, options) {
              return {
                url,
                options: { ...options, interceptors: true },
              };
            },
          ],
          responseInterceptors: [
            async function response(res) {
              if (res.status === 200) {
                const data = await res.clone().json();
                if (data.code === '403') {
                  history.push('/login');
                }
              }
              return res;
            },
          ],
        };
          ...
        
      ```



# 使用样例

## 普通请求使用
```js
  import { getProTable } from '@/services';
```

## 防抖请求
```js
  import { getProTable, proTableAddRow, proTableDetails } from '@/services';
  const debounceProTableAddRow: any = requestDebounce(proTableAddRow, 500);
```

