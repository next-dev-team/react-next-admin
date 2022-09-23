import type { CustomType } from '../types';
import { Select, Space } from 'antd';
import { getPublicAreaPlate } from '@/services';

declare type CityCascadeCustomType = {
  /**
   * 需要选择模块 默认 4级选择 province 省 city城市 area区域 plate板块 ['province', 'city', 'area', 'plate']
   * default 全部
   */
  select?: any;

  /**
   * 如果是表单弹窗中使用models状态管理是不行的
   * 全局可以获取城市配置
   */
  citys: any;

  /**
   * 禁用
   */
  disabled?: boolean;
} & CustomType;

const { Option } = Select;

function CityCascadeCustom(Props: CityCascadeCustomType) {
  const [inputValue, setInputValue] = useState<any>([]);
  const [province, setProvince] = useState<any>([]);
  const [city, setCity] = useState<any>([]);
  const [area, setArea] = useState<any>([]);
  const [plate, setPlate] = useState<any>([]);
  const [areaPlate, setAreaPlate] = useState<any>(null);
  const initialization = useRef<any>(false);

  const {
    className,
    customMode,
    readonly,
    citys,
    value,
    onChange,
    disabled = false,
    select = ['province', 'city', 'area', 'plate'],
  } = Props;

  const setCityData = (pvalue: any) => {
    const cityArr: any = citys
      .filter((i: any) => i.province === pvalue)
      .map((a: any) => {
        return { label: a.city, value: a.city };
      });
    setCity(cityArr);
  };
  const setAreaData = async (
    cvalue: any,
    areaPlateData: any = false,
    load: boolean = false,
  ) => {
    let areaPlateArr: any = areaPlateData ? areaPlateData : areaPlate;
    if (load || !areaPlateArr) {
      try {
        const res = await getPublicAreaPlate({
          province: inputValue[0],
          city: cvalue,
        });
        areaPlateArr = res.data.areaPlate;
        setAreaPlate(res.data.areaPlate);
      } catch (error) {}
    }
    const areas: any = [];
    areaPlateArr.forEach((a: any) => {
      const has = areas.find((item: any) => item.value === a.area);
      if (!has) {
        areas.push({ label: a.area, value: a.area });
      }
    });
    setArea(areas);
  };
  const setPlateData = (avalue: any, areaPlateData: any = false) => {
    const areaPlateArr: any = areaPlateData ? areaPlateData : areaPlate;
    const plateArr: any = areaPlateArr
      .filter((i: any) => i.area === avalue)
      .map((a: any) => {
        return { label: a.plate, value: a.plate };
      });
    setPlate(plateArr);
  };

  useEffect(() => {
    const provinces: any = [];
    console.log(citys);

    citys.forEach((a: any) => {
      const has = provinces.find((item: any) => item.value === a.province);
      if (!has) {
        provinces.push({ label: a.province, value: a.province });
      }
    });

    setProvince(provinces);
    setTimeout(() => {
      if (value) {
        if (value[0]) {
          setCityData(value[0]);
        }
        if (value[1]) {
          try {
            getPublicAreaPlate({
              province: value[0],
              city: value[1],
            })
              .then((res) => {
                setAreaPlate(res.data.areaPlate);
                setAreaData(value[1], res.data.areaPlate);
                if (value[2]) {
                  setPlateData(value[2], res.data.areaPlate);
                }
              })
              .catch(() => {});
          } catch (error) {}
        } else {
          setAreaData(value[1]);
        }
        setInputValue(value);
      }
    }, 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // 如果是第一次
    if (inputValue.length === 0 && !initialization.current) {
      // 第一次初始化不复制 会触发验证
      initialization.current = true;
      return;
    }
    if (typeof onChange === 'function') {
      onChange(inputValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const onChangeProvince = (pvalue: any) => {
    setInputValue([pvalue]);
    setCity([]);
    setArea([]);
    setPlate([]);
    setCityData(pvalue);
  };

  const onChangeCity = async (cvalue: any) => {
    setInputValue([inputValue[0], cvalue]);
    setArea([]);
    setPlate([]);
    if (select.includes('area')) {
      setAreaData(cvalue, false, true);
    }
  };

  const onChangeArea = (avalue: any) => {
    setInputValue([inputValue[0], inputValue[1], avalue]);
    setPlate([]);
    setPlateData(avalue);
  };

  const onChangePlate = (pvalue: any) => {
    setInputValue([inputValue[0], inputValue[1], inputValue[2], pvalue]);
  };

  const cascade = (
    <>
      {select.includes('province') === true && (
        <Select
          style={{ width: 160 }}
          allowClear
          showSearch
          placeholder="选择省份"
          onChange={onChangeProvince}
          value={inputValue[0]}
          disabled={disabled}
        >
          {province.map((i: any) => (
            <Option value={i.value} key={`province-${i.value}`}>
              {i.label}
            </Option>
          ))}
        </Select>
      )}
      {select.includes('city') === true && (
        <Select
          style={{ width: 160 }}
          allowClear
          showSearch
          placeholder="选择城市"
          onChange={onChangeCity}
          value={inputValue[1]}
          disabled={disabled}
        >
          {city.map((i: any) => (
            <Option value={i.value} key={`city-${i.value}`}>
              {i.label}
            </Option>
          ))}
        </Select>
      )}
      {select.includes('area') === true && (
        <Select
          style={{ width: 160 }}
          allowClear
          showSearch
          placeholder="选择区域"
          onChange={onChangeArea}
          value={inputValue[2]}
          disabled={disabled}
        >
          {area.map((i: any) => (
            <Option value={i.value} key={`area-${i.value}`}>
              {i.label}
            </Option>
          ))}
        </Select>
      )}
      {select.includes('plate') === true && (
        <Select
          style={{ width: 160 }}
          allowClear
          showSearch
          placeholder="选择板块"
          onChange={onChangePlate}
          value={inputValue[3]}
          disabled={disabled}
        >
          {plate.map((i: any) => (
            <Option value={i.value} key={`plate-${i.value}`}>
              {i.label}
            </Option>
          ))}
        </Select>
      )}
    </>
  );

  return (
    <div
      className={`${
        className || ''
      } ${customMode}-city-cascade-custom city-cascade-custom`}
      style={{ display: 'inline-block' }}
    >
      {readonly ? value ? value.join('-') : '' : <Space wrap>{cascade}</Space>}
    </div>
  );
}

export default CityCascadeCustom;
