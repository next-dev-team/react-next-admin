import TableCustom from '@/components/TableCustom';
import { getProTable, proTableAddRow } from '@/services';
import { message } from 'antd';
import type { ProColumnsTypes } from '@/components/TableCustom/types';
import FormCustom from '@/components/FormCustom';
import { useState } from 'react';
import { requestDebounce } from '@/utils';
import type { FormCustomColumnsType } from '@/components/FormCustom/types';

const debounceProTableAddRow: any = requestDebounce(proTableAddRow, 500);

const columns: ProColumnsTypes<any>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    search: false,
    valueType: 'indexBorder',
    hideInForm: true,
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '描述',
    dataIndex: 'description',
    search: false,
    copyable: true,
  },
  {
    title: '描述',
    dataIndex: 'description',
    hideInTable: true,
    hideInForm: true,
  },
  {
    title: '类型',
    dataIndex: 'type',
    valueType: 'select',
    filters: true,
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
    dataIndex: 'status',
    valueType: 'select',
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
    title: '头像',
    dataIndex: 'avatar',
    search: false,
    valueType: 'image',
  },
  {
    title: '时间',
    dataIndex: 'datetime',
    valueType: 'dateTime',
    search: false,
    sorter: (a, b) => a.datetime - b.datetime,
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
];
const formColumns: FormCustomColumnsType<any>[] = [
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
function Demo2() {
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    try {
      // 开启防抖函数后 如果在限制情况 会返回 undefined
      const data = await debounceProTableAddRow(values);
      if (!data) {
        return false;
      }
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      return true;
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      return false;
    }
  };
  return (
    <>
      <TableCustom<any>
        request={getProTable}
        columns={columns}
        pagination={{
          pageSize: 10,
        }}
        scroll={{
          y: 300,
        }}
        headerTitleConfig={{
          create: {
            onClick: ({ btnConfig }: any) => {
              console.log(btnConfig);
              setVisible(true);
            },
          },
        }}
        selectionConfig={{
          delete: ({ btnConfig, selectedRowKeys, onCleanSelected }: any) => {
            console.log(btnConfig, selectedRowKeys, onCleanSelected);
            message.success('delete');
          },
        }}
        operationConfig={{
          edit: {
            onClick: async ({ btnConfig, itext, irecord, _, iaction }: any) => {
              console.log(btnConfig, itext, irecord, _, iaction);
              message.success('edit');
            },
          },
          delete: {
            // 我被禁用了
            disabled: true,
            onClick: () => {
              message.success('delete');
            },
          },
          details: {
            // 我可以配置权限显示或者隐藏
            auth: () => {
              return true;
            },
            text: '详情',
            modalConfig: {
              edit: true,
              modalType: 'Form',
              config: {
                title: (value: any) => {
                  return `${value.title}详情`;
                },
                readonly: true,
                submitter: false,
              },
            },
          },
        }}
      />
      <FormCustom
        columns={formColumns}
        layoutType="ModalForm"
        title="新建表单"
        visible={visible}
        // 弹窗关闭后 重置表单
        modalProps={{
          destroyOnClose: true,
        }}
        onVisibleChange={(value: boolean) => {
          setVisible(value);
        }}
        onFinish={onFinish}
        request={async () => {
          return {
            datetime: '2006-02-03 21:30:57',
            description: '确天确年',
            id: 262,
            status: 2,
            title: '确天确年',
            type: 2,
          };
        }}
        // initialValues={{
        //   datetime: '2006-02-03 21:30:57',
        //   description: '确天确年',
        //   id: 262,
        //   status: 2,
        //   title: '确天确年',
        //   type: 2,
        // }}
      />
    </>
  );
}

export default Demo2;
