---
title: 布局规范
nav:
  title: 规范
---

### 业务编写一般都使用已经编写组件优先，在编写中会遇到很多文字性的信息展示，和一些上下布局，间隔，除ui规定外，统一使用以下布局组件

### 1.分块展示

[ProCard 高级卡片](https://procomponents.ant.design/components/card)

```jsx
import React from 'react';
import {ProCard} from '@ant-design/pro-components';

export default () => {
  return (
    <div style={{background:'#eee',padding:"20px"}}>
      <ProCard style={{ marginTop: 8 }} gutter={8} title="24栅格">
        <ProCard colSpan={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }} layout="center" bordered>
          Col
        </ProCard>
        <ProCard colSpan={{ xs: 20, sm: 16, md: 12, lg: 8, xl: 4 }} layout="center" bordered>
          Col
        </ProCard>
        <ProCard colSpan={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }} layout="center" bordered>
          Col
        </ProCard>
      </ProCard>
      <ProCard style={{ marginTop: 8 }} gutter={8} title="指定宽度px">
        <ProCard
          colSpan={{
            xs: '50px',
            sm: '100px',
            md: '200px',
            lg: '300px',
            xl: '400px',
          }}
          layout="center"
          bordered
        >
          Col
        </ProCard>
        <ProCard layout="center" bordered>
          Auto
        </ProCard>
      </ProCard>

      <ProCard style={{ marginTop: 8 }} gutter={8} title="指定宽度百分比">
        <ProCard layout="center" bordered>
          Auto
        </ProCard>
        <ProCard
          layout="center"
          colSpan={{
            xs: '10%',
            sm: '20%',
            md: '30%',
            lg: '40%',
            xl: '50%',
          }}
          bordered
        >
          Col - 百分比
        </ProCard>
      </ProCard>
    </div>
  );
};

```

### 2.排版

[Typography排版](https://ant.design/components/typography-cn/)

```jsx

import React from 'react';
import { Typography, Divider } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const TypographyFn =  () => {
  return (
    <Typography>
      <Title>Introduction</Title>
      <Paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design language for background
        applications, is refined by Ant UED Team, which aims to <Text strong>
          uniform the user interface specs for internal background projects, lower the unnecessary
          cost of design differences and implementation and liberate the resources of design and
          front-end development</Text>.
      </Paragraph>
      <Title level={2}>Guidelines and Resources</Title>
      <Paragraph>
        We supply a series of design principles, practical patterns and high quality design resources
        (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
        prototypes beautifully and efficiently.
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Link href="/docs/spec/proximity">Principles</Link>
          </li>
          <li>
            <Link href="/docs/spec/overview">Patterns</Link>
          </li>
          <li>
            <Link href="/docs/resources">Resource Download</Link>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        Press <Text keyboard>Esc</Text> to exit...
      </Paragraph>

      <Divider />

    </Typography>
  );
};

export default TypographyFn;
```

### 2.间隔布局

[Space间距](https://ant.design/components/space-cn/)

```jsx
import React from 'react';
import { Button, Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const SpaceFn =  () => {
  return (
    <Space>
      Space
      <Button type="primary">Button</Button>
      <Upload>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
      <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
        <Button>Confirm</Button>
      </Popconfirm>

      <Space direction="vertical">
        Space
        <Button type="primary">Button</Button>
        <Upload>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
          <Button>Confirm</Button>
        </Popconfirm>
      </Space>
    </Space>
  );
};

export default SpaceFn;
```