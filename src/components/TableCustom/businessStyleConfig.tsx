import type {
  businessStyleType,
  ProColumnsTypes,
} from "@/components/TableCustom/types";
import { Tag } from "antd";

/**
 * 单元格已tag方式显示
 */
export const tagView = (props: ProColumnsTypes<any>) => {
  const { businessStyle = {}, dataIndex } = props;
  const { options, field }: businessStyleType = businessStyle;
  let defaultOptions = [
    {
      label: "green",
      value: 0,
    },
    {
      label: "blue",
      value: 1,
    },
    {
      label: "magenta",
      value: 2,
    },
    {
      label: "red",
      value: 3,
    },
    {
      label: "cyan",
      value: 4,
    },
  ];
  let defaultField = dataIndex;
  if (options) {
    defaultOptions = options;
  }
  if (field) {
    defaultField = field;
  }
  return (dom: any, record: any) => {
    const domOptions: any = [...defaultOptions];
    const domField: any = defaultField;
    const data: any = domOptions.find((i: any) => i.value === record[domField]);

    return <Tag color={data.label}>{dom}</Tag>;
  };
};

/**
 * 单元格已tag方式显示
 */
export const colorTextView = (props: ProColumnsTypes<any>) => {
  const { businessStyle = {}, dataIndex } = props;
  const { options, field }: businessStyleType = businessStyle;
  let defaultOptions = [
    {
      label: "pink",
      value: 0,
    },
    {
      label: "red",
      value: 1,
    },
    {
      label: "#108ee9",
      value: 2,
    },
    {
      label: "orange",
      value: 3,
    },
    {
      label: "green",
      value: 4,
    },
    {
      label: "blue",
      value: 5,
    },
    {
      label: "blpurpleue",
      value: 6,
    },
    {
      label: "geekblue",
      value: 7,
    },
    {
      label: "magenta",
      value: 8,
    },
    {
      label: "volcano",
      value: 9,
    },
  ];
  let defaultField = dataIndex;
  if (options) {
    defaultOptions = options;
  }
  if (field) {
    defaultField = field;
  }
  return (dom: any, record: any) => {
    const domOptions: any = [...defaultOptions];
    const domField: any = defaultField;
    const data: any = domOptions.find((i: any) => i.value === record[domField]);

    return <span style={{ color: data.label }}>{dom}</span>;
  };
};

/**
 * 标签方法对应表
 */
const BusinessStyleArr: any = {
  tag: tagView,
  colorText: colorTextView,
};

const getBusinessStyle = (props: ProColumnsTypes<any>) => {
  const type = props.businessStyle?.type;
  if (type) {
    return BusinessStyleArr[type](props);
  }
};

export default getBusinessStyle;
