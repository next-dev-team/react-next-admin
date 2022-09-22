import React from 'react';
import { message } from 'antd';
import FormCustom from '@/components/FormCustom';
import type { FormCustomColumnsType } from '@/components/FormCustom/types';
import { LockTwoTone, ContactsTwoTone } from '@ant-design/icons';

const accountConfig: FormCustomColumnsType[] = [
  {
    valueType: 'text',
    dataIndex: 'account',
    title: '账号',
    fieldProps: {
      placeholder: '请输入账号',
      maxLength: 20,
      prefix: React.createElement(ContactsTwoTone),
    },
    formItemProps: {
      rules: [
        { required: true, message: '请输入账号' },
        { validatorExtend: 'isEmail', message: '邮箱验证失败' },
      ],
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
    },
    formItemProps: {
      rules: [{ required: true, message: '请输入密码' }],
    },
  },
];

function Demo2() {
  const onFinish = async (values: any) => {
    try {
      message.success('成功');
      console.log(values);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <>
      <FormCustom
        submitter={{
          searchConfig: {
            submitText: '注册/登录',
          },
          submitButtonProps: {
            style: {
              width: '328px',
              marginTop: '20px',
            },
          },
          render: (_: any, dom: any) => dom.pop(),
        }}
        columns={accountConfig}
        onFinish={onFinish}
      />
    </>
  );
}

export default Demo2;
