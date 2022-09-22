---
title: 内置功能-下载按钮
order: 3
nav:
  title: 组件
group:
  title: 表格组件
---


 - 一.配合快捷菜单按钮使用内置功能
   - 1. 方便快捷的配置出增、改业务功能逻辑，值需要简单的配置就可以完成、一般不能单独使用，必须配合表格快捷菜单。
 - 二. 按钮类型:
   - ***modalType="Download"***
 - 三.submitRequest 如果是string 则创建一个a标签 ，否则直接请求二进制数据，前端做下载

## 完整使用例子
<code src="@/components/TableCustom/Download/Example/demo1.tsx" 
      title="完整使用例子"
      desc="下载" 
    />

---

## 组件Props API说明

<API src="../Example/TableCustomTypes/index.tsx" exports='["ModalPropsType","ModalPropsConfigType"]'></API>

---