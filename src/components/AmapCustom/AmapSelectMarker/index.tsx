import { useState, useEffect } from 'react';
import { Input } from 'antd';

import styles from './index.less';

function AmapSelectMarker(Props: any) {
  const [geoloc, setGeoloc] = useState<any>(null);
  const { __map__, selectChange } = Props;

  const onSelectChange = (e: any) => {
    if (!e.poi.location) {
      const poi = e.poi;
      geoloc.getLocation(
        poi.district + poi.address,
        (status: any, result: any) => {
          console.log('getLocation', status, result);
          if (result && result.info === 'OK') {
            e.poi.location = result.geocodes[0].location;
          }
        },
      );
      return;
    }
    selectChange(e.poi.location.lng, e.poi.location.lat);
  };

  useEffect(() => {
    __map__.plugin(
      ['AMap.Autocomplete', 'AMap.Geocoder', 'AMap.PlaceSearch'],
      () => {
        // @ts-ignore
        const mapGeoloc = new window.AMap.Geocoder({});
        __map__.addControl(mapGeoloc);
        setGeoloc(mapGeoloc);
        // @ts-ignore
        const auto = new window.AMap.Autocomplete({ input: 'autoinput' });
        __map__.addControl(auto);
        // @ts-ignore
        window.AMap.event.addListener(auto, 'select', onSelectChange);
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Input
        id="autoinput"
        className={styles.autoinput}
        placeholder="请输入关键字"
      />
    </>
  );
}

export default AmapSelectMarker;
