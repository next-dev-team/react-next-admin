import AmapCustom from '@/components/AmapCustom';
import type { CustomType } from '../types';
import type { AmapPropsType } from '@/components/AmapCustom';

declare type AmapFormCustomType = {
  fieldProps?:
    | {
        amapProps?: AmapPropsType;
      }
    | any;
} & CustomType;

function AmapFormCustom(Props: AmapFormCustomType) {
  const { className, customMode, readonly, value, onChange, fieldProps = {} } = Props;
  const { amapProps = {} }: any = fieldProps;

  return (
    <div className={`${className} ${customMode}`}>
      {readonly ? (
        <AmapCustom value={value} />
      ) : (
        <AmapCustom selectMarker={true} value={value} onChange={onChange} {...amapProps} />
      )}
    </div>
  );
}

export default AmapFormCustom;
