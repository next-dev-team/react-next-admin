import TableCustom from '@/components/TableCustom';
import { getProTable, proTableDownload } from '@/services';
import type { ProColumnsTypes } from '@/components/TableCustom/types';

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
  },
  {
    title: '描述',
    dataIndex: 'description',
    copyable: true,
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
    title: '时间',
    dataIndex: 'datetime',
    valueType: 'dateTime',
    sorter: (a, b) => a.datetime - b.datetime,
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
        operationConfig={{
          download: {
            modalConfig: {
              modalType: 'OnClick',
              config: {
                initialValuesBefor: (data: any) => {
                  return { ...data, title: 111 };
                },
                submitValuesBefor: (data: any) => {
                  return { id: 'db.sql', ...data };
                },
                submitRequest: proTableDownload, // 配置函数调用函数执行返回二进制 自动下载
              },
              edit: true,
            },
          },
        }}
      />
    </>
  );
}

export default Demo1;
