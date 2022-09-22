import { request } from '@umijs/max';
import { downloadFile } from '@/utils';

const requestQuery = (url: string, options: any) => {
  return request(url);
};
/**
 * post请求 body形式
 * @param url // url
 * @param data // 表单数据
 * @param options // 额外配置
 */
export function postBody(url: string, data?: any, options?: any) {
  return requestQuery(url, { method: 'post', data, ...options });
}

/**
 * post请求 query形式
 * @param url // url
 * @param data // 表单数据
 * @param options // 额外配置
 */
export function postQuery(url: string, data?: any, options?: any) {
  return requestQuery(url, { method: 'post', params: data, ...options });
}

/**
 * get请求 body形式
 * @param url // url
 * @param data // 表单数据
 * @param options // 额外配置
 */

export function getBody(url: string, data?: any, options?: any) {
  return requestQuery(url, { method: 'get', data, ...options });
}
/**
 * get请求 query形式
 * @param url // url
 * @param data // 表单数据
 * @param options // 额外配置
 */

export function getQuery(url: string, data?: any, options?: any) {
  return requestQuery(url, { method: 'get', params: data, ...options });
}

/**
 * get请求 路径形式
 * @param url // url
 * @param data // 表单数据
 * @param options // 额外配置
 */

export function pathBody(url: string, data?: any, options?: any) {
  let nurl = url;
  Object.keys(data).forEach((key) => {
    nurl += `_${data[key]}`;
  });
  return requestQuery(nurl, { method: 'post', data, ...options });
}
/**
 * get请求 路径形式
 * @param url // url
 * @param data // 表单数据
 * @param options // 额外配置
 */
export function pathQuery(url: string, data?: any, options?: any) {
  let nurl = url;
  Object.keys(data).forEach((key) => {
    nurl += `_${data[key]}`;
  });
  return requestQuery(nurl, { method: 'post', params: data, ...options });
}

/**
 * post下载 二进制数据
 * @param url // url
 * @param data // 表单数据
 * @param options // 额外配置
 */
export const postDownloadBlob = async (
  url: string,
  data?: any,
  options?: any,
) => {
  const res: any = await postBody(url, data, {
    ...options,
    responseType: 'blob',
    getResponse: true,
  });
  return {
    data: res.data,
    headers: {
      'content-disposition': res.response.headers.get('content-disposition'),
    },
  };
};

/**
 * post 直接下载
 * @param url // url
 * @param data // 表单数据
 * @param options // 额外配置
 */
export const postDownload = async (url: string, data?: any, options?: any) => {
  const res: any = await postBody(url, data, {
    ...options,
    responseType: 'blob',
    getResponse: true,
  });

  return downloadFile('blob', {
    data: res.data,
    headers: {
      'content-disposition': res.response.headers.get('content-disposition'),
    },
  });
};

/**
 * post请求 body形式
 * @param url // url
 * @param data // 表单数据
 * @param options // 额外配置
 */
export function postUploadFile(url: string, data?: any, options?: any) {
  let formData: any = {};

  if (data instanceof FormData === false) {
    formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (data[key] instanceof Array) {
        data[key].forEach((item: any) => {
          formData.append(key, item);
        });
        return;
      }
      formData.append(key, data[key]);
    });
  } else {
    formData = data;
  }

  return requestQuery(url, {
    method: 'post',
    data: formData,
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
    requestType: 'form',
    ...options,
  });
}
