import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { useForm } from 'antd/es/form/Form';
import { enUSIntl } from '@ant-design/pro-provider';

const ErrMsg = ({ err }: { err: any }) => {
  return (
    <>
      <div className="flex flex-col gap-y-0.5">
        {typeof err === 'string' && err}
        {__isArray(err) &&
          err?.map((i) => {
            return <ATypography.Text>{i?.message}</ATypography.Text>;
          })}
      </div>
    </>
  );
};

interface ResData {
  meta: Meta;
  data: Datum[];
}

interface Datum {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
  links: Links;
}

interface Links {
  previous?: any;
  current: string;
  next: string;
}

type Filter = Partial<Pagination & Datum>;

export const AntdFormCrud = () => {
  // set init
  _setConfigAxios({
    baseURL: 'https://gorest.co.in/public/v1',
    headers: {
      Authorization:
        'Bearer 0b4c0fa225e4e432de7e51fe13691e86e27ac12a360ca251bf714eeb00942325',
    },
    onError: (err) => {
      console.log('er', err?.data?.data?.message);
      _message.error({
        content: <ErrMsg err={err?.data?.data?.message || err?.data?.data} />,
      });
    },
    onSuccess: (res) => {
      if (String(res?.config?.method)?.toLowerCase() !== 'get') {
        _message.success({
          content: <ErrMsg err="success" />,
        });
      }
    },
  });

  const addNewBlog = (params: Partial<Datum>) =>
    _requestAxios<ResData>('/users', { params, method: 'post' });
  const editBlog = (id: number, params: Partial<Datum>) =>
    _requestAxios<ResData>(`/users/${id}`, { params, method: 'put' });

  const deleteBlog = (id: string | number) =>
    _requestAxios<ResData>(`/users/${id}`, { method: 'delete' });

  const [form] = useForm<Datum>();
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<Datum, 'tag'>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      formItemProps: {
        rules: [{ required: true }],
      },
      hideInSearch: false,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      valueType: 'radioButton',
      fieldProps: {
        options: [
          {
            label: 'Male',
            value: 'male',
          },
          {
            label: 'Female',
            value: 'female',
          },
        ],
      },
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: 'Status',
      hideInSearch: false,
      dataIndex: 'status',
      valueType: 'select',
      formItemProps: {
        rules: [{ required: true }],
      },
      fieldProps: {
        options: [
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'active',
            label: 'Active',
          },
        ],
      },
    },
  ];

  return (
    <>
      <FormCrud<Datum, Filter>
        // manage form, setFieldsValue, resetFields ....
        form={form}
        // actionRef manage reload or refetch data, filter....
        actionRef={actionRef}
        // manage all column and render form, filter...
        columns={columns as any}
        // dataSource={[]}  is manual mode use request instead

        // request is auto mode super fast for CRUD operation
        request={async (params, filter, sorter) => {
          console.log('change params', params, filter, sorter);

          const finalParams = {
            ...params,
            limit: params?.pageSize,
            page: params?.current,
          } as Filter;

          // re run when every param change
          const res = await _requestAxios<ResData>('/users', {
            params: finalParams,
          });
          return {
            // dataSource for table
            data: res?.data?.data,
            success: res?.status === 200,
            // total for pagination
            total: res?.data?.meta?.pagination?.total,
          };
        }}
        // if want to persist columnsState
        columnsState={{
          persistenceKey: 'crud-demo-key',
          persistenceType: 'localStorage',
        }}
        // after confirm delete click
        onDeleteFinished={async (res: { id: string | number }) => {
          return deleteBlog(res?.id);
        }}
        // run after success validate add form
        onFormAddFinished={async (res) => {
          console.log('onFormAddFinished', res);
          return addNewBlog({
            name: res?.name,
            status: res?.status,
            email: res?.email,
            gender: res?.gender,
          });
        }}
        // run after success validate edit form
        onFormEditFinished={async (res: any) => {
          console.log('onFormEditFinished', res);
          return editBlog(res?.record?.id, {
            name: res?.name,
            status: res?.status,
            email: res?.email,
            gender: res?.gender,
          });
        }}
        // tracking every event click
        onSetMode={async (res) => {
          console.log('onSetMode', res);
        }}
      />
    </>
  );
};
