---
title: 全局地图组件
nav:
  title: 组件
group:
  title: 全局地图组件
---


# 说明

> 1. [react-amap](https://elemefe.github.io/react-amap/articles/start)



```jsx
/**
 * title: 基础使用显示地图 显示定位
 */
import React from 'react';
import AmapCustom from '@/components/AmapCustom';

function AmapCustomDemo1() {
  
  const markers = [
    {
     latitude: 30.665368,
     longitude: 104.060585
    }
  ]
  return (
    <>
      <AmapCustom  markers={markers}/>
    </>
  );
}
export default AmapCustomDemo1;
```

```jsx
/**
 * title: 地图开启坐标拾取功能
 */
import React from 'react';
import AmapCustom from '@/components/AmapCustom';

function AmapCustomDemo() {
  
 
  const value = {
    latitude: 30.665368,
    longitude: 104.060585,
  };
  const onChange = (cvalue) => {
    console.log(cvalue);
  };

  return (
    <>
      <AmapCustom  selectMarker={true} value={value} onChange={onChange} />
    </>
  );
}
export default AmapCustomDemo;
```



<API></API>