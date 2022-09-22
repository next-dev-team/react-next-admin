/* eslint-disable guard-for-in */
import { createFromIconfontCN } from "@ant-design/icons";
import routesConfig from "../../config/routes";

const reg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

/**
 * 延迟函数
 * @param time
 */
export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

/**
 * 请求防抖 同步立即执行专用
 * 注意 同步情况连续点击 在限制内 会返回undefined 注意判断
 * @param fn
 * @param time
 * @param immediate
 * @returns
 */
export const requestDebounce = (fn: any, time: number) => {
  let timer: any;
  return function (...args: any) {
    if (timer) {
      return;
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
    }, time);

    return fn.call(null, ...args);
  };
};

/**
 * 防抖函数
 * @param fn
 * @param time
 * @param immediate 是否启动立即执行 true 是
 * @returns
 */
export const debounce = (fn: any, time: number, immediate: boolean = false) => {
  let timer: any;
  return function (...args: any) {
    if (immediate) {
      clearTimeout(timer);
      const now: any = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, time);
      if (now) {
        // @ts-ignore
        fn.call(null, ...args);
      }
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        // @ts-ignore
        fn.call(null, ...args);
      }, time);
    }
  };
};

/**
 * 节流函数
 * @param fn
 * @param time
 * @param type 1 时间戳版本 2定时间版本
 * @returns
 */
export const throttle = (fn: any, time: number, type: number) => {
  let previous: number = 0;
  let timer: any;

  return function (...args: any) {
    if (type === 1) {
      const now = Date.now();
      if (now - previous >= time) {
        // @ts-ignore
        fn.call(null, ...args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          // @ts-ignore
          fn.call(null, ...args);
        }, time);
      }
    }
  };
};

/**
 * 对象拼接url参数
 */
export const convertObjToUrl = (url: string, data: any) => {
  if (!data || data.length === 0) {
    return url;
  }
  const _result = [];
  for (const key in data) {
    const value = data[key];
    if (value.constructor === Array) {
      value.forEach(function (_value) {
        _result.push(key + "=" + _value);
      });
    } else {
      _result.push(key + "=" + value);
    }
  }
  return url + "?" + _result.join("&");
};

/**
 * 下载文件
 */
export const downloadFile = (type: string, options: any) => {
  const { url, fileName, params, data, headers } = options;

  let dataFileName = fileName;

  if (type === "a") {
    if (!dataFileName) {
      const names = url.split("/");
      dataFileName = names[names.length - 1];
    }
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = convertObjToUrl(url, params);
    link.target = "_blank";
    link.setAttribute("download", dataFileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    if (!dataFileName) {
      dataFileName = decodeURI(headers["content-disposition"]).split(
        "utf-8''"
      )[1];
    }
    if (!dataFileName) {
      dataFileName = decodeURI(headers["content-disposition"]).split(
        "filename="
      )[1];
    }
    const fileUrl = window.URL.createObjectURL(new Blob([data]));

    // 解决兼容
    // @ts-ignore
    if (window.navigator.msSaveBlob) {
      // @ts-ignore
      window.navigator.msSaveBlob(new Blob([data]), dataFileName);
    } else {
      const link = document.createElement("a");
      link.style.display = "none";
      link.href = fileUrl;
      link.setAttribute("download", dataFileName);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(fileUrl);
    }
  }
};

export const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2866869_yxmav3321wq.js",
});

/**
 * 查找当前理由在路由配置中的配置信息
 */
export const findMenuRoute = (pathname: string, routes: any = routesConfig) => {
  let route: any;
  routes.forEach((item: any) => {
    // 如果菜单没有权限查看就隐藏
    if (item.path === pathname) {
      // eslint-disable-next-line no-param-reassign
      route = item;
      return;
    }
    if (!route && item.routes) {
      const croute: any = findMenuRoute(pathname, item.routes);
      if (croute) {
        route = croute;
      }
    }
  });
  return route;
};

/**
 * 递归深度拷贝
 * @param source
 * @returns
 */
export const deepCopy = (source: any) => {
  if (typeof source !== "object") {
    return source;
  }
  if (source === null) {
    return source;
  }
  if (source.$$typeof) {
    return source;
  }

  const newObj = source.constructor === Array ? [] : {}; //开辟一块新的内存空间
  for (const i in source) {
    newObj[i] = deepCopy(source[i]);
  }
  return newObj;
};

/**
 * 递归深度合并
 * @param source
 * @returns
 */
export const deepMerge = (obj1: any, obj2: any) => {
  let key;
  // eslint-disable-next-line guard-for-in
  for (key in obj2) {
    // 如果target(也就是obj1[key])存在，且是对象的话再去调用deepMerge，否则就是obj1[key]里面没这个对象，需要与obj2[key]合并
    // 如果obj2[key]没有值或者值不是对象，此时直接替换obj1[key]
    obj1[key] =
      obj1[key] &&
      obj1[key].toString() === "[object Object]" &&
      obj2[key] &&
      obj2[key].toString() === "[object Object]"
        ? deepMerge(obj1[key], obj2[key])
        : (obj1[key] = obj2[key]);
  }
  return obj1;
};

/**
 * 生成唯一随机值
 * @returns
 */
export const uuid = () => {
  const s: any = [];
  const hexDigits: string = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  return s.join("");
};
