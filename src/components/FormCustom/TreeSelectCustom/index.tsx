import { TreeSelect } from 'antd';
import type { CustomType } from '../types';

declare type ProFormCaptchaCustomType = CustomType;

function TreeSelectCustom(Props: ProFormCaptchaCustomType) {
  const { className, customMode, readonly, fieldProps, value, onChange, ...rest } = Props;
  const treeSelectProps: any = { ...fieldProps, ...rest };
  return (
    <div className={`${className} ${customMode}`}>
      {readonly ? value : <TreeSelect value={value} onChange={onChange} {...treeSelectProps} />}
    </div>
  );
}

export default TreeSelectCustom;
