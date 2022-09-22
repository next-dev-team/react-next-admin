import TableCustom from '@/components/TableCustom';
import { proTableAddRow, getDemoNoticeMessage } from '@/services';
import { message, Select, Space, Tag } from 'antd';
import type { ProColumnsTypes } from '@/components/TableCustom/types';
import { useState } from 'react';
import type { SubmitOnDoneType } from '@/components/TableCustom/types';

const columns: ProColumnsTypes<any>[] = [
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
];

function Demo5() {
  const [type, setType] = useState<any>('notification');

  return (
    <>
      <Select<string>
        value={type}
        onChange={(value) => setType(value as any)}
        options={['notification', 'message'].map((ctype: any) => ({
          value: ctype,
          label: ctype,
        }))}
      />
      <TableCustom<any>
        tableType="ProList"
        search={false}
        options={false}
        showActions="hover"
        params={{ type: type }}
        request={getDemoNoticeMessage}
        itemLayout={type === 'message' ? 'vertical' : 'horizontal'}
        grid={type === 'message' ? { gutter: 16, column: 2 } : {}}
        columns={columns}
        metas={{
          title: {
            dataIndex: 'title',
          },
          avatar: {
            dataIndex: 'avatar',
          },
          description: {
            dataIndex: 'description',
          },
          content: {
            dataIndex: 'description',
          },
          subTitle: {
            render: (_: any, row: any) => {
              return (
                <Space size={0}>
                  <Tag color="blue">{row.datetime}</Tag>
                </Space>
              );
            },
          },
          // actions: {
          //   render: (text: any, row: any) => [
          //     <a type="link" key={row.id + 'show'}>
          //       查看
          //     </a>,
          //     <a type="link" key={row.id + 'link'}>
          //       标记已读
          //     </a>,
          //   ],
          // },
        }}
        pagination={{
          pageSize: 10,
        }}
        scroll={{
          y: 300,
        }}
        headerTitleConfig={{
          create: {
            modalConfig: {
              modalType: 'Form',
              config: {
                title: '新增表单',
                // 初始化数据。数据钩子
                initialValuesBefor: (data: any) => {
                  return { ...data, title: 111 };
                },
                // 提交数据前。数据钩子
                submitValuesBefor: (data: any) => {
                  return { ...data, name: '小周周' };
                },
                // 提交数据的接口配置
                submitRequest: proTableAddRow,
                // 完成时回调
                submitOnDone: ({ status }: SubmitOnDoneType) => {
                  if (status === 'success') {
                    message.success('新增成功');
                  } else {
                    message.success('失败啦');
                  }
                },
              },
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
          details: {
            // 我可以配置权限显示或者隐藏
            auth: () => {
              return true;
            },
            text: '查看详情',
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
          delete: {
            text: '标为已读',
            onClick: async (values: any, tableRef: any) => {
              console.log(values, tableRef);
              message.success('标为已读');
            },
          },
        }}
      />
    </>
  );
}

export default Demo5;
