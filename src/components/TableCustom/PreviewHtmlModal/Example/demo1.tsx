import TableCustom from '@/components/TableCustom';
import { getDemoNoticeMessage, getDemoNoticeMessageRed } from '@/services';
import { IconFont } from '@/utils';
import { Space, Tag } from 'antd';

function Demo1() {
  return (
    <>
      <TableCustom<any>
        tableType="ProList"
        search={false}
        options={false}
        showActions="hover"
        params={{ type: 'notification' }}
        request={getDemoNoticeMessage}
        itemLayout="horizontal"
        grid={false}
        metas={{
          title: {
            dataIndex: 'title',
          },
          avatar: {
            dataIndex: 'avatar',
            render: () => {
              return <IconFont type="icon-052-notification" style={{ fontSize: 28 }} />;
            },
          },
          description: {
            dataIndex: 'created_at',
          },
          content: {
            dataIndex: 'desc',
          },
          subTitle: {
            render: (_: any, row: any) => {
              return (
                <Space size={0}>
                  <Tag
                    color={row.is_urgent === 1 ? 'blue' : row.is_urgent === 2 ? 'magenta' : 'red'}
                  >
                    {row.is_urgent_name}
                  </Tag>
                </Space>
              );
            },
          },
        }}
        pagination={{
          pageSize: 10,
        }}
        columns={[
          {
            title: '封面',
            dataIndex: 'img_url',
            valueType: 'UploadCustom',
            formGroup: 1,
            fieldProps: {
              listType: 'picture-card',
            },
          },
          {
            title: '重要程度',
            dataIndex: 'is_urgent_name',
            formGroup: 1,
          },
          {
            title: '标题',
            dataIndex: 'title',
            formGroup: 2,
          },
          {
            title: '简介',
            dataIndex: 'desc',
            formGroup: 3,
          },
          {
            title: '内容',
            dataIndex: 'content',
            valueType: 'BraftEditorCustom',
            formGroup: 4,
          },
        ]}
        operationConfig={{
          preview: {
            text: '查看详情',
            modalConfig: {
              modalType: 'PreviewHtml',
              config: {
                request: getDemoNoticeMessageRed,
                initialValuesBefor: (data: any) => {
                  return { ...data, date: data.created_at };
                },
              },
            },
          },
          previewurl: {
            text: '加载外部网页',
            modalConfig: {
              modalType: 'PreviewHtml',
              config: {
                link: 'https://www.w3school.com.cn/tags/tag_iframe.asp',
              },
            },
          },
        }}
      />
    </>
  );
}

export default Demo1;
