---
title: 子组件-发送手机验证码倒计时
nav:
  title: 组件
group:
  title: 表单组件
---

# 说明

> 1. 发送手机验证码倒计时


```jsx
import React from 'react';
import { ProFormCaptchaCustom } from '@/components/FormCustom/components';
import { MailTwoTone } from '@ant-design/icons';
import { message } from 'antd';

function ProFormCaptchaCustomDemo() {
  const fieldProps = {
    onGetCaptcha: async (mobile) => {
      message.success(`手机号验证码发送成功!`);
    },
    phoneName: 'mobile',
    placeholder: '请输入验证码',
    name: 'captcha',
    fieldProps: {
      style:{
        width:'300px'
      },
      prefix: React.createElement(MailTwoTone),
      maxLength: 6,
    },
  };
  return <ProFormCaptchaCustom {...fieldProps} />;
}
export default ProFormCaptchaCustomDemo;
```
<API ></API>

