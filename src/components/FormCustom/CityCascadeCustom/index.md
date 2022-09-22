---
title: 子组件-地区级联选择
nav:
  title: 组件
group:
  title: 表单组件
---



```jsx
/**
 * title: 地区级联选择
 */
import React from 'react';
import { Button } from 'antd';
import CityCascadeCustom from '@/components/FormCustom/CityCascadeCustom';



function CityCascadeCustomDemo() {
  const citys=[
      {
        city: "成都",
        id: 860028,
        province: "四川"
      },
      {
        city: "绵阳",
        id: 860029,
        province: "四川"
      },
    ];

  return (
    <>
      <CityCascadeCustom citys={citys} select={['province', 'city']} />
    </>
  );
}
export default CityCascadeCustomDemo;
```


<API ></API>

