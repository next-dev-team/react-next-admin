import React from 'react';
import { List, Space, Tag } from 'antd';
import styles from './NoticeList.less';
import classNames from 'classnames';
import { IconFont } from '@/utils';

export type NoticeIconTabProps = {
  count?: number;
  name?: string;
  showClear?: boolean;
  showViewMore?: boolean;
  style?: React.CSSProperties;
  title?: string; // 底部标题
  tabKey: string;
  data: any[];
  onClick?: (key: string, item: any, index: number) => void;
  onClear?: (key: string, e: any) => void;
  emptyText?: string;
  clearText?: string;
  viewMoreText?: string;
  list?: any[];
  onViewMore?: (key: string, e: any) => void;
};

const NoticeList = (props: NoticeIconTabProps): React.ReactElement => {
  const {
    data = [],
    onClick,
    onClear,
    title,
    tabKey,
    onViewMore,
    showClear = true,
    clearText,
    viewMoreText,
    showViewMore = false,
  } = props;
  return (
    <div>
      <List
        className={styles.list}
        dataSource={data}
        renderItem={(item, i) => {
          const itemCls = classNames(styles.item, {
            [styles.read]: item.read,
          });
          const leftIcon =
            tabKey === 'message' ? (
              <IconFont type="icon-Notifications" style={{ fontSize: 28 }} />
            ) : (
              <IconFont type="icon-052-notification" style={{ fontSize: 28 }} />
            );

          return (
            <List.Item
              className={itemCls}
              key={item.key || i}
              onClick={(e) => {
                onClick?.(tabKey, item, i);
                e.stopPropagation();
              }}
            >
              <List.Item.Meta
                className={styles.meta}
                avatar={leftIcon}
                title={
                  <div className={styles.title}>
                    {item.title}
                    {item.is_urgent_name && (
                      <Space size={0} style={{ marginLeft: 10 }}>
                        <Tag
                          color={
                            item.is_urgent === 1 ? 'blue' : item.is_urgent === 2 ? 'magenta' : 'red'
                          }
                        >
                          {item.is_urgent_name}
                        </Tag>
                      </Space>
                    )}
                  </div>
                }
                description={
                  <div>
                    <div className={styles.description}>{item.desc}</div>
                    <div className={styles.datetime}>{item.created_at}</div>
                  </div>
                }
              />
            </List.Item>
          );
        }}
      />
      <div className={styles.bottomBar}>
        {showClear && (
          <div
            onClick={(e: any) => {
              if (typeof onClear === 'function') {
                onClear(tabKey, e);
                e.stopPropagation();
              }
            }}
          >
            {clearText}
            {title}
          </div>
        )}
        {showViewMore ? (
          <div
            onClick={(e: any) => {
              if (typeof onViewMore === 'function') {
                onViewMore(tabKey, e);
                e.stopPropagation();
              }
            }}
          >
            {viewMoreText}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NoticeList;
