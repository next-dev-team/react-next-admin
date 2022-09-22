import { MobileTwoTone, LockTwoTone, ContactsTwoTone, MailTwoTone } from '@ant-design/icons';
import React from 'react';
import type { FormCustomColumnsType } from '@/components/FormCustom/types';

export const mobileConfig = (onGetCaptcha: any) => {
  const config: FormCustomColumnsType[] = [
    {
      valueType: 'text',
      dataIndex: 'mobile',
      title: '手机码号',
      tooltip: '钉钉登录手机号',
      fieldProps: {
        placeholder: '请输入手机码号',
        maxLength: 11,
        prefix: React.createElement(MobileTwoTone),
        autoComplete: 'on',
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入手机码号' }],
      },
    },
    {
      valueType: 'ProFormCaptchaCustom',
      dataIndex: 'captcha',
      title: '验证码',
      width: 'auto',
      fieldProps: {
        phoneName: 'mobile',
        placeholder: '请输入验证码',
        onGetCaptcha,
        name: 'captcha',
        fieldProps: {
          prefix: React.createElement(MailTwoTone),
          maxLength: 6,
        },
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入验证码' }],
      },
    },
  ];
  return config;
};

export const accountConfig: FormCustomColumnsType[] = [
  {
    valueType: 'text',
    dataIndex: 'account',
    title: '账号',
    fieldProps: {
      placeholder: '请输入账号',
      maxLength: 20,
      prefix: React.createElement(ContactsTwoTone),
      autoComplete: 'on',
    },
    formItemProps: {
      rules: [{ required: true, message: '请输入账号' }],
    },
  },
  {
    valueType: 'password',
    dataIndex: 'password',
    title: '密码',
    fieldProps: {
      placeholder: '请输入密码',
      maxLength: 11,
      prefix: React.createElement(LockTwoTone),
      autoComplete: 'new-password',
    },
    formItemProps: {
      rules: [{ required: true, message: '请输入密码' }],
    },
  },
];
