import useGetModel from '@/hooks/useGetModel';
import TableCustom from '@/components/TableCustom';

function Account() {
  const [modelConfig, modelLoading] = useGetModel({ model: 'AdminUser' });

  if (!modelConfig) {
    return modelLoading;
  }

  return (
    <>
      <TableCustom<any> {...modelConfig.tableProps} />
    </>
  );
}

export default Account;
