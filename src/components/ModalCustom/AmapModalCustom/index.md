---
title: 弹窗地图
nav:
  title: 组件
group:
  title: 弹窗组件
---


> 1. 地图组件[AmapModalCustom](/~docs/components/amap-custom)

```jsx

import React, { useState } from 'react';
import AmapModalCustom from '@/components/ModalCustom/AmapModalCustom';
import { Button } from 'antd';
import { waitTime } from '@/utils';

function AmapModalCustomDemo() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    await waitTime(2000);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const amapProps = {
    value:{
      latitude: 30.665368,
      longitude: 104.060585,
    },
    onChange:(cvalue) => {
      console.log(cvalue);
    }
  }
  return (
    <>
      <Button  onClick={showModal}>
        显示地图
      </Button>
      <AmapModalCustom amapProps={amapProps} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} />
    </>
  );
}
export default AmapModalCustomDemo;

```

<API ></API>
