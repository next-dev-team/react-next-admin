---
title: 子组件-上传文件
nav:
  title: 组件
group:
  title: 表单组件
---

# 说明

> 1. 剪辑插架[antd-img-crop](https://github.com/nanxiaobei/antd-img-crop/blob/main/README.zh-CN.md)
> 1. 上传插架[upload](https://ant.design/components/upload-cn/)



```jsx
/**
 * title: 上传头像加剪辑
 */
import React from 'react';
import { Button } from 'antd';
import { UploadCustom } from '@/components/FormCustom/components';

function UploadCustomDemo() {
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
  return <UploadCustom  {...fieldProps} />;
}
export default UploadCustomDemo;
```



```jsx
/**
 * title: 上传文件
 */
import React from 'react';
import { Button } from 'antd';
import { UploadCustom } from '@/components/FormCustom/components';

function UploadCustomDemo1() {
  const fieldProps = {
     maxCount: 3,
  }
  return <UploadCustom  {...fieldProps} />;
}
export default UploadCustomDemo1;
```

```jsx
/**
 * title: 上传图片
 */
import React from 'react';
import { Button } from 'antd';
import { UploadCustom } from '@/components/FormCustom/components';

function UploadCustomDemo2() {
  const fieldProps = {
     maxCount: 3,
    format: ["jpg", "jpeg", "png"],
    listType: "picture",
  }
  return <UploadCustom  {...fieldProps} />;
}
export default UploadCustomDemo2;
```

<API ></API>

