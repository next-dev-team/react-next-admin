import { ProColumns } from '@ant-design/pro-components';
import { useWelcomeLogic } from './useWelcomeLogic';
interface IBlog {
  data: Datum[];
}

interface Datum {
  id: number;
  status: string;
  user_created: string;
  date_created: string;
  user_updated?: any;
  date_updated?: any;
  title: string;
  photo: string;
  iframeUr: string;
  short_description: string;
  description?: any;
}

export const AntdFormCrud = () => {
  // set init
  _setConfigAxios({
    baseURL: 'https://dwmniez7.directus.app',
  });

  const columns: ProColumns<Datum, 'tag'>[] = [
    {
      title: 'Title',
      dataIndex: 'title',
      hideInSearch: false,
    },

    {
      title: 'Short Description',
      dataIndex: 'short_description',
      ellipsis: true,
      valueType: 'textarea',
    },

    {
      title: 'Status',
      dataIndex: 'status',
      valueType: 'tag',
      hideInSearch: false,
    },
  ];

  return (
    <>
      <FormCrud<Datum>
        request={async (params = {}) => {
          const res = (await _requestAxios<IBlog>('/items/blog', { params }))
            ?.data;
          return {
            data: res?.data,
            success: !!res?.data,
          };
        }}
        columns={columns as any}
      />
    </>
  );
};
