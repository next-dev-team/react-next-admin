import type { FormCustomColumnsType } from '@/components/FormCustom/types';

export const formConfig: FormCustomColumnsType[] = [
  {
    valueType: 'UploadCustom',
    dataIndex: 'headimg',
    title: '头像',
    fieldProps: {
      path: 'user_head',
      maxCount: 1,
      format: ['jpg', 'jpeg', 'png'],
      size: 2000,
      listType: 'picture-card',
      imgCrop: true,
    },
  },
  {
    valueType: 'text',
    dataIndex: 'name',
    title: '名称',
    fieldProps: {
      maxLength: 20,
    },
    formItemProps: {
      rules: [{ required: true }],
    },
  },
  {
    valueType: 'text',
    dataIndex: 'phone',
    title: '电话',
    fieldProps: {
      maxLength: 11,
    },
  },
];

export const passwordFormConfig: FormCustomColumnsType[] = [
  {
    valueType: 'password',
    dataIndex: 'password',
    title: '原密码',
    fieldProps: {
      maxLength: 20,
    },
    formItemProps: {
      rules: [{ required: true }, { min: 4 }],
    },
  },
  {
    valueType: 'password',
    dataIndex: 'npassword',
    title: '新密码',
    fieldProps: {
      maxLength: 20,
    },
    formItemProps: {
      rules: [{ required: true }, { min: 4 }],
    },
  },
  {
    valueType: 'password',
    dataIndex: 'qpassword',
    title: '确认密码',
    fieldProps: {
      maxLength: 20,
    },
    formItemProps: {
      rules: [{ required: true }, { min: 4 }],
    },
  },
];
