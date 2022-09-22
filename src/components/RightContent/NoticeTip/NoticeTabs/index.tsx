import React from 'react';
import { Tabs } from 'antd';

import NoticeList from '../NoticeList';

const { TabPane } = Tabs;

const NoticeTabs: React.FC<any> & { Tab: typeof NoticeList } = (props) => {
  const { children, onViewMore, onClear } = props;
  const panes: React.ReactNode[] = [];

  // const getMsgCount = (data: any) =>
  //   data.reduce((prev: any, cur: any) => prev + (!cur.read ? 1 : 0), 0);

  React.Children.forEach(children, (child: React.ReactElement) => {
    if (!child) return;
    const { data, tabKey, title, onClick } = child.props;
    // const tempTitle = getMsgCount(data) === 0 ? title : `${title}(${getMsgCount(data)})`;
    panes.push(
      <TabPane tab={title} key={tabKey}>
        <NoticeList
          clearText="清空"
          onClear={onClear}
          showViewMore={true}
          viewMoreText="查看更多"
          onViewMore={onViewMore}
          data={data}
          onClick={onClick}
          {...child.props}
        />
      </TabPane>,
    );
  });
  return <Tabs>{panes}</Tabs>;
};

NoticeTabs.Tab = NoticeList;

export default NoticeTabs;
