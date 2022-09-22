/**
 * 验证规则库
 */

/**
 * 是否存在在
 */
const isExisty = function (value: any) {
  return value !== null && value !== undefined;
};

/**
 * 是否为空
 */
const isEmpty = function (value: any) {
  return value === "";
};

/**
 * 验证必须
 */
export const isRequired = async (rule: any, value: any) => {
  if (isExisty(value)) {
    return true;
  }
  throw new Error(rule.message || "不存在");
};

/**
 * 验证不能为空
 */
export const isNoEmpty = async (rule: any, value: any) => {
  if (!isEmpty(value)) {
    return true;
  }
  throw new Error(rule.message || "不能为空");
};

/**
 * 验证必须正则
 */
export const matchRegexp = async (rule: any, value: any) => {
  // 如果验证数据不存 或者 空则不验证正则 验证必须由isRequired来处理
  if (!isExisty(value) || isEmpty(value) || rule.regexp.test(value)) {
    return true;
  }
  throw new Error(rule.message || "(regexp)验证失败");
};

/**
 * 验证邮箱
 */
export const isEmail = async (rule: any, value: any) => {
  const regexp =
    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

  try {
    await matchRegexp(
      {
        regexp,
      },
      value
    );
  } catch (error) {
    throw new Error(rule.message || "邮箱格式验证失败");
  }
};

/**
 * 验证url
 */
export const isUrl = async (rule: any, value: any) => {
  const regexp =
    /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

  try {
    await matchRegexp(
      {
        regexp,
      },
      value
    );
  } catch (error) {
    throw new Error(rule.message || "url格式验证失败");
  }
};

/**
 * 验证数字
 */
export const isNumeric = async (rule: any, value: any) => {
  if (typeof value === "number") {
    return true;
  }
  const regexp = /^[-+]?(?:\d*[.])?\d+$/;
  try {
    await matchRegexp(
      {
        regexp,
      },
      value
    );
    return true;
  } catch (error) {
    throw new Error(rule.message || "数值格式验证失败");
  }
};

/**
 * 验证字母
 */
export const isAlpha = async (rule: any, value: any) => {
  const regexp = /^[A-Z]+$/i;
  try {
    await matchRegexp(
      {
        regexp,
      },
      value
    );
  } catch (error) {
    throw new Error(rule.message || "字母格式验证失败");
  }
};

/**
 * 验证字母或数值
 */
export const isAlphanumeric = async (rule: any, value: any) => {
  const regexp = /^(?:[-+]?(?:0|[1-9]\d*))$/;
  try {
    await matchRegexp(
      {
        regexp,
      },
      value
    );
  } catch (error) {
    throw new Error(rule.message || "字母或数值格式验证失败");
  }
};

/**
 * 验证整数
 */
export const isInt = async (rule: any, value: any) => {
  const regexp = /^(?:[-+]?(?:0|[1-9]\d*))$/;
  try {
    await matchRegexp(
      {
        regexp,
      },
      value
    );
  } catch (error) {
    throw new Error(rule.message || "整数格式验证失败");
  }
};
/**
 * 验证浮点数
 */
export const isFloat = async (rule: any, value: any) => {
  const regexp = /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][\+\-]?(?:\d+))?$/;
  try {
    await matchRegexp(
      {
        regexp,
      },
      value
    );
  } catch (error) {
    throw new Error(rule.message || "浮点数格式验证失败");
  }
};
/**
 * 验证中文
 */
export const isChinese = async (rule: any, value: any) => {
  const regexp = /^[\u4e00-\u9fa5]+$/gi;
  try {
    await matchRegexp(
      {
        regexp,
      },
      value
    );
  } catch (error) {
    throw new Error(rule.message || "中文格式验证失败");
  }
};

/**
 * 验证手机号码
 */
export const isTel = async (rule: any, value: any) => {
  const regexp = /^1\d{10}$/i;
  try {
    await matchRegexp(
      {
        regexp,
      },
      value
    );
  } catch (error) {
    throw new Error(rule.message || "电话格式验证失败");
  }
};

/**
 * 验证生成证
 */
export const isIdCard = async (rule: any, value: any) => {
  const regexp =
    /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/i;
  try {
    await matchRegexp(
      {
        regexp,
      },
      value
    );
  } catch (error) {
    throw new Error(rule.message || "身份证号码格式验证失败");
  }
};

/**
 * 验证生成证
 */
export const isCarNo = async (rule: any, value: any) => {
  // 新能源车牌
  const xreg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/i;
  // 旧车牌
  const creg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/i;
  try {
    await matchRegexp(
      {
        xreg,
      },
      value
    );
  } catch (e) {
    try {
      await matchRegexp(
        {
          creg,
        },
        value
      );
    } catch (error) {
      throw new Error(rule.message || "车牌号格式验证失败");
    }
  }
};

/**
 * 金额,只允许2位小数
 */
export const isAmount = async (rule: any, value: any) => {
  const regexp = /^([0-9]*[.]?[0-9])[0-9]{0,1}$/;
  try {
    await matchRegexp(
      {
        regexp,
      },
      value
    );
  } catch (error) {
    throw new Error(rule.message || "金额格式验证失败");
  }
};
