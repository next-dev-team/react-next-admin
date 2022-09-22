---
title: 子组件-InputSelect
nav:
  title: 组件
group:
  title: 表单组件
---

# 说明

> 1. InputSelect

```jsx
/**
 * title: InputSelect
 */
import React from 'react';
import { InputSelectCustom } from '@/components/FormCustom/components';

function InputSelectCustomDemo() {
  const options = [
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

  return <InputSelectCustom options={options} fieldProps={fieldProps} />;
}


export default InputSelectCustomDemo;

```

<API ></API>

