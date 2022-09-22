import { useState, useEffect } from 'react';
import { Select, Divider, Button } from 'antd';
import type { OptionType } from '@/components/FormCustom/types';
import type { CustomType } from '../types';

declare type InputSelectCustomType = {
  /**
   * select选择数据
   * @default []
   */
  options?: OptionType[] | undefined;
  maxTagCount?: number;
  disabled?: boolean;
} & CustomType;

function SelectMultipleCustom(Props: InputSelectCustomType) {
  const [selectValue, setSelectValue] = useState<any>([]);

  const {
    className,
    readonly,
    onChange,
    value,
    options,
    maxTagCount = 2,
    fieldProps,
    disabled = false,
  } = Props;

  useEffect(() => {
    if (value) {
      setSelectValue(value);
    }
  }, [value]);

  const selectAll = () => {
    if (options) {
      const all = options.map((i: any) => i.value);
      if (typeof onChange === 'function') {
        onChange(all);
      }
    }
  };

  const selectClear = () => {
    if (typeof onChange === 'function') {
      onChange([]);
    }
  };

  const selectOnChange = (values: any) => {
    if (typeof onChange === 'function') {
      onChange(values);
    }
  };

  return (
    <div className={className} style={{ display: 'inline-block' }}>
      {readonly ? (
        `${value && value[0] ? options?.find((i: any) => i.value === value[0])?.label : ''}`
      ) : (
        <Select
          mode="multiple"
          placeholder="请选择"
          allowClear
          value={selectValue}
          maxTagCount={maxTagCount}
          options={options}
          onChange={selectOnChange}
          disabled={disabled}
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider style={{ margin: '8px 0' }} />
              <div
                style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
              >
                <Button type="link" onClick={selectAll}>
                  选择全部
                </Button>
                <Divider type="vertical" />
                <Button type="link" onClick={selectClear}>
                  清空选择
                </Button>
              </div>
            </>
          )}
          {...fieldProps}
        />
      )}
    </div>
  );
}

export default SelectMultipleCustom;
