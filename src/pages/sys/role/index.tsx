import useGetModel from '@/hooks/useGetModel';
import TableCustom from '@/components/TableCustom';

function Role() {
  const [modelConfig, modelLoading] = useGetModel({ model: 'AdminRole' });

  if (!modelConfig) {
    return modelLoading;
  }

  return (
    <>
      <TableCustom<any> {...modelConfig.tableProps} />
    </>
  );
}

export default Role;
