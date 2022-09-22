import BraftEditor from 'braft-editor';
import { useState, useEffect, useRef } from 'react';
import styles from './index.less';
import { message } from 'antd';
import { uploadFile } from '@/services';
import type { CustomType } from '../types';

declare type BraftEditorCustomType = {
  /**
   * 自定义请求地址api方法 默认使用公共用上传方法 uploadFile
   */
  request?: any;
  /**
   * 限制上传文件的后缀名
   */
  format?: [];

  /**
   * 限制上传图片的大小 单位kb
   */
  size?: number;
  /**
   * 透传给BraftEditor参插件的属性
   */
  braftEditorProps?: any;
} & CustomType;

function BraftEditorCustom(Props: BraftEditorCustomType) {
  const {
    request,
    className,
    format = [],
    size = 2000,
    readonly,
    placeholder,
    onChange,
    value,
    braftEditorProps = {},
  } = Props;
  const [inputValue, setInputValue] = useState<any>(undefined);
  const [defaultValue, setDefaultValue] = useState<any>(undefined);
  const initialization = useRef<any>(false);

  useEffect(() => {
    /**
     * 如果父级传有默认值则赋值默认值 或者默认值变换
     */
    setDefaultValue(BraftEditor.createEditorState(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * input切换值变换。如果父级传入监听方法调用
   * @param value
   */
  const onInputChange = (evalue: any) => {
    let html = undefined;
    if (evalue) {
      html = evalue.toHTML();
    }
    setInputValue(html);
    if (onChange && typeof onChange === 'function') {
      if (initialization.current) {
        if (html === '<p></p>') {
          html = '';
        }
        onChange(html);
      }
      if (!initialization.current) {
        // 第一次初始化不复制 会触发验证
        initialization.current = true;
      }
    }
  };

  const buildPreviewHtml = () => {
    return `
      <!Doctype html>
      <html>
        <head>
          <title>预览</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
            .container a{
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">${inputValue}</div>
        </body>
      </html>
    `;
  };

  const preview = () => {
    // @ts-ignore
    if (window.previewWindow) {
      // @ts-ignore
      window.previewWindow.close();
    }
    // @ts-ignore
    window.previewWindow = window.open();
    // @ts-ignore
    window.previewWindow.document.write(buildPreviewHtml());
    // @ts-ignore
    window.previewWindow.document.close();
  };

  const extendControls = [
    {
      key: 'custom-button',
      type: 'button',
      text: '预览',
      onClick: preview,
    },
  ];

  const myValidateFn = (file: any) => {
    if (format && format.length > 0) {
      let formatArr: any = [...format];
      formatArr = formatArr.map((i: string) => i.toLowerCase());
      const nameArr = file.name.split('.');
      const name = nameArr[nameArr.length - 1].toLowerCase();
      if (!formatArr.includes(name)) {
        message.error(`需要上传文件格式：${formatArr.join('、')} `);
        return false;
      }
    }
    if (size && size > 0) {
      if (file.size / 1000 > size) {
        message.error(`需要上传文件大小：${size}kb `);
        return false;
      }
    }
    return true;
  };

  const uploadFn = async (param: any) => {
    const formData = new FormData();
    formData.append('file', param.file);

    try {
      let res: any = {};
      if (request) {
        res = await request(formData);
      } else {
        res = await uploadFile(formData);
      }

      param.success({
        url: res.data.src,
      });
    } catch (e) {
      param.error(e);
    }
  };
  return (
    <div className={className}>
      {readonly ? (
        // 给用于展示HTML内容的容器加上特定的className
        <div className="braft-output-content" dangerouslySetInnerHTML={{ __html: value }} />
      ) : (
        <BraftEditor
          className={styles.braftEditorCustom}
          value={inputValue}
          onChange={onInputChange}
          placeholder={placeholder}
          extendControls={extendControls}
          defaultValue={defaultValue}
          media={{
            validateFn: myValidateFn,
            accepts: {
              image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
            },
            uploadFn: uploadFn,
          }}
          {...braftEditorProps}
        />
      )}
    </div>
  );
}

export default BraftEditorCustom;
