import { Cascader } from "antd";
import type { CustomType } from "../types";

declare type ProFormCaptchaCustomType = CustomType;

function CascaderCustom(Props: ProFormCaptchaCustomType) {
  const { className, customMode, readonly, value, onChange, ...rest } = Props;
  return (
    <div className={`${className} ${customMode}`}>
      {readonly ? (
        value
      ) : (
        <Cascader value={value} onChange={onChange} {...rest} />
      )}
    </div>
  );
}

export default CascaderCustom;
