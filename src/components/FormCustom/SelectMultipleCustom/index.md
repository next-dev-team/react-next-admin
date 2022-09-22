---
title: 子组件-Select多选
nav:
  title: 组件
group:
  title: 表单组件
---

# 说明

> 1.Select多选,带全部选择和清空全部



```jsx
/**
 * title: Select多选,
 */
import React from 'react';
import { Button } from 'antd';
import { SelectMultipleCustom } from '@/components/FormCustom/components';
import { useState} from 'react';



function SelectMultipleCustomDemo() {
  const [selectValue, setSelectValue] = useState([]);
  
  const onChange = (values)=>{
    setSelectValue(values)
  }
  
  const options=[
      {
        label: '1',
        value: 1
        },
        {
        label: '2',
        value: 2
        }
    ];
  const fieldProps = {
    style:{
      width:'200px'
    }
  }
  return (
    <>
      <SelectMultipleCustom options={options} value={selectValue} onChange={onChange} fieldProps={fieldProps} />
    </>
  );
}
export default SelectMultipleCustomDemo;
```


<API ></API>

