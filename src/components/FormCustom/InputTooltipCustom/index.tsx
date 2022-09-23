import { Input, Tooltip } from 'antd';
import { message } from 'antd';
import type { CustomType } from '../types';

declare type InputTooltipCustomType = {
  /**
   * 按钮点击后触发事件
   * @param value
   */
  onClick?: (value: any) => any | undefined;

  /**
   * tooltip 显示文字
   * @default Need Help?
   */
  tooltipText?: string | undefined;
  /**
   * tooltip 提示文字
   * @default 我是提示
   */
  tooltipTitle?: string | undefined;
} & CustomType;

function InputTooltipCustom(Props: InputTooltipCustomType) {
  const [inputValue, setInputValue] = useState<any>(null);
  const {
    placeholder,
    className,
    readonly,
    onClick,
    tooltipText,
    tooltipTitle,
    onChange,
    value,
    fieldProps,
  } = Props;

  useEffect(() => {
    /**
     * 如果父级传有默认值则赋值默认值 或者默认值变换
     */
    setInputValue(value);
  }, [value]);

  /**
   * input切换值变换。如果父级传入监听方法调用
   * @param e
   */
  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
    if (onChange && typeof onChange === 'function') {
      onChange(e.target.value);
    } else {
      message.info(`切换值${e.target.value}`);
    }
  };

  return (
    <div className={className} style={{ display: 'inline-block' }}>
      {readonly ? (
        value
      ) : (
        <>
          <Input
            {...fieldProps}
            placeholder={placeholder}
            value={inputValue}
            onChange={onInputChange}
          />
          <Tooltip title={tooltipTitle || '我是提示'}>
            <a onClick={onClick || undefined} style={{ margin: '0 8px' }}>
              {tooltipText || 'Need Help?'}
            </a>
          </Tooltip>
        </>
      )}
    </div>
  );
}

export default InputTooltipCustom;
