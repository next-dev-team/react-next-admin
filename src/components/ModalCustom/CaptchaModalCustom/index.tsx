import type { ModalProps } from 'antd/lib/modal';
import ModalCustom from '@/components/ModalCustom';
import { Space, Image, Input } from 'antd';
import { useState, useEffect } from 'react';
import { captcha } from '@/services';
import { uuid } from '@/utils';

const codeToken = uuid();

declare type CaptchaModalCustomType = {
  /** 点击确定回调 */
  onOk?: (data: any, e: React.MouseEvent<HTMLElement>) => void;
} & ModalProps;

function CaptchaModalCustom(Props: CaptchaModalCustomType) {
  const { onOk, onCancel, visible, ...rest } = Props;
  const [url, setUrl] = useState<any>(null);
  const [input, setInput] = useState<any>(null);

  const handleOk = async (e: any) => {
    if (onOk && typeof onOk === 'function') {
      return await onOk({ code_token: codeToken, code: input }, e);
    }
  };

  const handleCancel = (e: any) => {
    if (onCancel && typeof onCancel === 'function') {
      onCancel(e);
    }
  };

  const loadUrl = () => {
    captcha({ code_token: codeToken }).then((res: any) => {
      setUrl(res.data.src);
    });
  };

  const onInput = (e: any) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (visible) {
      loadUrl();
    }
  }, [visible]);

  if (!url) {
    return null;
  }

  return (
    <>
      <ModalCustom
        {...rest}
        title="图形验证码"
        destroyOnClose={true}
        maskClosable={false}
        onOk={handleOk}
        onCancel={handleCancel}
        width="400px"
        visible={visible}
      >
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Space direction="horizontal" align="center">
            <Image style={{ cursor: 'pointer' }} src={url} preview={false} onClick={loadUrl} />
            <Input
              maxLength={5}
              style={{ width: 100, height: 40 }}
              onChange={onInput}
              value={input}
            />
          </Space>
        </div>
      </ModalCustom>
    </>
  );
}

export default CaptchaModalCustom;
