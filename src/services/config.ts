import type { RequestConfig } from '@umijs/max';
import { history } from '@umijs/max';
import { message } from 'antd';
import CryptoJs from 'crypto-js';

import {
  getUserTokenLocalStorage,
  removeLocalStorageTokenName,
  removeUserLocalStorage,
} from '../models/useUserModel';

export const responseConfig = {
  data: 'data', // 存放数据字段
  success: 0, // 判断成功值
  code: 'code', // 错误码字段
  message: 'msg', // 返回信息字段
};

export const responseTableConfig = {
  data: 'data', // 表格数据列表字段名称
  total: 'total', // 表格数据列表总数字段名称
};

const requestConfig: RequestConfig = {
  timeout: 30000,
  requestInterceptors: [
    (config: any) => {
      const { url, ...options } = config;
      const time = parseInt(new Date().getTime() / 1000 + '');
      const sign = CryptoJs.MD5(
        // @ts-ignore
        process.env.version + time + process.env.sign_key,
      ).toString();

      let token: string | null = getUserTokenLocalStorage();
      if (token) {
        token = token.substring(1, token.length - 1);
      }
      options.headers.common = {
        ...options.headers.common,
        version: process.env.version,
        time: time,
        sign: sign,
      };
      // 如果已登录过
      if (token) {
        options.headers.common.Authorization = `Bearer ${token}`;
      }
      return {
        url: `${process.env.api_url}${url}`,
        ...options,
      };
    },
  ],
  responseInterceptors: [
    [
      (response: any) => {
        const httpError: any = {
          500: '服务器错误',
          401: '登陆失效',
          404: '数据不存在',
          403: '权限不足',
        };

        const { request } = response;

        if (response.status !== 200) {
          const errMessage = httpError[response.status] || '未知错误';
          if (response.status === 401) {
            removeUserLocalStorage();
            removeLocalStorageTokenName();
            history.push('/login');
            return;
          } else if (response.status === 403) {
            // history.push('/403');
          } else if (response.status === 503) {
            history.push('/503');
          }
          message.error(errMessage);
          return;
        }

        // 如果是二进制数据
        if (request.responseType === 'blob') {
          if (!response.headers['content-disposition']) {
            response.data.text().then((r: any) => {
              const rdata = JSON.parse(r);
              message.error(rdata[responseConfig.message]);
            });
            return;
          }

          return response;
        }
        const resData: any = response.data;

        // 如果出现 没有code的情况
        if (resData[responseConfig.code] === undefined) {
          message.error('未知错误');
          return;
        }

        if (resData[responseConfig.code] !== responseConfig.success) {
          message.error(resData[responseConfig.message] || '系统错误');
          return;
        }
        return response;
      },
      (error: any) => {
        const httpError: any = {
          500: '服务器错误',
          401: '登陆失效',
          404: '数据不存在',
          403: '权限不足',
        };
        const { response } = error;
        if (response.status !== 200) {
          const errMessage = httpError[response.status] || '未知错误';
          if (response.status === 401) {
            removeUserLocalStorage();
            removeLocalStorageTokenName();
            history.push('/login');
            return Promise.reject();
          } else if (response.status === 403) {
            // history.push('/403');
          } else if (response.status === 503) {
            history.push('/503');
          }
          message.error(errMessage);
          return Promise.reject();
        }
        return Promise.reject();
      },
    ],
  ],
};

export default requestConfig;
