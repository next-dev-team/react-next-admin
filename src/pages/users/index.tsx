import useGetModel from '@/hooks/useGetModel';
import TableCustom from '@/components/TableCustom';

function Users() {
  const [modelConfig, modelLoading] = useGetModel({ model: 'Users' });

  if (!modelConfig) {
    return modelLoading;
  }

  return (
    <>
      <TableCustom<any> {...modelConfig.tableProps} />
    </>
  );
}

export default Users;
