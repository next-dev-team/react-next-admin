import FormCustom from "@/components/FormCustom";
import type { ModalProps } from "antd/lib/modal";
import { ModalForm } from "@ant-design/pro-form";
import type { FormCustomColumnsType } from "@/components/FormCustom/types";
import { Typography, Space } from "antd";
const { Text, Link } = Typography;

declare type ImportModalCustomType = {
  id: any;
  /**
   * 显示标题
   * @description
   * @default 导入数据
   */
  title?: string;
  /**
   * 显示描述
   * @description
   * @default 请仔细核对数据后上传,上传后操作无法撤回
   */
  desc?: string;
  /**
   * 设置模板下载地址 如果设置显示下载模板
   */
  templateUrl?: string;
  /**
   * 设置模板下载显示文字
   * @default 下载模板
   */
  templateName?: string;
  /**
   * 自定义表单配置 和表单格式一样
   * @default
   */
  columns?: any;

  /**
   * 上传的路径前缀
   */
  path?: string;
  /**
   * 是否返回blob数据
   */
  blob?: boolean;
} & ModalProps;

function ImportModalCustom(Props: ImportModalCustomType) {
  const {
    id,
    title = "导入数据",
    desc = "请仔细核对数据后上传,上传后操作无法撤回",
    templateUrl,
    templateName = "模板",
    onOk,
    onCancel,
    visible,
    afterClose,
    columns,
    path = "common",
    blob = false,
  } = Props;

  const onFinish = async (values: any) => {
    if (onOk && typeof onOk === "function") {
      return await onOk(values);
    }
  };

  const setModalVisit = (value: any) => {
    if (!value && onCancel && typeof onCancel === "function") {
      onCancel(value);
    }
    if (!value && afterClose && typeof afterClose === "function") {
      afterClose();
    }
  };
  let defaultColumns: FormCustomColumnsType<any>[] = [
    {
      title: "选择文件",
      dataIndex: "file",
      valueType: "UploadCustom",
      fieldProps: {
        path: path,
        maxCount: 1,
        format: ["xlsx"],
        size: 10000,
        blob: blob,
        buttonProps: {
          type: "primary",
          ghost: true,
        },
      },
      formItemProps: {
        rules: [{ required: true, message: "请上传文件" }],
      },
    },
  ];
  if (columns) {
    defaultColumns = [...defaultColumns, ...columns];
  }

  return (
    <>
      <ModalForm
        id={id}
        title={title}
        modalProps={{
          destroyOnClose: true,
        }}
        onFinish={onFinish}
        onVisibleChange={setModalVisit}
        width={400}
        visible={visible}
      >
        <Space direction="vertical">
          {desc && <Text>{desc}</Text>}
          {templateUrl && (
            <Link href={templateUrl} target="_blank">
              下载模板:{`${templateName}`}
            </Link>
          )}
          <FormCustom layoutType="Embed" columns={defaultColumns} />
        </Space>
      </ModalForm>
    </>
  );
}

export default ImportModalCustom;
