---
title: 子组件开发说明
order: 1
nav:
  title: 组件
group:
  title: 表单组件
  path: /form-custom
---


## 自定义开发表格单组件说明

 -  一.自定义表单开发必须遵循规则 
    - **1.其本身有独立使用说明文档和运行Demo** 
    - **2.本身可以独立运行不受业务组件的使用环境所影响** 
    - **3.本身尽可能是业务最小化模块**
 -  二.自定义组件开发中可以使用以下组件、可以单独使用、也可以混合使用：
    - **[ProComponents-Form](https://procomponents.ant.design/components/form)**
    - **[Antd-Form](https://ant.design/components/form-cn/)**
    - **[html语义化标签]**
 -  三.自定义组件必须完成4个属性对应实现方法、**value、onChange、readonly、fieldProps**
    - **1.value 接受默认值** 
    - **2.onChange值发生变化需要触发该方法** 
    - **3.readonly只读模式下应该有 固定ui呈现**
    - **4.fieldProps传递给下级组件的属性**
    - **5.className是由ProForm组件统一传递过来的字段宽度和字段样式、为了样式统一建议使用**
    - ```js
      const { className,onChange, value, options, fieldProps } = props;

      useEffect(() => {
         /**
         * 如果父级传有默认值则赋值默认值
         */
         setInputValue(value);
      }, []);

      /**
      * input切换值变换。如果父级传入监听方法调用
      * @param value
      */
      const onInputChange = (avalue: any) => {
         setInputValue(avalue);
         if (onChange && typeof onChange === 'function') {
            onChange(avalue);
         } else {
            message.info(`Input切换值${avalue}`);
         }
      };

      return (
         <>
            <div className={className}>
               {readonly ? (
                  value
                  ) : (
                  <AutoComplete
                     value={inputValue}
                     placeholder="请输入"
                     {...fieldProps}
                     options={nowOptions}
                     // onSelect={onSelect}
                     // onSearch={onSearch}
                     onChange={onInputChange}
                  />
               )}
            </div>
         </>
      );
      ```
    - **4.在components.tsx中导出组件**
    - ```js
         import InputAutoCompleteCustom from './InputAutoCompleteCustom';
         export { InputAutoCompleteCustom };
      ```
    - **5.在types.d.ts 定义ValueType类型**
    - ```js
         export declare type ValueType =
      | 'text'
      | 'InputTooltipCustom'
      | 'InputSelectCustom'
      | 'InputAutoCompleteCustom'
      | 'ProFormCaptchaCustom'
      | FormFieldType;
      ```
 -  四.组件统一后缀以:**Custom**结尾   
    - 例如：表单子组件:自动完成 InputAutoCompleteCustom

---

## 子组件会接收公用Props

<API src="./Example/FromCustomTypes/index.tsx" exports='["CustomType"]'></API>
