---
title: 子组件-Input自动完成
nav:
  title: 组件
group:
  title: 表单组件
---

# 说明

> 1. Input自动完成



```jsx
/**
 * title: Input自动完成
 */
import React from 'react';
import { Button } from 'antd';
import { InputAutoCompleteCustom } from '@/components/FormCustom/components';



function InputAutoCompleteCustomDemo() {
  const options=[
      {
        label: '1',
        value: 1
        },
        {
        label: '2',
        value: 2
        }
    ];
  const fieldProps = {
    style:{
      width:'200px'
    }
  }
  return (
    <>
      <InputAutoCompleteCustom options={options} fieldProps={fieldProps} />
    </>
  );
}
export default InputAutoCompleteCustomDemo;
```


<API ></API>

