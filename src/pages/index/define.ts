import type { ProColumnsTypes } from '@/components/TableCustom/types';
import type { FormCustomColumnsType } from '@/components/FormCustom/types';

import { getProTableUserList } from '@/services';

export const columns: ProColumnsTypes<any>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    search: false,
    valueType: 'indexBorder',
    hideInForm: true,
    width: 120,
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: 120,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    fieldProps: {
      placeholder: '请输入账号',
      maxLength: 20,
    },
    formItemProps: {
      rules: [{ required: true, message: '请填写标题' }],
    },
    formGroup: 1,
    formOrder: 1,
  },
  {
    title: '描述',
    width: 120,
    dataIndex: 'description',
    valueType: 'InputTooltipCustom',
    formGroup: 1,
    formOrder: 1,
    // search: false,
    // hideInTable: true,
    // hideInForm: true,
    copyable: true,
    fieldProps: {
      tooltipTitle: '使用自定义表单组件',
      fieldProps: {
        style: {
          width: '50%',
        },
      },
    },
  },
  {
    title: 'Other',
    valueType: 'group',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        formGroup: 3,
        width: 120,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 120,
            formGroup: 3,
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 120,
                formGroup: 3,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 120,
                formGroup: 3,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: 120,
    valueType: 'select',
    filters: true,
    formGroup: 2,
    formOrder: 0,
    fieldProps: {
      options: [
        {
          label: '全部',
          value: null,
        },
        {
          label: '未解决',
          value: 1,
        },
        {
          label: '已解决',
          value: 2,
        },
        {
          label: '解决中',
          value: 3,
        },
      ],
    },
  },
  {
    title: '状态',
    width: 120,
    dataIndex: 'status',
    valueType: 'select',
    formGroup: 2,
    formOrder: 0,
    fieldProps: {
      options: [
        {
          label: '全部',
          value: null,
        },
        {
          label: '启用',
          value: 1,
        },
        {
          label: '禁用',
          value: 2,
        },
        {
          label: '等待',
          value: 3,
        },
      ],
    },
  },
  {
    title: '用户',
    dataIndex: 'user_id',
    valueType: 'select',
    search: false,
    width: 120,
    request: async () => {
      const res = await getProTableUserList();
      return res.data.map((val: any) => {
        return {
          label: val.name,
          value: val.id,
        };
      });
    },
  },
  {
    title: '头像',
    width: 120,
    dataIndex: 'avatar',
    search: false,
    hideInForm: true,

    valueType: 'image',
  },
  {
    title: '时间',
    dataIndex: 'datetime',
    valueType: 'dateTime',
    search: false,
    sorter: (a, b) => a.datetime - b.datetime,
    width: 160,
  },
  {
    title: '时间',
    dataIndex: 'datetime',
    valueType: 'dateRange',
    hideInTable: true,
    hideInForm: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    width: 160,
    fixed: 'right',
  },
];

export const formColumns: FormCustomColumnsType<any>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    fieldProps: {
      options: [
        {
          label: '全部',
          value: null,
        },
        {
          label: '未解决',
          value: 1,
        },
        {
          label: '已解决',
          value: 2,
        },
        {
          label: '解决中',
          value: 3,
        },
      ],
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
  },
  {
    title: '创建时间',
    dataIndex: 'createName',
    valueType: 'date',
  },
  {
    title: '分组',
    valueType: 'group',
    columns: [
      {
        title: '标题',
        width: 'md',
        dataIndex: 'groupTitle',
        formItemProps: {
          rules: [
            {
              required: true,
              message: '此项为必填项',
            },
          ],
        },
      },
    ],
  },
  {
    title: '列表',
    valueType: 'formList',
    dataIndex: 'list',
    initialValue: [{ state: 'all', title: '标题' }],
    columns: [
      {
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'state',
            valueType: 'select',
            width: 'xs',
            fieldProps: {
              options: [
                {
                  label: '全部',
                  value: null,
                },
                {
                  label: '未解决',
                  value: 1,
                },
                {
                  label: '已解决',
                  value: 2,
                },
                {
                  label: '解决中',
                  value: 3,
                },
              ],
            },
          },
          {
            title: '标题',
            dataIndex: 'title',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '此项为必填项',
                },
              ],
            },
            width: 'm',
          },
        ],
      },
    ],
  },
  {
    title: 'FormSet',
    valueType: 'formSet',
    dataIndex: 'formSet',
    columns: [
      {
        title: '状态',
        dataIndex: 'groupState',
        valueType: 'select',
        width: 'xs',
        fieldProps: {
          options: [
            {
              label: '全部',
              value: null,
            },
            {
              label: '未解决',
              value: 1,
            },
            {
              label: '已解决',
              value: 2,
            },
            {
              label: '解决中',
              value: 3,
            },
          ],
        },
      },
      {
        title: '标题',
        dataIndex: 'groupTitle',
        tip: '标题过长会自动收缩',
        formItemProps: {
          rules: [
            {
              required: true,
              message: '此项为必填项',
            },
          ],
        },
        width: 'm',
      },
    ],
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    transform: (value) => {
      return {
        startTime: value[0],
        endTime: value[1],
      };
    },
  },
];
