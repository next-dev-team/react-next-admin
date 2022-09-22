---
title: 弹窗确认框
nav:
  title: 组件
group:
  title: 弹窗组件
---


```jsx

import React, { useState } from 'react';
import ConfirmModalCustom from '@/components/ModalCustom/ConfirmModalCustom';
import { Button } from 'antd';
import { waitTime } from '@/utils';

function Demo1() {
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

  return (
    <>
      <Button onClick={showModal}>
        确认弹窗
      </Button>
      <ConfirmModalCustom visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} />
    </>
  );
}
export default Demo1;

```

<API ></API>
