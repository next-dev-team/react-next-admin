import useGetModel from '@/hooks/useGetModel';
import TableCustom from '@/components/TableCustom';
import { proTableDownload } from '@/services';

function Backups() {
  const [modelConfig, modelLoading] = useGetModel({ model: 'AdminBackups' }, null, {
    downloadApiFn: proTableDownload,
  });

  if (!modelConfig) {
    return modelLoading;
  }

  return (
    <>
      <TableCustom<any> {...modelConfig.tableProps} />
    </>
  );
}

export default Backups;
