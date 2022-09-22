---
title: 弹窗导入
nav:
  title: 组件
group:
  title: 弹窗组件
---


```jsx

import React, { useState } from 'react';
import ImportModalCustom from '@/components/ModalCustom/ImportModalCustom';
import { Button } from 'antd';
import { waitTime } from '@/utils';

function ImportModalCustomDemo() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
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
      <Button onClick={showModal}>导入数据</Button>
      <ImportModalCustom
        columns={
          [
            {
              title: '单选',
              dataIndex: 'type',
              valueType: 'radio',
              fieldProps: {
                options: [
                  {
                    value: 1,
                    label: '选择1',
                  },
                  {
                    value: 2,
                    label: '选择2',
                  },
                ],
              },
              formItemProps: {
                rules: [{ required: true }],
              }
            },
          ]
        }
        visible={isModalVisible}
        templateUrl="wwwww"
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  );
}
export default ImportModalCustomDemo;

```

<API ></API>
