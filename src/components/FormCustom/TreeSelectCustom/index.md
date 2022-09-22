---
title: 子组件-TreeSelect树选择
nav:
  title: 组件
group:
  title: 表单组件
---

# 说明

> 1. TreeSelect树选择


```jsx
import React from 'react';
import TreeSelectCustom from '@/components/FormCustom/TreeSelectCustom';
import { MailTwoTone } from '@ant-design/icons';
import { message } from 'antd';

function TreeSelectCustomDemo() {
  const onChange = (value)=>{
   console.log(value);
  }
  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-1',
        },
        {
          title: 'Child Node2',
          value: '0-0-2',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
    },
  ];
  const fieldProps = {
    onChange,
    fieldProps: {
      style:{
       width: '100%' 
      },
      placeholder:"Please select",
      dropdownStyle:{ 
        maxHeight: 400, 
        overflow: 'auto' 
      },
      treeData,
      treeDefaultExpandAll:true,
    },
  };
  return <TreeSelectCustom {...fieldProps} />;
}
export default TreeSelectCustomDemo;

```
<API ></API>

