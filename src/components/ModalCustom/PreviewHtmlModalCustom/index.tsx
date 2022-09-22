import ModalCustom from '@/components/ModalCustom';
import styles from './index.less';
import type { ModalProps } from 'antd/lib/modal';
import { Typography, Space } from 'antd';
const { Title, Text } = Typography;

declare type PreviewHtmlModalCustomType = {
  /**
   * 定义className
   */
  className?: string;
  /**
   * 需要显示的标题 空为不显示
   * @default ""
   */
  title?: string | (() => React.ReactNode);
  /**
   * 需要显示的简介 空为不显示
   * @default ""
   */
  desc?: string | (() => React.ReactNode);
  /**
   * 需要显示的时间 空为不显示
   * @default ""
   */
  date?: string | (() => React.ReactNode);
  /**
   * 需要显示的内容 空为不显示
   * @default ""
   */
  content?: string | (() => React.ReactNode) | (() => HTMLElement);
  /**
   * 预览外部链接 如果配置此项将会直接引用外部链接显示
   */
  link?: string;
  /**
   * 点击内容区域的事件
   */
  onBody?: (e: React.MouseEvent<HTMLElement>) => void;
} & ModalProps;

/**
 * 业务弹窗预览html
 * @param Props
 * @returns
 */
function PreviewHtmlModalCustom(Props: PreviewHtmlModalCustomType) {
  const {
    className,
    title = '',
    desc = '',
    date = '',
    content = '',
    onCancel,
    onBody,
    link,
    ...rest
  } = Props;

  const handleCancel = (e: any) => {
    if (onCancel && typeof onCancel === 'function') {
      onCancel(e);
    }
  };

  // const buildPreviewHtml = () => {
  //   return `
  //     <!Doctype html>
  //     <html>
  //       <head>
  //         <title>预览</title>
  //         <style>
  //           html,body{
  //             height: 100%;
  //             margin: 0;
  //             padding: 0;
  //             overflow: auto;
  //             background-color: #f1f2f3;
  //           }
  //           .container{
  //             box-sizing: border-box;
  //             max-width: 100%;
  //             min-height: 100%;
  //             margin: 0 auto;
  //             padding: 30px 20px;
  //             overflow: hidden;
  //             background-color: #fff;
  //           }
  //           .container img,
  //           .container audio,
  //           .container video{
  //             max-width: 100%;
  //             height: auto;
  //           }
  //           .container p{
  //             white-space: pre-wrap;
  //             min-height: 1em;
  //           }
  //           .container pre{
  //             padding: 15px;
  //             background-color: #f1f1f1;
  //             border-radius: 5px;
  //           }
  //           .container blockquote{
  //             margin: 0;
  //             padding: 15px;
  //             background-color: #f1f1f1;
  //             border-left: 3px solid #d1d1d1;
  //           }
  //         </style>
  //       </head>
  //       <body>
  //         <div class="container">${content}</div>
  //       </body>
  //     </html>
  //   `;
  // };

  let titleRender: any;
  let descRender: any;
  let dateRender: any;
  let contentRender: any;

  if (!link) {
    if (typeof title === 'function') {
      titleRender = title();
    } else {
      titleRender = <Title level={4}>{title}</Title>;
    }

    if (typeof desc === 'function') {
      descRender = desc();
    } else {
      descRender = <Text>{desc}</Text>;
    }

    if (typeof date === 'function') {
      dateRender = date();
    } else {
      dateRender = <Text type="secondary">{date}</Text>;
    }

    if (typeof content === 'function') {
      contentRender = content();
    } else {
      contentRender = <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
  }

  return (
    <>
      <ModalCustom
        {...rest}
        title=""
        destroyOnClose={true}
        className={className}
        wrapClassName={styles.previewHtmlModalCustom}
        width="800px"
        onCancel={handleCancel}
        footer={null}
        zIndex={9999}
      >
        {link ? (
          <iframe
            className="content-iframe"
            frameBorder={0}
            width="100%"
            height="500"
            src={link}
            onClick={onBody}
          />
        ) : (
          <Space className={`content-body ${styles.space}`} direction="vertical" onClick={onBody}>
            <div className={styles.title}>{titleRender}</div>
            <div className={styles.desc}>{descRender}</div>
            <div className={styles.date}>{dateRender}</div>
            <div className={styles.content}>{contentRender}</div>
          </Space>
        )}
      </ModalCustom>
    </>
  );
}

export default PreviewHtmlModalCustom;
