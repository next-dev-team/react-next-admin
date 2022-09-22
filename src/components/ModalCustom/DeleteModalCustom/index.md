---
title: 弹窗删除
nav:
  title: 组件
group:
  title: 弹窗组件
---


```jsx

import React, { useState } from 'react';
import DeleteModalCustom from '@/components/ModalCustom/DeleteModalCustom';
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
      <Button  danger onClick={showModal}>
        删除弹窗
      </Button>
      <DeleteModalCustom visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} />
    </>
  );
}
export default Demo1;

```

<API ></API>
