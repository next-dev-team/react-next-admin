import TableCustom from "@/components/TableCustom";
import useGetModel from "@/hooks/useGetModel";
import ProCard from "@ant-design/pro-card";
import ProDescriptions from "@ant-design/pro-descriptions";

import { useState } from "react";

function SysLogs() {
  const [record, setRecord] = useState<any>({ param: "", data: "" });
  const [tab, setTab] = useState<string>("param");
  const [loading, setLoading] = useState<boolean>(false);
  const [modelConfig, modelLoading] = useGetModel({ model: "AdminLog" });

  if (!modelConfig) {
    return modelLoading;
  }
  const rowOnClick = async (rowRecord: any) => {
    setLoading(true);
    try {
      const res = await modelConfig.detailsApiFn({ id: rowRecord.id });
      setRecord(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      <ProCard split="vertical" ghost gutter={[8, 8]}>
        <ProCard colSpan="70%" ghost>
          <TableCustom<any>
            {...modelConfig.tableProps}
            onRow={(rowRecord: any) => {
              return {
                onClick: () => rowOnClick(rowRecord),
              };
            }}
          />
        </ProCard>
        <ProCard
          split="horizontal"
          headerBordered
          tabs={{
            activeKey: tab,
            onChange: (key) => {
              setTab(key);
            },
          }}
        >
          <ProCard.TabPane key="param" tab="请求参数">
            <ProDescriptions
              loading={loading}
              dataSource={record}
              style={{ height: "calc(100vh - 292px)", overflow: "auto" }}
            >
              <ProDescriptions.Item valueType="jsonCode" dataIndex="param" />
            </ProDescriptions>
          </ProCard.TabPane>
          <ProCard.TabPane key="data" tab="返回数据">
            <ProDescriptions
              dataSource={record}
              loading={loading}
              style={{ height: "calc(100vh - 292px)", overflow: "auto" }}
            >
              <ProDescriptions.Item valueType="jsonCode" dataIndex="data" />
            </ProDescriptions>
          </ProCard.TabPane>
        </ProCard>
      </ProCard>
    </>
  );
}

export default SysLogs;
