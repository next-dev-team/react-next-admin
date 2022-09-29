import { ProTable, TableDropdown ,ProList} from '@ant-design/pro-components';

import type {
  TableCustomTypes,
  ProColumnsTypes,
  TableRefType,
} from '@/components/TableCustom/types';
import * as components from '@/components/FormCustom/components';
import React, { useState, useEffect, useRef } from 'react';
import { Button, Space, Table } from 'antd';
import styles from './index.less';
import modalTypeRenderConfig from './modalTypeRenderConfig';
import {
  headerTitleConfigArr,
  tableAlertOptionRenderConfigArr,
  operationConfigRenderConfigArr,
} from './btnConfig';
import { responseTableConfig } from '@/services/config';
import getBusinessStyle from './businessStyleConfig';

// import { dynamic } from '@umijs/max';

/**
 * 获取第一个表格的可视化高度
 * @param {*} costomHeight 额外的高度(表格底部的内容高度 Number类型,默认为74)
 * @param {*} id 当前页面中有多个table时需要制定table的id
 */
/**
 * 获取第一个表格的可视化高度
 * @param {*} costomHeight 额外的高度(表格底部的内容高度 Number类型,默认为74)
 * @param {*} id 当前页面中有多个table时需要制定table的id
 */
function getTableScroll(Props: any, costomHeight?: any, id?: any) {
  let extraHeight = costomHeight;
  if (typeof extraHeight === 'undefined') {
    //  默认底部分页24+32 + 边距20 + 底部漏出20+ 44额外高度
    extraHeight = 96 + 44;
  }
  // 如果没有分页
  if (Props.pagination === false) {
    extraHeight = extraHeight - 56;
  }

  let tHeader = null;
  if (id) {
    tHeader = document.getElementById(id)
      ? // @ts-ignore
        document.getElementById(id).getElementsByClassName('ant-table-thead')[0]
      : null;
  } else {
    tHeader = document.getElementsByClassName('ant-table-thead')[0];
  }
  // 表格内容距离顶部的距离
  let number = 39; //算上自己高度
  if (tHeader) {
    number = tHeader.getBoundingClientRect().top;
  }

  // 窗体高度-表格内容顶部的高度-表格内容底部的高度
  // let height = document.body.clientHeight - tHeaderBottom - extraHeight

  const height = `calc(100vh - ${number + extraHeight}px)`;
  return height;
}

function TableCustom<T>(Props: TableCustomTypes<T>) {
  const {
    tableType = 'ProTable',
    columns,
    request,
    search,
    headerTitle,
    headerTitleConfig,
    rowSelection,
    tableAlertRender,
    selectionConfig,
    tableAlertOptionRender,
    operationConfig,
    scroll,
    actionRef,
    operationBtnShowMax = 2,
    ...rest
  } = Props;

  const [scrollY, setScrollY] = useState<string>('');
  const forwardRef = useRef<TableRefType>();
  let tableRef: any = forwardRef;
  useEffect(() => {
    setScrollY(getTableScroll(Props));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (actionRef) {
    tableRef = actionRef;
  }
  /**
   * 如果配置使用了智能弹窗模式 寻找对应弹窗dom结构
   * @param kitem
   * @param btnConfig
   * @returns
   */
  const setModalType = (kitem: string, btnConfig: any, type: string) => {
    // 处理自定义弹窗类型
    const { modalConfig, ...modelRest } = btnConfig;

    const { modalType, render } = modalConfig || {};

    // 如果设置了弹窗类型
    if (modalType) {
      // 重置按钮点击事件、如果是内置功能-点击事件中间件处理不同点击分发
      modelRest.onClick = (clickConfig: any) => {
        return modalTypeRenderConfig({
          children: {
            modalType,
            props: {
              render,
              btnConfig,
              tableProps: Props,
              type,
              clickConfig,
              tableRef,
            },
          },
          btnConfig,
          clickConfig,
        });
      };
    }

    return modelRest;
  };

  /**
   *
   * @param kitem // 按钮key
   * @param configArr // 默认配置
   * @param config  // 传入配置
   * @param type // 按钮业务类型 header:表头 select:多选  operation:row菜单
   * @returns
   */
  const setBtnConfig = (
    kitem: string,
    configArr: any,
    config: any,
    type: string = 'header',
  ) => {
    // 按钮取默认值
    const defaultBtnConfig = configArr.default;
    let btnConfig: any = {};
    // 如果自定义有按钮配置 合并
    if (configArr[kitem]) {
      btnConfig = { ...defaultBtnConfig, ...configArr[kitem] };
    }
    const text = btnConfig.text;
    // key名称 必须是唯一
    btnConfig.key = `${type}-${kitem}`;
    // 按钮类型
    btnConfig.className = `${type}-item ${type}-item-${kitem}`;

    // 如果传入的是方法
    if (typeof config[kitem] === 'function') {
      btnConfig.onClick = config[kitem];
    } else if (typeof config[kitem] === 'object') {
      if (config[kitem].modalConfig?.config?.customProps) {
        const customProps = config[kitem].modalConfig.config.customProps;
        delete config[kitem].modalConfig.config.customProps;
        config[kitem].modalConfig.config = {
          ...config[kitem].modalConfig.config,
          ...customProps,
        };
      }
      btnConfig = {
        ...btnConfig,
        ...config[kitem],
      };
    }

    if (!btnConfig.text) {
      btnConfig.text = text;
    }
    if (!btnConfig.type) {
      btnConfig.type = 'link';
    }
    return setModalType(kitem, btnConfig, type);
  };

  let searchCustom: boolean | any = false;
  const customColumns: ProColumnsTypes<any>[] = [];
  if (columns) {
    columns.forEach((item: any) => {
      if (item.valueType === 'option') {
        return;
      }
      if (typeof item.search === 'undefined' || item.search === true) {
        searchCustom = {
          filterType: 'query',
          defaultCollapsed: true,
          span: 6,
        };
      }

      // 业务样式快捷使用
      if (item.businessStyle && !item.render) {
        item.render = getBusinessStyle(item);
      }

      // 如果是自定义组件
      if (
        item.valueType &&
        item.valueType.indexOf('Custom') !== -1 &&
        (!item.renderFormItem || !item.render)
      ) {
        // @ts-ignore
        if (components[item.valueType]) {
          // @ts-ignore
          const CustomComponent: any = components[item.valueType];

          if (!item.render) {
            item.render = (text: any, record: any) => {
              // @ts-ignore
              return (
                <CustomComponent
                  readonly={true}
                  value={record[item.dataIndex] || undefined}
                  customMode="tableRead"
                />
              );
            };
          }
          if (!item.renderFormItem) {
            // eslint-disable-next-line no-param-reassign
            item.renderFormItem = (i: any, { type }: any) => {
              if (type === 'form') {
                return null;
              }
              return <CustomComponent customMode="table" />;
            };
          }
        } else {
          // @ts-ignore
          $global.log(`自定义组件:${item.valueType}无法识别`);
        }
      }
      // 如果配置只生效表格的宽度 赋值
      if (item.tableWidth) {
        item.width = item.tableWidth;
      }
      // 如果是select 默认开始搜索
      if (
        item.valueType === 'select' &&
        item.fieldProps &&
        item.fieldProps.showSearch === undefined
      ) {
        item.fieldProps.showSearch = true;
      }

      customColumns.push(item);
    });
  }

  let operationConfigRenderFun;
  // 处理快捷配置row操作菜单
  if (operationConfig) {
    const operationKeys = Object.keys(operationConfig);

    operationConfigRenderFun = (
      itext: any,
      irecord: any,
      _: any,
      iaction: any,
    ) => {
      const btns = operationKeys.map((kitem, kindex) => {
        const btnConfig = setBtnConfig(
          kitem,
          operationConfigRenderConfigArr,
          operationConfig,
          'operation',
        );

        // 拆分参数
        const { key, text, icon, onClick, auth, disabled, ...config } =
          btnConfig;

        if (!auth || (typeof auth === 'function' && auth(btnConfig, irecord))) {
          let newDisable;
          if (typeof disabled === 'function') {
            newDisable = disabled(irecord, btnConfig);
          } else if (typeof disabled === 'boolean' && disabled) {
            newDisable = disabled;
          }
          if (kindex + 1 > operationBtnShowMax) {
            return {
              key,
              name: text,
              disabled: newDisable,
              ...config,
              onClick: onClick.bind(null, {
                btnConfig,
                itext,
                irecord,
                _,
                iaction,
              }),
            };
          }

          return (
            <Button
              {...config}
              disabled={newDisable}
              onClick={onClick.bind(null, {
                btnConfig,
                itext,
                irecord,
                _,
                iaction,
              })}
              key={key}
            >
              {icon}
              {text}
            </Button>
          );
        }
        return null;
      });
      // 过滤没有权限的
      const newBtns = btns.filter((i: any) => {
        return i !== null;
      });

      // 拆分按钮
      const showBtns: any = newBtns.slice(0, operationBtnShowMax);
      const dropdownBtns: any = newBtns.slice(operationBtnShowMax);
      const returnBtns: any = showBtns;

      if (dropdownBtns && dropdownBtns.length > 0) {
        returnBtns.push(
          <TableDropdown
            key={`${irecord.id}operation-actionGroup`}
            menus={dropdownBtns}
          />,
        );
      }
      return returnBtns;
    };
    const optionMenu = columns?.find((i: any) => i.valueType === 'option');
    if (optionMenu) {
      customColumns.push({
        ...optionMenu,
        render: operationConfigRenderFun,
      });
    } else {
      customColumns.push({
        title: '操作',
        key: 'option',
        valueType: 'option',
        render: operationConfigRenderFun,
      });
    }
  }

  let cunstomHeaderTitle = headerTitle;
  // 处理自定义 headerTitle 快捷设置
  if (!headerTitle && headerTitleConfig) {
    const buttons: any = [];

    const keys = Object.keys(headerTitleConfig);

    keys.forEach((kitem) => {
      const btnConfig = setBtnConfig(
        kitem,
        headerTitleConfigArr,
        headerTitleConfig,
        'header',
      );

      // 拆分参数
      const { text, icon, onClick, auth, disabled, ...config } = btnConfig;
      if (!auth || (typeof auth === 'function' && auth(btnConfig))) {
        let newDisable;
        if (typeof disabled === 'function') {
          newDisable = disabled(btnConfig);
        } else if (typeof disabled === 'boolean' && disabled) {
          newDisable = disabled;
        }
        buttons.push(
          React.createElement(
            Button,
            {
              ...config,
              onClick: onClick.bind(null, { btnConfig }),
              disabled: newDisable,
            },
            [React.createElement(icon, { key: `icon-${kitem}` }), text],
          ),
        );
      }
    });

    cunstomHeaderTitle = React.createElement(Space, {}, buttons);
  }

  let cunstomRowSelection = rowSelection;
  let cunstomTableAlertRender = tableAlertRender;
  let cunstomTableAlertOptionRender = tableAlertOptionRender;

  // 处理自定义多选快捷设置
  if (!rowSelection && !tableAlertRender && selectionConfig) {
    cunstomRowSelection = {
      // 注释该行则默认不显示下拉选项
      selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
    };
    if (!tableAlertRender) {
      cunstomTableAlertRender = ({ selectedRowKeys, onCleanSelected }: any) => (
        <Space size={24}>
          <span>
            已选 {selectedRowKeys.length} 项
            <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
              取消选择
            </a>
          </span>
        </Space>
      );
    }
    if (!tableAlertOptionRender) {
      const keys = Object.keys(selectionConfig);

      cunstomTableAlertOptionRender = ({
        selectedRowKeys,
        onCleanSelected,
      }: any) => {
        return (
          <Space size={0}>
            {keys.map((kitem) => {
              const btnConfig = setBtnConfig(
                kitem,
                tableAlertOptionRenderConfigArr,
                selectionConfig,
                'selection',
              );

              // 拆分参数
              const { text, onClick, auth, disabled, ...config } = btnConfig;

              if (
                !auth ||
                (typeof auth === 'function' &&
                  auth(btnConfig, selectedRowKeys, onCleanSelected))
              ) {
                let newDisable;
                if (typeof disabled === 'function') {
                  newDisable = disabled(
                    selectedRowKeys,
                    onCleanSelected,
                    btnConfig,
                  );
                } else if (typeof disabled === 'boolean' && disabled) {
                  newDisable = disabled;
                }

                return (
                  <Button
                    {...config}
                    disabled={newDisable}
                    onClick={onClick.bind(null, {
                      btnConfig,
                      selectedRowKeys,
                      onCleanSelected,
                    })}
                  >
                    {text}
                  </Button>
                );
              }

              return <></>;
            })}
          </Space>
        );
      };
    }
  }

  let TableComponent: any = ProTable;

  if (tableType === 'ProList') {
    // 如果是使用 ProList数据模式
    TableComponent = ProList;
    // 如果有设置operation按钮 并且没有设置actions
    if (
      operationConfig &&
      operationConfigRenderFun &&
      rest.metas &&
      !rest.metas.actions
    ) {
      rest.metas.actions = {
        render: operationConfigRenderFun,
      };
    }
  }

  return (
    <>
      <TableComponent<T>
        className={styles.tableCustom}
        rowKey="id"
        actionRef={tableRef}
        scroll={{
          y: scrollY,
          ...scroll,
        }}
        columns={customColumns}
        size="small"
        request={async (
          // 第一个参数 params 查询表单和 params 参数的结合
          // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
          requestParams: any,
          sort: any,
          filter: any,
        ) => {
          const tableData = {
            data: [],
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: false,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: 0,
          };

          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          // 如果需要转化参数可以在这里进行修改
          try {
            const res: any = await request({
              ...requestParams,
              page: requestParams.current,
              pageSize: requestParams.pageSize,
              sort,
              filter,
            });
            tableData.data = res.data[responseTableConfig.data];
            tableData.total = res.data[responseTableConfig.total];
            tableData.success = true;
          } catch (error) {}

          return tableData;
        }}
        search={search === false ? false : { ...searchCustom, ...search }}
        options={{
          fullScreen: false,
          reload: true,
          setting: true,
          density: false,
          search: false,
        }}
        headerTitle={cunstomHeaderTitle}
        rowSelection={cunstomRowSelection}
        tableAlertRender={cunstomTableAlertRender}
        tableAlertOptionRender={cunstomTableAlertOptionRender}
        {...rest}
      />
    </>
  );
}

export default TableCustom;
