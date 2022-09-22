import TableCustom from '@/components/TableCustom';
import { getProTable, proTableAddRow, proTableDetails } from '@/services';
import { message } from 'antd';
import type { ProColumnsTypes } from '@/components/TableCustom/types';
import { requestDebounce } from '@/utils';
import type { SubmitOnDoneType } from '@/components/TableCustom/types';
import type { FormCustomColumnsType } from '@/components/FormCustom/types';

const debounceProTableAddRow: any = requestDebounce(proTableAddRow, 500);

const columns: ProColumnsTypes<any>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    valueType: 'indexBorder',
    hideInForm: true,
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title',
    formGroup: 1,
    formOrder: 1,
  },
  {
    title: '描述',
    dataIndex: 'description',
    copyable: true,
    formGroup: 1,
    formOrder: 1,
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    formGroup: 2,
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
    title: '时间',
    dataIndex: 'datetime',
    valueType: 'dateTime',
    formGroup: 2,
    sorter: (a, b) => a.datetime - b.datetime,
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
function Demo1() {
  return (
    <>
      <TableCustom<any>
        request={getProTable}
        columns={columns}
        search={false}
        pagination={{
          pageSize: 5,
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
              columns: formColumns,
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
          edit1: {
            text: '编辑1',
            modalConfig: {
              edit: true, // 是否是编辑模式 如果是会给当前弹窗赋值默认值：值由config.request远程拉取或者row读取
              modalType: 'Form',
              config: {
                title: '编辑表单1',
                // 赋值默认值前 数据的猴子
                initialValuesBefor: (data: any) => {
                  return { ...data, aa: 111 };
                },
                // 提交数据前。数据钩子
                submitValuesBefor: (data: any) => {
                  return { ...data, name: '小周周' };
                },
                // 不配置提交接口 触发onClick自行处理
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
          details: {
            text: '详情',
            modalConfig: {
              edit: true,
              modalType: 'Form',
              config: {
                // 动态的弹窗标题
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
    </>
  );
}

export default Demo1;
