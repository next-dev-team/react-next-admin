---
title: 内置快捷按钮和弹窗开发说明
order: 1
nav:
  title: 组件
group:
  title: 表格组件
  path: /table-custom
---


## 自定义快捷菜单按钮配置

 -  一.菜单快捷配置是根据一个配置就能快捷配出出固定业务的菜单配置项、例如：颜色、大小、图标。具体配置查看按钮API
    - **1.菜单快捷配置三种位置类型：selection：多选位置 、 header：table顶部位置 、 operation:row记录行位置;**
    - ```js
         // btnConfig.tsx
         /**
          * 配置顶部header快捷菜单按钮
         */
         export const headerTitleConfigArr: BtnConfigTypes = {
            create: {
               text: '新增',
               icon: PlusOutlined,
               type: 'primary',
               style: {
                  background: '#1890ff',
                  borderColor: '#1890ff',
               },
            }
            default: {
               text: '按钮', // 按钮显示名称
               icon: PlusOutlined, // 按钮图标
               type: 'primary', // 按钮类型
               auth: () => true, // 显示权限
               style: {
                  // 按钮显示样式
                  background: '#1890ff',
                  borderColor: '#1890ff',
               },
            },
         };
         /**
         * 配置顶部select选中快捷菜单配置
         */
         export const tableAlertOptionRenderConfigArr: BtnConfigTypes = {
            delete: {
               text: '批量删除',
               type: 'link',
               danger: true,
            },
            default: {
               text: '按钮', // 按钮显示名称
               type: 'link',
               auth: () => true, // 显示权限
            },
         };

         /**
         * 配置row记录快捷菜单配置
         */
         export const operationConfigRenderConfigArr: BtnConfigTypes = {
            edit: {
               text: '编辑',
               type: 'link',
            },
            default: {
               text: '按钮', // 按钮显示名称
               type: 'link',
               auth: () => true, // 显示权限
            },
         };

         ``` 
    - **2.每个位置按钮配置对象default属性必须存在，它也是所有按钮配置的公用配置、如果一个按钮没有配置对应属性则会默认取default**
    - ```js
        
         // table 中配置使用按钮
         headerTitleConfig={{
            export: () => {},
         }}
         // 按钮配置文件
         // 如果有配置export按钮属性，则按钮完成配置为{...export,...default} 
         // 如果没有{...default}
         {
            export: {
               text: '导出',
               icon: ExportOutlined,
               type: 'primary',
               style: {
                  background: '#269884',
                  borderColor: '#269884',
               },
            },
            default: {
               text: '按钮', // 按钮显示名称
               icon: PlusOutlined, // 按钮图标
               type: 'primary', // 按钮类型
               auth: () => true, // 显示权限
               style: {
                  // 按钮显示样式
                  background: '#1890ff',
                  borderColor: '#1890ff',
               },
            },
         }
         ```
  

---


## 按钮配置 API说明

<API src="./Example/TableCustomTypes/index.tsx" exports='["BtnConfigType","ModalPropsType"]'></API>

---

## 自定义开发表格单组件说明

 -  一.自定义内置功能开发必须遵循规则 
    - **1.其本身有独立使用说明文档和运行Demo** 
 -  二.开发中可以使用以下组件、可以单独使用、也可以混合使用：
    - **[ProComponents](https://procomponents.ant.design/components/form)**
    - **[Antd](https://ant.design/components/overview-cn/)**
    - **[html语义化标签]**
    - **[内部业务组件]**
 -  三.自定义弹窗类型必须完成3个属性对应实现方法
    - **1.使用props 属性 modelchildName设置组件的key和id**
    - ```js
         return <FormCustom id={modelchildName} key={modelchildName} {...newConfig} />;
         ``` 
    - **2.但是隐藏后必须调用closeModal() 关闭弹窗**
    - ```js
         {
            afterClose: () => {
            if (closeModal) {
               closeModal();
            }
            },
         }
         ```
    - **3.尽量都使用antd弹窗组件作为外部组件、因为他挂载body下，在关闭回调中有特殊关闭，可查看closeModal方法** 
    - **4.在modalTypeRenderConfig.tsx导出内置组件，并且types.d.ts 定义modalType内置功能类型，类型必须和导出函数命名相同**
      - ```js
         // modalTypeRenderConfig.tsx
         import Form from './FormModal';
         const components = {
            Form,
            ...
         };
         // types.d.ts
         export declare type modalType = 'Form';
         ```
    - 5.组件命名规则**Modal结尾**
      - 例如：内置表单弹窗 FormModal
 -  四.自定义函数方法
    - **1.在modalTypeRenderConfig.tsx直接定义函数方法**
    - ```js
        const Download = () => {
         console.log('====================================');
         console.log(1);
         console.log('====================================');
        };
        const components = {
            Download,
            ...
         };
      ``` 
---


## 自定义单元格快捷样式
 -  一.businessStyleConfig.tsx 文件下面存放所有表格单元格特殊显示形式
 -  二.自定义方法
    - **1.businessStyleConfig.tsx直接定义函数方法**
    - ```js
        // businessStyleConfig.tsx
         const tagView = ()=>{}

         /**
          * 标签方法对应表
         */
         const BusinessStyleArr: any = {
             tag: tagView,
         };
         // 定义类型 types.d.ts
         export declare type businessStyleType = {
            type?: 'tag';
            ...
         };
         export declare type modalType = 'Form';
      ``` 
---

## 组件Props API说明

<API src="./Example/TableCustomTypes/index.tsx" exports='["ModalRenderPropsType","ModalType"]'></API>

---
