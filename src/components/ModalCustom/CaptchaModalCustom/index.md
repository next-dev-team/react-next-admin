---
title: 弹窗图形验证码
nav:
  title: 组件
group:
  title: 弹窗组件
---


```jsx

import React, { useState } from 'react';
import CaptchaModalCustom from '@/components/ModalCustom/CaptchaModalCustom';
import { Button } from 'antd';
import { waitTime } from '@/utils';

function CaptchaModalCustomDemo() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async (data) => {
    try {
      console.log(data);
       await waitTime(2000);
      setIsModalVisible(false);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>验证码</Button>
      <CaptchaModalCustom
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  );
}
export default CaptchaModalCustomDemo;

```

<API ></API>
