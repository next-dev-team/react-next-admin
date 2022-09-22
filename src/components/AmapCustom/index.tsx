import { Map, MouseTool, Marker } from 'react-amap';
import Loading from '@/components/Exception/Loading';
import React, { useState, useEffect } from 'react';
import { Space, Button, Tooltip } from 'antd';
import {
  DeploymentUnitOutlined,
  EnvironmentOutlined,
  BranchesOutlined,
  StopOutlined,
  ForkOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import AmapSelectMarker from './AmapSelectMarker';

declare type AmapItudeType = {
  longitude: string;
  latitude: string;
};

export declare type AmapPropsType = {
  /**
   * 地图显示级别
   * 默认 14
   */
  zoom?: number;
  /**
   * 宽度
   * @default '100%'
   */
  width?: string;
  /**
   * 高度
   * @default '400px%'
   */
  height?: string;
  /**
   * 地图的中心点
   * 例如：[ longitude, latitude ]
   */
  center?: [];
  /**
   * 需要开启的事件值 高德工具
   * 'marker' | 'polyline' | 'polygon' | 'circle' | 'rectangle' | 'rule' | 'close' ....
   */
  tools?: string[];

  /**
   * 是否开启选择点
   */
  selectMarker?: boolean;
  /**
   * 开启selectMarker 默认值
   * {
   *   longitude: string;
   *   latitude: string;
   * }
   */
  value?: AmapItudeType;
  /**
   * 开启selectMarker 切换回调
   * {
   *   longitude: string;
   *   latitude: string;
   * }
   */
  onChange?: (value: AmapItudeType) => void;
  /**
   * 显示的定位点
   *
   */
  markers?: AmapItudeType[];
};

const amapkey = '54adf87df770b95fea4a98c443fb71bc';

function AmapCustom(Props: AmapPropsType) {
  const [map, setMap] = useState<any>(null);
  const [tool, setTool] = useState<any>(null);
  const [type, setType] = useState<any>(null);
  const [marker, setMarker] = useState<any>({});

  const {
    width = '100%',
    height = '400px',
    center,
    tools = [],
    zoom = 11,
    selectMarker = false,
    value,
    onChange,
    markers = [],
  } = Props;

  useEffect(() => {
    if (value) {
      setMarker(value);
    }
  }, [value]);

  // 绘制的回调
  const drawWhat = (obj: any) => {
    console.log(obj);

    switch (obj.CLASS_NAME) {
      case 'AMap.Marker':
        obj.getPosition();
        break;
      case 'AMap.Polygon':
        break;
      case 'AMap.polyline':
        break;
      case 'AMap.Circle':
        break;
      default:
    }
  };
  // 选择工具
  const draw = (drawtype: string) => {
    if (tool) {
      // 如果是清空
      if (drawtype === 'close') {
        tool.close(true);
        setType(null);
        return;
      }

      tool[drawtype]();
      setType(drawtype);
    }
  };
  const toolEvents = {
    created: (toolObj: any) => {
      setTool(toolObj);
    },
    draw({ obj }: any) {
      drawWhat(obj);
    },
  };

  // 点击地图或者 关键字搜索确
  const addMarker = (longitude: any, latitude: any) => {
    const point: AmapItudeType = { longitude, latitude };
    setMarker(point);
    if (map) {
      map.setCenter([longitude, latitude]);
    }
    if (typeof onChange === 'function') {
      onChange(point);
    }
  };

  const onSelectChange = (lng: any, lat: any) => {
    addMarker(lng, lat);
  };

  const defaultMapProps: any = {
    amapkey: amapkey,
    plugins: ['ToolBar', 'Scale'],
    events: {
      created: (ins: any) => {
        setMap(ins);
      },
      click: (e: any) => {
        if (selectMarker) {
          addMarker(e.lnglat.lng, e.lnglat.lat);
        }
      },
    },
    zoom: zoom,
  };
  // 如果开始工具
  if (tools && tools.length > 0) {
    defaultMapProps.children = (
      <>
        <div className={styles.tools}>
          <div className={styles.content}>
            {!type && (
              <Space>
                {tools.includes('marker') && (
                  <Tooltip title="选择点">
                    <Button
                      ghost
                      size="small"
                      shape="circle"
                      onClick={() => draw('marker')}
                      icon={<EnvironmentOutlined className={styles.toolsIcon} />}
                    />
                  </Tooltip>
                )}
                {tools.includes('polyline') && (
                  <Tooltip title="选择线">
                    <Button
                      ghost
                      size="small"
                      shape="circle"
                      onClick={() => draw('polyline')}
                      icon={<ForkOutlined className={styles.toolsIcon} />}
                    />
                  </Tooltip>
                )}
                {tools.includes('circle') && (
                  <Tooltip title="选择圆">
                    <Button
                      ghost
                      size="small"
                      shape="circle"
                      onClick={() => draw('circle')}
                      icon={<DeploymentUnitOutlined className={styles.toolsIcon} />}
                    />
                  </Tooltip>
                )}
                {tools.includes('polygon') && (
                  <Tooltip title="自定义">
                    <Button
                      ghost
                      size="small"
                      shape="circle"
                      onClick={() => draw('polygon')}
                      icon={<BranchesOutlined className={styles.toolsIcon} />}
                    />
                  </Tooltip>
                )}
                {tools.includes('rule') && (
                  <Tooltip title="测距">
                    <Button
                      ghost
                      size="small"
                      shape="circle"
                      onClick={() => draw('rule')}
                      icon={<RocketOutlined className={styles.toolsIcon} />}
                    />
                  </Tooltip>
                )}
              </Space>
            )}

            {type && (
              <Space>
                <Tooltip title="停止">
                  <Button
                    ghost
                    size="small"
                    shape="circle"
                    onClick={() => draw('close')}
                    icon={
                      <StopOutlined className={styles.toolsIcon} style={{ color: '#ff4d4f' }} />
                    }
                  />
                </Tooltip>
              </Space>
            )}
          </div>
        </div>
      </>
    );
  }
  // 如果有中心定位
  if (center) {
    defaultMapProps.center = center;
  }

  return (
    <>
      <div className={styles.AmapCustom} style={{ width: width, height: height }}>
        <Map loading={React.createElement(Loading, {})} {...defaultMapProps}>
          <MouseTool events={toolEvents} />
          {defaultMapProps.children}
          {selectMarker && <AmapSelectMarker selectChange={onSelectChange} />}
          {marker && <Marker position={marker} />}
          {markers.length > 0 &&
            markers.map((item: any, index) => {
              return <Marker key={`${index + 1}-marker`} position={item} />;
            })}
        </Map>
      </div>
    </>
  );
}

export default AmapCustom;
