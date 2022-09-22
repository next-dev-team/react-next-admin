---
title: 子组件-地图
nav:
  title: 组件
group:
  title: 表单组件
---

# 说明

> 1. 地图组件[AmapModalCustom](/~docs/components/amap-custom)



```jsx
/**
 * title: 表单地图子组件
 */
import React from 'react';
import { Button } from 'antd';
import AmapFormCustom from '@/components/FormCustom/AmapFormCustom';
import { message } from 'antd';


function AmapFormCustomDemo() {

  const fieldProps = {
    onChange:(value)=>{
      message.success(JSON.stringify(value));
    }
  }
  return (
    <>
        <AmapFormCustom  {...fieldProps} />
    </>
  );
}
export default AmapFormCustomDemo;
```



<API></API>

