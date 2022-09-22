---
title: 全局弹窗
nav:
  title: 组件
group:
  title: 弹窗组件
  path: /modal-custom
  order: 11
---


# 和antd一样
- **[antd-modal](https://ant.design/components/modal-cn/)**

---

```jsx

import React, { useState } from 'react';
import ModalCustom from '@/components/ModalCustom';
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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <ModalCustom title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ModalCustom>
    </>
  );
}
export default Demo1;

```

<API ></API>
