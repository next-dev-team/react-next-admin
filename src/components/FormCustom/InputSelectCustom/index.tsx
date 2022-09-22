import { useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import { message } from 'antd';
import type { OptionType } from '@/components/FormCustom/types';
import type { CustomType } from '../types';

declare type InputSelectCustomType = {
  /**
   * select选择数据
   * @default []
   */
  options?: OptionType[] | undefined;
} & CustomType;

function InputSelectCustom(Props: InputSelectCustomType) {
  const [inputValue, setInputValue] = useState<any>(null);
  const [selectValue, setSelectValue] = useState<any>(null);

  const { className, readonly, onChange, value, options, fieldProps } = Props;

  useEffect(() => {
    /**
     * 如果父级传有默认值则赋值默认值 或者默认值变换
     */
    if (value && value[1]) {
      setInputValue(value[1]);
    }
    if (value && value[0]) {
      setSelectValue(value[0]);
    }
  }, [value]);

  /**
   * input切换值变换。如果父级传入监听方法调用
   * @param e
   */
  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
    if (onChange && typeof onChange === 'function') {
      onChange([selectValue, e.target.value]);
    } else {
      message.info(`Input切换值${e.target.value}`);
    }
  };
  /**
   * input切换值变换。如果父级传入监听方法调用
   * @param paramValue
   */
  const onSelectChange = (paramValue: any) => {
    setSelectValue(paramValue);
    if (onChange && typeof onChange === 'function') {
      onChange([paramValue, inputValue]);
    } else {
      message.info(`Select切换值${paramValue}`);
    }
  };

  return (
    <div className={className} style={{ display: 'inline-block' }}>
      {readonly ? (
        `${value && value[0] ? options?.find((i: any) => i.value === value[0])?.label : ''}-${
          value && value[1] ? value[1] : ''
        }`
      ) : (
        <Input.Group compact>
          <Form.Item noStyle>
            <Select
              style={{ width: '100px' }}
              placeholder="请输入"
              onChange={onSelectChange}
              // @ts-ignore
              options={options}
            />
          </Form.Item>
          <Form.Item noStyle>
            <Input {...fieldProps} value={inputValue} onChange={onInputChange} />
          </Form.Item>
        </Input.Group>
      )}
    </div>
  );
}

export default InputSelectCustom;
