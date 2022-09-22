import type { ProFormColumnsType } from "@ant-design/pro-components";
import type { BetaSchemaForm } from "@ant-design/pro-components";

/**
 * formColumns列类型
 */
export declare type ValueType =
  | "text"
  | "InputTooltipCustom"
  | "InputSelectCustom"
  | "InputAutoCompleteCustom"
  | "ProFormCaptchaCustom"
  | "TreeSelectCustom"
  | "UploadCustom"
  | "BraftEditorCustom"
  | "AmapFormCustom"
  | "CityCascadeCustom"
  | "CascaderCustom"
  | "SelectMultipleCustom";

// 字典数据类型
export interface OptionType {
  /**
   * 数据显示值
   */
  label: string;
  /**
   * 数据返回值
   */
  value: any;
}

// formColumns参数类型
export declare type FormCustomColumnsType<T = any> = ProFormColumnsType<
  T,
  ValueType
> & {
  formItemProps?: {
    rules?: {
      /**
       * 联合自定义验证库导出的方法 声明方法名称 可以直接加入验证库
       */
      validatorExtend?: string;
    }[];
  };
};

// form参数类型
export declare type FormCustomProps = BetaSchemaForm & {
  /**
   * 是否只读模式
   * @default false
   */
  readonly?: boolean;
};

/**
 * 自定义子组件会传递过来的值
 */
export declare type CustomType = {
  /**
   * 是否只读模式
   * 自定义必须要实现的
   * @default false
   */
  readonly?: boolean;
  /**
   * 表单渲染的位置
   * tableRead 表格只读
   * table  表格表单
   * form 表单
   * formRead 表单只读
   * @default form
   */
  customMode?: "tableRead" | "table" | "form" | "formRead";
  /**
   * 父级的类穿过来的class
   * 实现到最外层div上 和 其他样式统一
   */
  className?: string;
  /**
   * 父级传递过来的placeholder显示值
   */
  placeholder: string;
  /**
   * 默认值
   * 自定义必须要实现的
   */
  value?: any;
  /**
   * 切换触发方法
   * 自定义必须要实现的
   */
  onChange?: (value: any) => void | undefined;
  /**
   * 传递给antd组件属性或者内容使用的组件 参考ant组件属性
   */
  fieldProps?: any;
};
