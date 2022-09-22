---
title: 弹窗预览HTML
nav:
  title: 组件
group:
  title: 弹窗组件
---


```jsx

/**
 * title: 预览富文本
 */
import React, { useState } from 'react';
import PreviewHtmlModalCustom from '@/components/ModalCustom/PreviewHtmlModalCustom';
import { Button } from 'antd';

function PreviewHtmlModalCustomDemo() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={() => setIsModalVisible(true)}>
        预览
      </Button>
      <PreviewHtmlModalCustom
        className="asdasdasd"
        visible={isModalVisible}
        title="大神大神大d"
        date="2021-10-14 15:19:01"
        desc={()=><p>哈哈哈哈哈哈哈哈哈哈哈</p>}
        content='<p>大神大神大d大神大神大d大神大神大d大神大神大d大神大神大d</p><p></p><p></p><div class="media-wrap image-wrap"><img src="http://www.adminapi.com/uploads/api/files/2021-10-14/ab1f561f86378b43e264e1860f3afc44/WechatIMG20988.jpeg"/></div><p>adasdasdasdasdasd</p><p>大神大神大是啊实打实的</p><ol><li>阿萨德啊实打实大声道</li><li>阿萨德1啊实打实的</li><li>11212sssssasdasdasda</li></ol><p></p>'
        onCancel={() => setIsModalVisible(false)}
      />
    </>
  );
}
export default PreviewHtmlModalCustomDemo;

```


```jsx

/**
 * title: 预览外部链接
 */
import React, { useState } from 'react';
import PreviewHtmlModalCustom from '@/components/ModalCustom/PreviewHtmlModalCustom';
import { Button } from 'antd';

function PreviewHtmlModalCustomDemo1() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={() => setIsModalVisible(true)}>
        预览
      </Button>
      <PreviewHtmlModalCustom
        className="asdasdasd"
        visible={isModalVisible}
        link="https://www.w3school.com.cn/tags/tag_iframe.asp"
        onCancel={() => setIsModalVisible(false)}
      />
    </>
  );
}
export default PreviewHtmlModalCustomDemo1;

```


<API ></API>
