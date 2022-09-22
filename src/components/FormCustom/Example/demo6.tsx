import FormCustom from '@/components/FormCustom';
import type { FormCustomColumnsType } from '@/components/FormCustom/types';
import { requestDebounce } from '@/utils';
import { proTableAddRow } from '@/services';
import { message } from 'antd';

const columns: FormCustomColumnsType<any>[] = [
  {
    title: 'ID',
    dataIndex: 'id6',
    valueType: 'indexBorder',
    hideInForm: true,
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title6',
    tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [{ required: true, message: '标题' }],
    },
  },
  {
    title: '描述',
    dataIndex: 'description6',
  },
];

const debounceProTableAddRow: any = requestDebounce(proTableAddRow, 500);

function Demo6() {
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
        columns={columns}
        title="查看表单"
        onFinish={onFinish}
        readonly={true}
        submitter={false}
        initialValues={{
          description6: '确天确年',
          title6: '确天确年',
        }}
      />
    </>
  );
}

export default Demo6;
