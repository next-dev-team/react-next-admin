import { BetaSchemaForm } from "@ant-design/pro-form";
import type {
  FormCustomColumnsType,
  ValueType,
  FormCustomProps,
} from "@/components/FormCustom/types";
import * as components from "./components";
import styles from "./index.less";
import * as validatorExtend from "@/utils/validator";

/**
 * 递归遍历表格配置文件
 * @param column
 * @param props
 * @returns
 */
const recursionChildren = (column: any, props: any) => {
  if (!column.columns) {
    const { readonly, layoutType } = props;

    // 如果大小没有设置默认m:328
    if (!column.width) {
      column.width = "m";

      if (layoutType === "ModalForm") {
        if (!column.formItemProps) {
          column.formItemProps = {
            style: {},
          };
        }
        if (!column.formItemProps.style) {
          column.formItemProps.style = {};
        }

        // @ts-ignore
        if (!column.formItemProps.style.width) {
          column.formItemProps.style.width = "328px";
        }
      }
    }

    // 如果是只读模式
    if (readonly) {
      column.readonly = true;
    }

    if (!column.valueType) {
      column.valueType = "text";
    }
    // 如果是自定义组件
    if (column.valueType.indexOf("Custom") !== -1) {
      if (components[column.valueType]) {
        const CustomComponent: React.ReactNode = components[column.valueType];
        // custom[column.valueType] = {
        //   render: (text: any, props: any) => {
        //     // @ts-ignore
        //     return <CustomComponent readonly={true} {...props} config={column} />;
        //   },
        //   renderFormItem: (text: any, props: any) => (
        //     // @ts-ignore
        //     <CustomComponent {...props} config={column} />
        //   ),
        // };
        column.render = (_dom: any, entity: any) => {
          return (
            // @ts-ignore
            <CustomComponent
              {...entity}
              customMode="formRead"
              readonly={true}
              config={column}
            />
          );
        };
        column.renderFormItem = () => {
          // @ts-ignore
          return <CustomComponent customMode="form" />;
        };
      } else {
        // @ts-ignore
        $global.log(`自定义组件:${column.valueType}无法识别`);
      }
    }

    // 如果包含验证 并且有自定义验证使用 自动加入
    if (
      column.formItemProps &&
      column.formItemProps.rules &&
      column.formItemProps.rules.length > 0
    ) {
      column.formItemProps.rules.forEach((rule: any) => {
        if (column.valueType === "select" && rule.message === undefined) {
          rule.message = "请选择" + column.title;
        }
        if (rule.validatorExtend) {
          for (const key in validatorExtend) {
            if (rule.validatorExtend === key) {
              rule.validator = validatorExtend[key];
              delete rule.validatorExtend;
            }
          }
        }
      });
    }

    if (
      column.valueType === "select" &&
      column.fieldProps &&
      column.fieldProps.showSearch === undefined
    ) {
      column.fieldProps.showSearch = true;
    }

    return;
  }
  column.columns.forEach((i: any) => {
    recursionChildren(i, props);
  });
};

/**
 * 递归遍历表格配置文件 得到没有返回值的字段 默认为null
 * @param columns
 * @param item
 * @returns
 */
const onFinishChildren = (columns: any, value: any) => {
  if (!columns || columns.length === 0) {
    return;
  }
  columns.forEach((item: any) => {
    if (item.columns && item.columns.length > 0) {
      onFinishChildren(item.columns, value);
    } else {
      if (!value.hasOwnProperty(item.dataIndex)) {
        value[item.dataIndex] = null;
      }
    }
  });
};

function FormCustom(Props: FormCustomProps) {
  const { columns, onFinish, readonly, layoutType } = Props;

  const newColumns: any = [];
  // 重新整理字段
  if (layoutType !== "StepsForm") {
    columns.forEach((item: any) => {
      const column: FormCustomColumnsType = { ...item };
      recursionChildren(column, Props);
      newColumns.push(column);
    });
  } else {
    columns.forEach((itemColumn: any) => {
      const newChildren: any = [];
      itemColumn.forEach((item: any) => {
        const column: FormCustomColumnsType = { ...item };
        recursionChildren(column, Props);
        newChildren.push(column);
      });
      newColumns.push(newChildren);
    });
  }

  const customProps: FormCustomProps = { ...Props };
  // 如果是ModalForm 弹窗表单 设置默认值
  if (layoutType === "ModalForm") {
    if (!customProps.width) {
      customProps.width = "750px";
    }
    if (!customProps.layout) {
      customProps.layout = "vertical";
    }

    if (!customProps.modalProps) {
      customProps.modalProps = {};
    }
    // if (customProps.modalProps.maskClosable !== true) {
    //   // 默认点击遮罩不关闭
    //   customProps.modalProps.maskClosable = false
    // }
    // 弹窗自定义class
    if (Props.id) {
      customProps.modalProps.wrapClassName = Props.id;
    }

    if (readonly) {
      delete customProps.readonly;
    }
  }

  const formOnFinish = async (value: any) => {
    // 赋值没有返回的默认值为null
    onFinishChildren(newColumns, value);
    try {
      return await onFinish(value);
    } catch (error) {
      return false;
    }
  };

  return (
    <>
      <BetaSchemaForm<any, ValueType>
        {...customProps}
        onFinish={formOnFinish}
        columns={newColumns}
        // omitNil={false}
        className={styles.formCustom}
      />
    </>
  );
}

export default FormCustom;
