import { useEffect, useState, useRef } from "react";
import { ProCard } from "@ant-design/pro-components";

import FormCustom from "@/components/FormCustom";
import { Avatar, Space, Typography, message, Menu, Tag } from "antd";
import { formConfig, passwordFormConfig } from "./define";
import {
  isLogin,
  editUserInfo,
  getUserNoticeMessage,
  setUserNoticeMessageRead,
} from "@/services";
import { useModel } from "@umijs/max";
import type { ProFormInstance } from "@ant-design/pro-components";
import { NOTICE_TYPE } from "@/components/RightContent/NoticeTip";
import TableCustom from "@/components/TableCustom";
import { IconFont } from "@/utils";

const { Text } = Typography;

function PublicUserInfo() {
  const [tab, setTab] = useState<string>("tab1");
  const [messageTab, setMessageTab] = useState<string>(NOTICE_TYPE[0].key);
  const { user, updateUser } = useModel("useUserModel");
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    $global.eventsBus.$emit("setPageContainerConfig", {
      header: {
        title: null,
        breadcrumb: {},
      },
    });
    isLogin().then((res: any) => {
      updateUser(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = async (type: string, values: any) => {
    editUserInfo(values)
      .then((res: any) => {
        updateUser(res.data);
        message.success("修改成功");
        if (type === "password") {
          formRef.current?.resetFields();
        }
      })
      .catch((e: any) => {
        console.log(e.info);
      });
  };

  return (
    <>
      <ProCard
        split="horizontal"
        gutter={[0, 16]}
        ghost
        style={{ minHeight: "100%", marginBottom: 24 }}
      >
        <ProCard loading={!user.id} style={{ minHeight: 150 }}>
          <Space direction="horizontal" size="large">
            <Avatar size={120} src={user.headimg} />
            <Space direction="vertical">
              <Text type="secondary" strong>
                {user.account} | {user.name}
              </Text>
              <Text type="secondary" strong>
                {user.role_name}
              </Text>
              <Space direction="horizontal">
                <Text type="secondary" strong>
                  {user.phone}
                </Text>
                {user.status === 1 ? (
                  <Text type="success" strong>
                    正常
                  </Text>
                ) : (
                  <Text type="danger" strong>
                    异常
                  </Text>
                )}
              </Space>
              <Text type="secondary" strong>
                最后登录时间:{user.last_login_at}
              </Text>
            </Space>
          </Space>
        </ProCard>
        <ProCard
          loading={!user.id}
          split="vertical"
          gutter={[0, 0]}
          style={{ paddingTop: 10 }}
        >
          <Menu
            style={{ width: "256px" }}
            mode="inline"
            defaultSelectedKeys={["tab1"]}
            onClick={({ key }: any) => {
              setTab(key);
            }}
          >
            <Menu.Item key="tab1">消息中心</Menu.Item>
            <Menu.Item key="tab2">基本设置</Menu.Item>
            <Menu.Item key="tab3">修改密码</Menu.Item>
          </Menu>
          {tab === "tab1" && (
            <ProCard
              title="消息中心"
              tabs={{
                tabPosition: "top",
                activeKey: messageTab,
                onChange: (key) => {
                  setMessageTab(key);
                },
              }}
            >
              {NOTICE_TYPE.map((item: any) => {
                return (
                  <ProCard.TabPane key={item.key} tab={item.label}>
                    <TableCustom<any>
                      tableType="ProList"
                      search={false}
                      options={false}
                      showActions="hover"
                      params={{ type: item.key }}
                      request={getUserNoticeMessage}
                      itemLayout={
                        item.key === "message" ? "vertical" : "horizontal"
                      }
                      grid={
                        item.key === "message"
                          ? { gutter: 16, column: 2 }
                          : false
                      }
                      metas={{
                        title: {
                          dataIndex: "title",
                        },
                        avatar: {
                          dataIndex: "avatar",
                          render: () => {
                            return item.key === "message" ? (
                              <IconFont
                                type="icon-Notifications"
                                style={{ fontSize: 23 }}
                              />
                            ) : (
                              <IconFont
                                type="icon-052-notification"
                                style={{ fontSize: 28 }}
                              />
                            );
                          },
                        },
                        description: {
                          dataIndex: "created_at",
                        },
                        content: {
                          dataIndex: "desc",
                        },
                        subTitle: {
                          render: (_: any, row: any) => {
                            return (
                              <Space size={0}>
                                <Tag
                                  color={
                                    row.is_urgent === 1
                                      ? "blue"
                                      : row.is_urgent === 2
                                      ? "magenta"
                                      : "red"
                                  }
                                >
                                  {row.is_urgent_name}
                                </Tag>
                              </Space>
                            );
                          },
                        },
                      }}
                      pagination={{
                        pageSize: 10,
                      }}
                      columns={[
                        {
                          title: "封面",
                          dataIndex: "img_url",
                          valueType: "UploadCustom",
                          formGroup: 1,
                          fieldProps: {
                            listType: "picture-card",
                          },
                        },
                        {
                          title: "重要程度",
                          dataIndex: "is_urgent_name",
                          formGroup: 1,
                        },
                        {
                          title: "标题",
                          dataIndex: "title",
                          formGroup: 2,
                        },
                        {
                          title: "简介",
                          dataIndex: "desc",
                          formGroup: 3,
                        },
                        {
                          title: "内容",
                          dataIndex: "content",
                          valueType: "BraftEditorCustom",
                          formGroup: 4,
                        },
                      ]}
                      operationConfig={{
                        preview: {
                          text: "查看详情",
                          modalConfig: {
                            modalType: "PreviewHtml",
                            config: {
                              request: setUserNoticeMessageRead,
                              initialValuesBefor: (data: any) => {
                                return { ...data, date: data.created_at };
                              },
                            },
                          },
                        },
                      }}
                    />
                  </ProCard.TabPane>
                );
              })}
            </ProCard>
          )}
          {tab === "tab2" && (
            <ProCard loading={!user.id} title="基本设置">
              <FormCustom
                initialValues={user}
                submitter={{
                  searchConfig: {
                    submitText: "保存",
                  },
                  render: (_: any, dom: any) => dom.pop(),
                }}
                columns={formConfig}
                onFinish={onFinish.bind(null, "edit")}
              />
            </ProCard>
          )}
          {tab === "tab3" && (
            <ProCard loading={!user.id} title="修改密码">
              <FormCustom
                formRef={formRef}
                submitter={{
                  searchConfig: {
                    submitText: "保存",
                  },
                  render: (_: any, dom: any) => dom.pop(),
                }}
                columns={passwordFormConfig}
                onFinish={onFinish.bind(null, "password")}
              />
            </ProCard>
          )}
        </ProCard>
      </ProCard>
    </>
  );
}

export default PublicUserInfo;
