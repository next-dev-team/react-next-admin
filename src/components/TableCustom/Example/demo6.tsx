import TableCustom from '@/components/TableCustom';
import { getProTable } from '@/services';
import type { ProColumnsTypes } from '@/components/TableCustom/types';

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
    title: '状态',
    width: 120,
    dataIndex: 'status',
    valueType: 'select',
    formGroup: 2,
    formOrder: 0,
    businessStyle: {
      type: 'tag',
    },
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
    title: '操作',
    key: 'option',
    valueType: 'option',
    width: 160,
    fixed: 'right',
  },
];

function Demo6() {
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

export default Demo6;
