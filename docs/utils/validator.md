---
title: 验证集合
nav:
  title: 工具
---

# 说明

> 1. 1.各种验证表单的和验证其它的都放在这里
> 2. 2.公用的一些方法都可以写在这里;

```js
  // /src/utils/validator

  // 验证邮箱
  export const isEmail = async (rule: any, value: any) => {
    const regexp =
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

    try {
      await matchRegexp(
        {
          regexp,
        },
        value,
        );
    } catch (error) {
      throw new Error(rule.message || '(邮箱)验证失败');
    }
  };

  //普通使用
  import { isEmail } from '@/utils/validator';

  (async () => {
    try {
      await isEmail(
        {
          message: '邮箱啊',
        },
        'www.baidu,com',
      );
    } catch (error) {
      console.log(error.message);
    }
  })();

  //表单引入调用使用
  import { isEmail } from '@/utils/validator';
  {
     ...
      formItemProps: {
        rules: [
          {
            validator: isEmail,
            message: '邮箱邮箱',
          },
        ],
      },
  },

  //表单无需引入 使用调用
  {
     ...
      formItemProps: {
        rules: [
          {
            validatorExtend: 'isEmail',
            message: '邮箱邮箱',
          },
        ],
      },
  },

```