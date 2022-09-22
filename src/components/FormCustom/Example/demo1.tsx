import { Button, message } from 'antd';
import FormCustom from '@/components/FormCustom';
import type { FormCustomColumnsType } from '@/components/FormCustom/types';
import { PlusOutlined } from '@ant-design/icons';
import { getProTableUserList } from '@/services';

const columns: FormCustomColumnsType<any>[] = [
  {
    valueType: 'group',
    columns: [
      {
        title: '标题',
        dataIndex: 'title',
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
      },
    ],
  },
  {
    title: '分组',
    valueType: 'group',
    columns: [
      {
        title: '类型',
        dataIndex: 'type',
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
    ],
  },
  {
    title: '用户',
    dataIndex: 'user_id',
    valueType: 'select',
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
    title: '时间',
    dataIndex: 'datetime',
    valueType: 'dateTime',
  },
];

function Demo1() {
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
        columns={columns}
        layoutType="ModalForm"
        title="ModalForm"
        trigger={
          <Button type="primary">
            <PlusOutlined />
            ModalForm
          </Button>
        }
        onFinish={onFinish}
        request={async (params: any) => {
          console.log(params);
          return {
            datetime: '2006-02-03 21:30:57',
            description: '确天确年',
            id: 262,
            status: 2,
            title: '确天确年',
            type: 2,
          };
        }}
      />
      <span style={{ marginRight: '20px' }} />
      <FormCustom
        columns={columns}
        layoutType="DrawerForm"
        title="DrawerForm"
        trigger={
          <Button type="primary">
            <PlusOutlined />
            DrawerForm
          </Button>
        }
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
      />
    </>
  );
}

export default Demo1;
