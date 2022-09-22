import useGetModel from "@/hooks/useGetModel";
import TableCustom from "@/components/TableCustom";

function Message() {
  const [modelConfig, modelLoading] = useGetModel({ model: "Message" });

  if (!modelConfig) {
    return modelLoading;
  }

  return (
    <>
      <TableCustom<any> {...modelConfig.tableProps} />
    </>
  );
}

export default Message;
