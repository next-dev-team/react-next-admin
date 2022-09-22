---
title: 内置功能-表单
order: 2
nav:
  title: 组件
group:
  title: 表格组件
---


### 被调用的组件具体参数说明参考：[FormCustom](/~docs/components/form-custom)

 - 一.配合快捷菜单按钮使用内置功能
   - 1. 方便快捷的配置出增、改业务功能逻辑，值需要简单的配置就可以完成、一般不能单独使用，必须配合表格快捷菜单。
   - 2. 点击显示和请求接口都有做防抖处理、安全放心。如果提交事件自定义处理，请使用防抖函数配合使用.
     -  ```js
        import { proTableAddRow } from '@/services';
        import { requestDebounce } from '@/utils';
        const debounceProTableAddRow: any = requestDebounce(proTableAddRow, 500);
         ```
 - 二. 弹窗类型:
   - ***modalType="Form"***

## 完整使用例子
<code src="@/components/TableCustom/FormModal/Example/demo1.tsx" 
      title="完整使用例子"
      desc="配置初始化请求例子、自定义表单配置、自定义弹窗标题等" 
    />

---

## 组件Props API说明

<API src="../Example/TableCustomTypes/index.tsx" exports='["ModalPropsType","ModalPropsConfigType","SubmitOnDoneType"]'></API>

---