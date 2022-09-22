import FormCustom from '@/components/FormCustom';
import type { FormCustomColumnsType } from '@/components/FormCustom/types';
import { requestDebounce } from '@/utils';
import { proTableAddRow } from '@/services';
import { message } from 'antd';

const valueEnum = {
  all: { text: '全部', status: 'Default' },
  open: {
    text: '未解决',
    status: 'Error',
  },
  closed: {
    text: '已解决',
    status: 'Success',
    disabled: true,
  },
  processing: {
    text: '解决中',
    status: 'Processing',
  },
};

const columnsSteps: FormCustomColumnsType<any>[][] = [
  [
    {
      title: '标题',
      dataIndex: 'title',
      valueType: 'InputTooltipCustom',
      fieldProps: {
        tooltipTitle: '使用自定义表单组件',
        fieldProps: {
          style: {
            width: '50%',
          },
        },
      },
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
    {
      title: '状态',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum,
      width: 'm',
    },
  ],
  [
    {
      title: '标签',
      dataIndex: 'labels',
      width: 'm',
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'createName',
      valueType: 'date',
    },
    {
      title: '分组',
      valueType: 'group',
      columns: [
        {
          title: '状态',
          dataIndex: 'groupState',
          valueType: 'select',
          width: 'xs',
          valueEnum,
        },
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
  ],
  [
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
              valueEnum,
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
          valueEnum,
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
  ],
];

const debounceProTableAddRow: any = requestDebounce(proTableAddRow, 500);

function Demo7() {
  const onFinish = async (values: any) => {
    try {
      // 开启防抖函数后 如果在限制情况 会返回 undefined
      const data = await debounceProTableAddRow(values);
      if (!data) {
        return false;
      }
      message.success('成功');
      console.log(data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <>
      <FormCustom
        layoutType="StepsForm"
        steps={[
          {
            title: '第一步',
          },
          {
            title: '第二步',
          },
          {
            title: '第三步',
          },
        ]}
        columns={columnsSteps}
        title="分步骤表单"
        onFinish={onFinish}
      />
    </>
  );
}

export default Demo7;
