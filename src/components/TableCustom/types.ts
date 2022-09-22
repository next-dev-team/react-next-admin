import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import type { ValueType } from '@/components/FormCustom/types';
// import type { ProListProps } from '@ant-design/pro-components';
import type { Rule } from 'rc-field-form/lib/interface';

/**
 * 表格单元格特殊样式配置
 */
export declare type businessStyleType = {
  /**
   * 类型 tag 表格单元格显示形式为tag
   * 类型 ...
   */
  type?: 'tag';
  /**
   * 使用判断的的字段
   */
  field?: any;
  /**
   * 配置信息
   */
  options?: {
    value: any;
    label: any;
  }[];
};

declare type rulesTypes = Rule & {
  /**
   * 联合自定义验证库导出的方法 声明方法名称 可以直接加入验证库
   */
  validatorExtend?: string;
};

declare type CustomProColumnsTypes<T> =
  | ProColumns<T, ValueType>
  | {
      formItemProps?: {
        rules?: rulesTypes[];
      };
      [propName: string]: any;
    };

export declare type ProColumnsTypes<T> = CustomProColumnsTypes<T> & {
  // 网络发起请求快捷配置 优先级低于 request参数
  // requestConfig?: requestConfigType;
  children?: CustomProColumnsTypes<T>[];
  /**
   * 配置用于为表单分组
   */
  formGroup?: number;
  /**
   * 配置用于为表单显示顺序
   */
  formOrder?: number;
  /**
   * 只生效表格的宽度
   */
  tableWidth?: number;
  /**
   * 只生效表单的宽度
   */
  formWidth?: number;
  /**
   * 业务样式类型
   * type = 1 显示tag标签显示
   */
  businessStyle?: businessStyleType;
};

export declare type SubmitOnDoneType = {
  /**
   * 请求完成的回调状态
   */
  status?: 'success' | 'error';
  /**
   * 请求的请求数据
   */
  params?: Record<any, any>;
  /**
   * 请求结果
   */
  result?: Record<any, any>;
};

// 内置功能的类型
export declare type ModalType =
  | 'Form'
  | 'Delete'
  | 'Download'
  | 'PreviewHtml'
  | 'Import'
  | 'Confirm'
  | 'OnClick';
// 内置组件配置项
export declare type ModalPropsConfigType = {
  /**
   * 弹窗名称设置
   * @default 弹窗表单
   */
  title?:
    | string
    | ((record: any) => React.ReactNode | ((props: any, type: any, dom: any) => React.ReactNode));
  /**
   * 提交请求的前数据的钩子
   * @default
   */
  submitValuesBefor?: (params: any) => any;
  /**
   * 提交请求的Request
   * @default
   */
  submitRequest?: any;
  /**
   * 请求完成成功回调
   * @default
   */
  submitOnDone?: (params: SubmitOnDoneType) => void;
  /**
   * 发起网络请求的参数,与 request 配合使用
   * @default
   */
  params?: Record<any, any>;
  /**
   * 发起网络请求的参数,返回值会覆盖给 initialValues
   * @default
   */
  request?: (params: any) => Promise<any>;
  /**
   * 数据初始化复制之前的钩子
   * @default
   */
  initialValuesBefor?: (data: any) => any;

  /**
   * 渲染表单配置文件之前
   * @default
   */
  columnBefor?: (columns: any, initialValues: any) => any;
  /**
   * 表单值改变的回调
   * @default
   */
  onValuesChange?: (
    /**
     * 变化的值
     */
    value: any,
    /**
     * 当前表单配置
     */
    formColumns: any,
    /**
     * 设置当前表配置
     */
    setFormColumns: any,
    /**
     * 表单Ref
     */
    formRef: any,
    /**
     * 表单原始值，不会因为回调columnBefor 改变变化
     */
    oldFormColumns: any,
  ) => any;
  /**
   * 弹窗类型时：弹窗的宽度
   */
  width?: any;
  /**
   * 是否只读
   */
  readonly?: boolean;
  /**
   * 弹窗类型时：自定义页脚
   */
  submitter?: any;
  /**
   * 预览富文本类型：预览的链接
   */
  link?: any;
  /**
   * 透传给使用的自定义组件
   * 会合并config穿过去
   */
  customProps?: any;

  [key: string]: any;
};
// 内置功能配置
export declare type ModalPropsType = {
  /**
   * key
   * @default 自动生成的可忽略
   */
  key?: string;
  /**
   * 触发的业务位置
   * @default 自动生成的可忽略
   */
  type?: ClickType;
  /**
   *  关联弹窗类型
   * 查看 ModalType 属性说明
   */
  modalType?: ModalType;
  /**
   * 表单自定义columns配置参数、如果不配置默认取表格columns配置
   * @default 弹窗表单
   */
  columns?: any;
  /**
   * 是否按照tabel传入格式化columns
   */
  formatColumns?: boolean;
  /**
   * 是否为编辑模式
   * @default false
   */
  edit?: boolean;
  /**
   * 内置组件的一些功能性配置
   * 查看 ModalPropsConfigType
   * @default false
   */
  config?: ModalPropsConfigType;
};

export type BtnConfigType = {
  /**
   * 唯一值
   * @default 自动生成的可忽略
   */
  key?: string;
  /**
   * className
   * @default 自动生成的可忽略
   */
  className?: string;
  /**
   * 按钮名称
   * @default 按钮
   */
  text?: string;
  /**
   *  icon
   * @default
   */
  icon?: React.ReactNode | any;
  /**
   *  按钮类型
   * @default primary
   */
  type?: 'default' | 'primary' | 'link' | 'text' | 'ghost' | 'dashed';
  /**
   *  按钮类型
   * @default primary
   */
  size?: 'default' | 'large' | 'small';
  /**
   *  按钮样式
   */
  style?: Record<string, any>;
  /**
   *  按钮属性危险
   * @default false
   */
  danger?: boolean;
  /**
   *  是否禁用
   * 可配置为 boolean 和 函数
   * @default false
   */
  disabled?: ((...params: any[]) => boolean) | boolean;
  /**
   *  按钮权限 控制是否显示 return false 隐藏 true显示
   *  按钮如果是row记录会返回 记录值等参数
   * (btnConfig) => boolean
   * (btnConfig, selectedRowKeys, onCleanSelected) => boolean
   * (btnConfig, irecord) => boolean
   * @default true
   */
  auth?: (() => boolean) | any;
  /**
   *  按钮点击回调
   * 回调中会返回 按钮参数，行数据等
   */
  onClick?: ((config: any) => any) | any;
  /**
   *  内置功能的配置
   *  查看 ModalPropsType
   */
  modalConfig?: ModalPropsType;
};

// 点击位置的类型
export type ClickType = 'selection' | 'header' | 'operation';
// 按钮参数
export type BtnConfigTypes = Record<any, BtnConfigType | ((config: any) => void)>;

// 表格参数
export declare type TableCustomTypes<T> = ProTableProps<T, Record<string, any>, ValueType> & {
  /**
   * 表格类型 同 ProTable 和 ProList 一直切换更简单
   @default ProTable
   */
  tableType?: 'ProTable' | 'ProList';
  /**
   * header设置快捷按钮
   */
  headerTitleConfig?: BtnConfigTypes;
  /**
   * 全选快捷配置
   */
  selectionConfig?: BtnConfigTypes;
  /**
   *菜单快捷配置
   */
  operationConfig?: BtnConfigTypes;
  /**
   * 行菜单操作显示最大数据 超过就...
   */
  operationBtnShowMax?: number;
  /**
   * 表格自动请求
   */
  request?: any;
  /**
   * 表格字段声明
   */
  columns?: ProColumnsTypes<T> | any;
  /**
   * 表格类型为ProList 持有
   */
  metas?: any;
  /**
   * 表格类型为ProList 持有
   */
  showActions?: any;
  /**
   * 表格类型为ProList 持有
   */
  itemLayout?: any;
  /**
   * 表格类型为ProList 持有
   */
  grid?: any;
};

// 表格的ref
export declare type TableRefType = {
  reload: (resetPageIndex?: boolean) => void;
  reloadAndRest: () => void;
  reset: () => void;
  clearSelected?: () => void;
  startEditable: (rowKey: any) => boolean;
  cancelEditable: (rowKey: any) => boolean;
};

// 动态插入渲染弹窗的参数
export declare type ModalRenderPropsType = {
  /**
   * 保留字段后面用
   */
  render?: any;
  /**
   * 弹窗方法本身分配的组件唯一值
   * @default 自动生成的可忽略
   */
  modelName?: string;
  /**
   * 弹窗方法分配 给内容组件唯一值
   * @default 自动生成的可忽略
   */
  modelchildName?: string;
  /**
   * 关闭整个弹窗函数 调用可关闭弹窗
   * @default 自动生成的可忽略
   */
  closeModal?: any;
  /**
   * 表格点击业务位置  例如 header
   * @default 自动生成的可忽略
   */
  type?: ClickType;
  /**
   * 渲染的子集
   * @default 自动生成的可忽略
   */
  children?: any;
  /**
   * 按钮配置
   * 可查看表格 BtnConfigType
   */
  btnConfig?: BtnConfigType | any;
  /**
   * 按钮点击回调配置和数据
   * 具体为 ClickType点击位置不同数据不同
   */
  clickConfig?: any;
  /**
   * 表格整个配置信息
   * 可查看表格 TableCustomTypes
   */
  tableProps?: TableCustomTypes<any> | any;

  /**
   * 操作表格tableRef
   *
   */
  tableRef?: TableRefType | any;
};
