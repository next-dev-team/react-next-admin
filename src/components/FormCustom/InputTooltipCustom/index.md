---
title: 子组件-InputTooltip
nav:
  title: 组件
group:
  title: 表单组件
---

# 说明

> 1. InputTooltip

```jsx
import React from 'react';
import { InputTooltipCustom } from '@/components/FormCustom/components';

function InputTooltipCustomDemo() {
  const fieldProps = {
  style:{
    width:'200px'
    }
  }
  return <InputTooltipCustom tooltipText="提示" tooltipTitle="提示文字" fieldProps={fieldProps}  />;
}
export default InputTooltipCustomDemo;
```

<API ></API>

