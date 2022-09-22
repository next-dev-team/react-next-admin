import FormCustom from '@/components/FormCustom';
import type { FormCustomColumnsType } from '@/components/FormCustom/types';
import { useState, useRef } from 'react';
import { message, Button } from 'antd';
import type { ProFormInstance } from '@ant-design/pro-components';

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

const columnsFn: (hideInForm?: boolean) => FormCustomColumnsType<any>[] = (hideInForm = true) => {
  return [
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
    {
      title: '状态1',
      dataIndex: 'state1',
      valueType: 'select',
      hideInForm: hideInForm,
      valueEnum,
      width: 'm',
    },
  ];
};

function Demo8() {
  const formRef = useRef<ProFormInstance>();
  const [columns, setColumns] = useState<any>(() => columnsFn());

  const onFinish = async (values: any) => {
    try {
      console.log('====================================');
      console.log(values);
      console.log('====================================');
      message.success('成功');
      return true;
    } catch (error) {
      console.log('====================================');
      console.log(error, setColumns);
      console.log('====================================');
      return false;
    }
  };
  const onValuesChange = async (values: any) => {
    console.log('====================================');
    console.log(formRef.current);
    console.log('====================================');
    if (values.state) {
      formRef?.current?.setFieldsValue({
        title: values.state,
      });
      if (values.state === 'open') {
        setColumns(columnsFn(false));
      } else {
        setColumns(columnsFn());
      }
    }
  };

  const getFormatValues = () => {
    console.log('格式化后的所有数据：', formRef.current?.getFieldsFormatValue?.());
  };

  const validateAndGetFormatValue = () => {
    formRef.current?.validateFieldsReturnFormatValue?.().then((values) => {
      console.log('校验表单并返回格式化后的所有数据：', values);
    });
  };

  return (
    <>
      <FormCustom
        formRef={formRef}
        key="formDemo"
        columns={columns}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
        submitter={{
          render: (props: any, doms: any) => {
            return [
              ...doms,
              <Button.Group key="refs" style={{ display: 'block' }}>
                <Button htmlType="button" onClick={getFormatValues} key="format">
                  获取格式化后的所有数据
                </Button>
                <Button htmlType="button" onClick={validateAndGetFormatValue} key="format">
                  校验表单并返回格式化后的所有数据
                </Button>
              </Button.Group>,
            ];
          },
        }}
      />
    </>
  );
}

export default Demo8;
