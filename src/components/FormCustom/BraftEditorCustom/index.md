---
title: 子组件-富文本编辑器
nav:
  title: 组件
group:
  title: 表单组件
---

# 说明

> 1. 插架[BraftEditor](https://braft.margox.cn/demos/antd-form)



```jsx
/**
 * title: 富文本
 */
import React from 'react';
import { Button } from 'antd';
import { BraftEditorCustom } from '@/components/FormCustom/components';


const fieldProps = {
  format: ["jpg", "jpeg", "png"],
  imgCrop: true,
  imgCropFieldProps:{
    aspect:2
  },
  listType: "picture-card",
  maxCount: 1,
  size: 2000
}
export default () => <BraftEditorCustom  {...fieldProps} />;
```



<API></API>

