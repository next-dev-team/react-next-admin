import { useState, useEffect } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { uploadFile } from '@/services';
import ImgCrop from 'antd-img-crop';
import type { CustomType } from '../types';
import styles from './index.less';

declare type UploadCustomType = {
  /**
   * 最大选择数量
   */
  maxCount?: number;
  /**
   * 请求地址api方法
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
   * 按钮显示的文字
   * @default 上传文件
   */
  buttonName?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card
   * @default text
   */
  listType?: string;

  /**
   * 是否开启图片裁剪
   * @default false
   */
  imgCrop?: boolean;

  /**
   * 图片裁剪FieldProps
   * @default false
   */
  imgCropFieldProps?: any;

  /**
   * 上传按钮的Props 和antd一样
   */
  buttonProps?: any;

  /**
   * 文件夹前缀
   */
  path?: string;
  /**
   * 是否返回blob数据
   */
  blob?: boolean;
} & CustomType;

function UploadCustom(Props: UploadCustomType) {
  const {
    disabled = false,
    buttonName,
    maxCount = 1,
    request,
    format,
    size,
    className,
    readonly,
    onChange,
    value,
    fieldProps,
    listType = 'text',
    imgCrop = false,
    imgCropFieldProps,
    buttonProps,
    path = 'common',
    blob = false,
  } = Props;

  const [fileList, setFileList] = useState<any>([]);

  useEffect(() => {
    if (value) {
      let values = [];
      if (typeof value === 'string') {
        values.push(value);
      } else {
        values = [...value];
      }

      const list: any = [];
      values.forEach((item: any) => {
        if (typeof item === 'string') {
          const arr = item.split('/');
          list.push({
            status: 'done',
            name: arr[arr.length - 1],
            url: item,
          });
        }
      });
      setFileList(list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUplaodChange = (info: any) => {
    if (info.file.status !== 'uploading') {
      const list: any = [];
      const afileList: any = [];
      info.fileList.forEach((item: any) => {
        if (item.response) {
          if (blob) {
            list.push(item.response);
            afileList.push({
              status: 'done',
              name: item.response.name,
              file: item.response,
            });
          } else {
            const url = item.response.data.src;
            const arr = url.split('/');
            list.push(url);
            afileList.push({
              status: 'done',
              name: arr[arr.length - 1],
              url: url,
            });
          }
        } else {
          list.push(item.url);
          afileList.push({ ...item });
        }
      });
      if (typeof onChange === 'function') {
        if (maxCount === 1) {
          onChange(list[0]);
        } else {
          onChange(list);
        }
      }
      setFileList([...afileList]);
    } else {
      setFileList([...info.fileList]);
    }
  };

  const beforeUpload = (file: any) => {
    if (format && format.length > 0) {
      let formatArr: any = [...format];
      formatArr = formatArr.map((i: string) => i.toLowerCase());
      const nameArr = file.name.split('.');
      const name = nameArr[nameArr.length - 1].toLowerCase();
      if (!formatArr.includes(name)) {
        message.error(`需要上传文件格式：${formatArr.join('、')} `);
        return Upload.LIST_IGNORE;
      }
    }
    if (size && size > 0) {
      if (file.size / 1000 > size) {
        message.error(`需要上传文件大小：${size}kb `);
        return Upload.LIST_IGNORE;
      }
    }
    return true;
  };

  const customRequest = async (file: any) => {
    if (blob) {
      file.onSuccess(file.file);
      return;
    }
    const formData = new FormData();
    formData.append('file', file.file);
    formData.append('path', path);
    try {
      let res: any = {};
      if (request) {
        res = await request(formData);
      } else {
        res = await uploadFile(formData);
      }
      file.onSuccess(res);
    } catch (e) {
      file.onError(e);
    }
  };

  const uploadDom = (
    <Upload
      name="file"
      maxCount={maxCount}
      customRequest={customRequest}
      beforeUpload={beforeUpload}
      fileList={fileList}
      onChange={onUplaodChange}
      disabled={disabled || readonly}
      listType={listType}
      {...fieldProps}
    >
      {fileList.length < maxCount &&
        !readonly &&
        (listType === 'picture-card' ? (
          <>
            <PlusOutlined />
            {buttonName || '单击上传'}
          </>
        ) : (
          <Button disabled={disabled} icon={<UploadOutlined />} {...buttonProps}>
            {buttonName || '单击上传'}
          </Button>
        ))}
    </Upload>
  );
  return (
    <div className={`${className} ${styles.uploadCustom}`}>
      {imgCrop ? (
        <ImgCrop rotate {...imgCropFieldProps}>
          {uploadDom}
        </ImgCrop>
      ) : (
        uploadDom
      )}
    </div>
  );
}

export default UploadCustom;
