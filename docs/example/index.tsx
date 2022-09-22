/**
 * title: 标题内容
 * desc: 我是简介，我可以用 `Markdown` 来编写
 */

// @ts-ignore
import React, { useState, useContext } from 'react';
import { Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface AddButtonCustomType {
  /**
   * 按钮类型
   * size2 替代
   * @default dashed
   */
  bntType?: 'link' | 'text' | 'ghost' | 'dashed' | 'default' | 'primary' | undefined;
  /**
   * 按钮点击后触发事件
   * @param value
   */
  onClick: (value: any) => any;

  /**
   * Item显示的标签
   * @param undefined
   * @default Add
   */
  bntText?: string | undefined;
  /**
   * antd 按钮props 参数
   * 和antd 参数一样
   */
  fieldProps?: {} | undefined;
}

function AddButtonCustom(Props: AddButtonCustomType) {
  const { bntType, onClick, fieldProps, bntText } = Props;

  return (
    <>
      <Button
        type={bntType || 'dashed'}
        onClick={
          onClick ||
          function () {
            message.info('点击按钮');
          }
        }
        icon={<PlusOutlined />}
        {...fieldProps}
      >
        {bntText || 'Add'}
      </Button>
    </>
  );
}

export default AddButtonCustom;
