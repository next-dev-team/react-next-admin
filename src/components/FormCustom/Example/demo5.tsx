import FormCustom from "@/components/FormCustom";
import type { FormCustomColumnsType } from "@/components/FormCustom/types";
import { message } from "antd";
import { ProForm } from "@ant-design/pro-components";

const columns: FormCustomColumnsType<any>[] = [
  {
    title: "标题",
    dataIndex: "title5",
    fieldProps: {
      tooltipTitle: "标题是必须填写的哦",
    },
    formItemProps: {
      rules: [{ required: true, message: "标题" }],
    },
  },
  {
    title: "描述",
    dataIndex: "description5",
  },
];

const columns1: FormCustomColumnsType<any>[] = [
  {
    title: "标题a",
    dataIndex: "title5a",
  },
  {
    title: "描述a",
    dataIndex: "description5a",
  },
];

function Demo5() {
  const onFinish = async (values: any) => {
    try {
      console.log(values);
      message.success("成功");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <>
      <ProForm onFinish={onFinish}>
        <h1>表单1 </h1>
        <FormCustom layoutType="Embed" columns={columns} />
        <h1>表单2 </h1>
        <FormCustom layoutType="Embed" columns={columns1} />
      </ProForm>
    </>
  );
}

export default Demo5;
