import { ProFormCaptcha } from "@ant-design/pro-form";
import type { CustomType } from "../types";

declare type ProFormCaptchaCustomType = {
  /**
   * 点击获取验证码的事件，如果配置了 phoneName 会自动注入
   */
  onGetCaptcha: any;
} & CustomType;

function ProFormCaptchaCustom(Props: ProFormCaptchaCustomType) {
  const { className, fieldProps, ...rest } = Props;

  return (
    <div className={className}>
      <ProFormCaptcha {...rest} fieldProps={fieldProps} />
    </div>
  );
}

export default ProFormCaptchaCustom;
