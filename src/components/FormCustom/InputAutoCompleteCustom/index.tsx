import { AutoComplete } from 'antd';
import { message } from 'antd';
import type { OptionType } from '@/components/FormCustom/types';
import type { CustomType } from '../types';

declare type InputAutoCompleteCustomType = {
  /**
   * 从远程请求网络数据，一般用于选择类组件
   */
  request?: (params: any, props: any) => Promise<{ label: any; value: any }[]>;
  /**
   * 额外传递给 request 的参数，组件不做处理,但是变化会引起request 重新请求数据
   */
  params?: Record<string, any>;
  /**
   * select选择数据
   * @default []
   */
  options?: OptionType[];
  /**
   * 样式
   * @default []
   */
  style?: any;
} & CustomType;

function InputAutoCompleteCustom(Props: InputAutoCompleteCustomType) {
  const [inputValue, setInputValue] = useState<any>(null);
  const [nowOptions, setNowOptions] = useState<any>(null);

  const {
    className,
    readonly,
    request,
    params,
    onChange,
    value,
    options,
    fieldProps,
  } = Props;

  useEffect(() => {
    if (request) {
      const getOptions = async () => {
        const data = await request(params, Props);
        setNowOptions(data);
      };
      getOptions();
    } else {
      if (options) {
        setNowOptions(options);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    /**
     * 如果父级传有默认值则赋值默认值 或者默认值变换
     */
    setInputValue(value);
  }, [value]);

  /**
   * input切换值变换。如果父级传入监听方法调用
   * @param value
   */
  const onInputChange = (avalue: any) => {
    setInputValue(avalue);
    if (onChange && typeof onChange === 'function') {
      onChange(avalue);
    } else {
      message.info(`Input切换值${avalue}`);
    }
  };

  return (
    <div className={className} style={{ display: 'inline-block' }}>
      {readonly ? (
        value
      ) : (
        <AutoComplete
          value={inputValue}
          placeholder="请输入"
          {...fieldProps}
          options={nowOptions}
          // onSelect={onSelect}
          // onSearch={onSearch}
          onChange={onInputChange}
        />
      )}
    </div>
  );
}

export default InputAutoCompleteCustom;
