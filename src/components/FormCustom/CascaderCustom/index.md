---
title: 子组件-Cascader级联选择
nav:
  title: 组件
group:
  title: 表单组件
---

# 说明

> 1. Cascader级联选择


```jsx
import React from 'react';
import CascaderCustom from '@/components/FormCustom/CascaderCustom';
import { MailTwoTone } from '@ant-design/icons';
import { message } from 'antd';

function CascaderCustomDemo() {
  const onChange = (value)=>{
   console.log(value);
  }
  const options = [
    {
      label: 'Node1',
      value: '0-0',
      children: [
        {
          label: 'Child Node1',
          value: '0-0-1',
        },
        {
          label: 'Child Node2',
          value: '0-0-2',
        },
      ],
    },
    {
      label: 'Node2',
      value: '0-1',
    },
  ];
  const fieldProps = {
    onChange,
    options
  };
  return <CascaderCustom {...fieldProps} />;
}
export default CascaderCustomDemo;

```
<API ></API>

