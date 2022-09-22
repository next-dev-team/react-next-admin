import { useState, useEffect } from "react";
import { Dropdown, Space, Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { history, useModel } from "@umijs/max";
import NoticeTabs from "./NoticeTabs";
import styles from "./index.less";
import {
  setUserNoticeMessageRead,
  setUserNoticeMessageEmpty,
} from "@/services";
import PreviewHtmlModalCustom from "@/components/ModalCustom/PreviewHtmlModalCustom";

export const NOTICE_TYPE = [
  {
    label: "通知",
    key: "notification",
  },
  {
    label: "消息",
    key: "message",
  },
];

const { Tab } = NoticeTabs;

const NoticeTip = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const {
    globalMessage,
    setGlobalMessage,
    globalMessageCount,
    setGlobalMessageCount,
    refresh,
  } = useModel("useNoticeModel");
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [info, setInfo] = useState<any>({});

  // 全局点击事件, 用于判断面板是否关闭
  useEffect(() => {
    const closeNoticeTabs = () => {
      setVisible(false);
    };
    document.addEventListener("click", closeNoticeTabs);
    return () => {
      document.removeEventListener("click", closeNoticeTabs);
    };
  }, []);

  // 消息被点击
  const onClick = (key: string, item: any, index: any) => {
    const list = globalMessage[key];
    // if (list[index].read) {
    //   return;
    // }
    setUserNoticeMessageRead({
      id: list[index].id,
    })
      .then((res) => {
        setInfo(res.data);
        setPreviewVisible(true);
        if (!list[index].read) {
          list[index].read = true;
          setGlobalMessageCount(globalMessageCount - 1);
          setGlobalMessage({
            ...globalMessage,
            key: list,
          });
        }
      })
      .catch(() => {});
  };
  // 消息清空
  const onClear = (key: string) => {
    setUserNoticeMessageEmpty({
      type: key,
    })
      .then(() => {
        refresh();
      })
      .catch(() => {});
  };
  // 消息更多
  const onViewMore = () => {
    history.push("/public/userInfo");
  };

  const onVisible = (e: any) => {
    setVisible(!visible);
    e.stopPropagation();
  };
  if (!globalMessage) {
    return null;
  }
  const notice = (
    <div
      className={styles["notice-tip"]}
      onClick={(e: any) => {
        e.stopPropagation();
      }}
    >
      <NoticeTabs
        onClear={onClear}
        onViewMore={onViewMore}
        onClick={(e: any) => {
          e.stopPropagation();
        }}
      >
        {NOTICE_TYPE.map((i: any) => {
          return (
            <Tab
              tabKey={i.key}
              key={i.key}
              title={i.label}
              data={globalMessage[i.key]}
              onClick={onClick}
            />
          );
        })}
      </NoticeTabs>
    </div>
  );

  const onCancel = (e: any) => {
    setPreviewVisible(false);
    e.stopPropagation();
  };
  return (
    <>
      <Dropdown
        overlay={notice}
        visible={visible}
        overlayClassName={styles["notice-tip-dropdown"]}
      >
        {/* 待优化 */}
        <div className={styles["notice-tip-icon"]} onClick={onVisible}>
          <Badge count={globalMessageCount}>
            <Space>
              <BellOutlined style={{ fontSize: "18px" }} />
            </Space>
          </Badge>
        </div>
      </Dropdown>
      <PreviewHtmlModalCustom
        className={styles.noticePreview}
        visible={previewVisible}
        title={info.title}
        date={info.created_at}
        desc={info.desc}
        content={info.content}
        onCancel={onCancel}
        onBody={(e: any) => {
          e.stopPropagation();
        }}
      />
    </>
  );
};

export default NoticeTip;
