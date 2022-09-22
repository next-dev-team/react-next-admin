import TableCustom from '@/components/TableCustom';
import { getProTable } from '@/services';
import type { ProColumnsTypes } from '@/components/TableCustom/types';
import { getProTableUserList } from '@/services';

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
    ellipsis: true,
    tip: '标题过长会自动收缩',
    fieldProps: {
      placeholder: '请输入账号',
      maxLength: 20,
    },
    formItemProps: {
      rules: [{ required: true, message: '标题' }],
    },
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
    valueType: 'InputTooltipCustom',
    hideInTable: true,
    hideInForm: true,
    fieldProps: {
      tooltipTitle: '自定义组件的使用',
    },
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
    title: '用户',
    dataIndex: 'user_id',
    valueType: 'select',
    search: false,
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

function Demo1() {
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
      />
    </>
  );
}

export default Demo1;
