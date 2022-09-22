import TableCustom from '@/components/TableCustom';
import { getProTable, proTableAddRow, proTableDetails, proTableDelete } from '@/services';
import { message } from 'antd';
import type { ProColumnsTypes } from '@/components/TableCustom/types';

import { requestDebounce } from '@/utils';
import type { SubmitOnDoneType } from '@/components/TableCustom/types';

const debounceProTableAddRow: any = requestDebounce(proTableAddRow, 500);

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

function Demo4() {
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
          edit: {
            // 不配置 submitRequest 提交数据的接口 会调用onClick自己处理 如果submitRequest会内置功能自动完成请求业务逻辑
            onClick: async (values: any, tableRef: any) => {
              const res = await debounceProTableAddRow(values);
              // 刷新表格
              tableRef.current.reload();
              console.log('====================================');
              console.log(res);
              console.log('====================================');
              message.success('返回false不会关闭弹窗');
              return false;
            },
            modalConfig: {
              edit: true, // 是否是编辑模式 如果是会给当前弹窗赋值默认值：值由config.request远程拉取或者row读取
              modalType: 'Form',
              config: {
                title: '编辑表单',
                // 配置编辑时 远程请求数据动态赋值默认值、如果不配置则自动会从row中取数据
                request: proTableDetails,
                // 远程请求的参数
                params: {
                  aa: 11,
                },
                // 赋值默认值前 数据的猴子
                initialValuesBefor: (data: any) => {
                  return { ...data, aa: 111 };
                },
                // 不配置提交接口 触发onClick自行处理
                // submitRequest: debounceProTableAddRow,
              },
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
          delete: {
            modalConfig: {
              modalType: 'Delete',
              config: {
                initialValuesBefor: (data: any) => {
                  return { ...data, title: 111 };
                },
                submitValuesBefor: (data: any) => {
                  return { ...data, name: '小周周' };
                },
                // debounceProTableAddRow
                submitRequest: proTableDelete,
                submitOnDone: ({ status }: SubmitOnDoneType) => {
                  if (status === 'success') {
                    message.success('删除成功');
                  }
                },
              },
              edit: true,
            },
          },
        }}
      />
    </>
  );
}

export default Demo4;
