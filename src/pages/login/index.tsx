import { useState } from "react";
import { history, useModel } from "@umijs/max";
import { login } from "@/services";
import styles from "./index.less";
import { mobileConfig, accountConfig } from "./define";
import { Row, Col, Typography, Tabs, Space, Image, message } from "antd";
import FormCustom from "@/components/FormCustom";
import classnames from "classnames";
import {
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
  QrcodeOutlined,
  SlackOutlined,
} from "@ant-design/icons";
import { waitTime } from "@/utils";
import code from "@/assets/images/code.jpg";
import scan from "@/assets/images/scan.png";
import bg from "@/assets/images/background.jpg";
import CaptchaModalCustom from "@/components/ModalCustom/CaptchaModalCustom";

import { requestDebounce } from "@/utils";
const debounceLogin: any = requestDebounce(login, 500);

const { Title } = Typography;
const { TabPane } = Tabs;

type loginType = "mobile" | "account" | "qrcode";

function UserMobileLogin() {
  const [type, setType] = useState<loginType>("account");
  const { updateUser } = useModel("useUserModel");
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<any>(null);

  const onFinish = async (values: any) => {
    try {
      setValue(values);
      setVisible(true);
    } catch (e) {
      // empty
    }
  };

  const onOk = async (data: any) => {
    try {
      const res = await debounceLogin({ ...value, ...data });
      message.success("登录成功");
      updateUser(res.data, res.data.token);
      setVisible(false);
      history.push("/");
    } catch (e) {
      // empty
    }
  };
  const onCancel = async () => {
    setVisible(false);
  };
  const tabOnChange = (key: any) => {
    let nkey = key;
    if (type === nkey && type === "qrcode") {
      nkey = "account";
    }
    setType(nkey);
  };

  const onGetCaptcha = async (mobile: any) => {
    await waitTime(1000);
    message.success(`手机号 ${mobile} 验证码发送成功!`);
  };

  const loginDom = (
    <>
      <Tabs defaultActiveKey={type} onChange={tabOnChange} size="large">
        <TabPane tab="账号登录" key="account" />
        <TabPane tab="免密登录" key="mobile" />
      </Tabs>
      <FormCustom
        isKeyPressSubmit={true}
        submitter={{
          searchConfig: {
            submitText: type === "mobile" ? "注册/登录" : "登录",
          },
          submitButtonProps: {
            style: {
              width: "100%",
              marginTop: "20px",
            },
          },
          render: (_: any, dom: any) => dom.pop(),
        }}
        columns={type === "mobile" ? mobileConfig(onGetCaptcha) : accountConfig}
        onFinish={onFinish}
      />
      <Space className={styles.other}>
        其他登录方式:
        <AlipayCircleOutlined className={styles.icon} />
        <TaobaoCircleOutlined className={styles.icon} />
        <WeiboCircleOutlined className={styles.icon} />
      </Space>
    </>
  );
  const qrcodeDom = (
    <>
      <Row align="middle" justify="center">
        <Image width={160} preview={false} src={code} />
        <Image width={160} preview={false} src={scan} />
      </Row>
    </>
  );
  return (
    <>
      <Row
        className={styles.login}
        style={{ background: `url(${bg}) no-repeat` }}
        align="middle"
        justify="center"
      >
        <Col xs={0} sm={0} md={12} lg={14} xl={16} />
        <Col xs={24} sm={24} md={10} lg={8} xl={6}>
          <Row justify="center">
            <Row
              justify="center"
              className={classnames(styles.bg, "global-shadow-3-down")}
            >
              <div className={styles.main}>
                <div
                  className={classnames(styles.code, type)}
                  onClick={() => {
                    tabOnChange("qrcode");
                  }}
                >
                  {type === "qrcode" ? (
                    <SlackOutlined
                      style={{ fontSize: "50px", color: "#1890ff" }}
                    />
                  ) : (
                    <QrcodeOutlined
                      style={{ fontSize: "50px", color: "#1890ff" }}
                    />
                  )}
                </div>
                <Col span={24}>
                  <Title style={{ color: "#fff" }}>欢迎登录</Title>
                </Col>
                <Col span={24} className={styles.box}>
                  {type !== "qrcode" ? loginDom : qrcodeDom}
                </Col>
              </div>
            </Row>
          </Row>
        </Col>
        <Col xs={0} sm={2} md={2} lg={2} xl={2} />
      </Row>
      <CaptchaModalCustom visible={visible} onOk={onOk} onCancel={onCancel} />
    </>
  );
}

export default UserMobileLogin;
