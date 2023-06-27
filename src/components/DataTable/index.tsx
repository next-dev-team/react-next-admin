import DeleteOutlined from '@ant-design/icons/DeleteOutlined'
import EditFilled from '@ant-design/icons/EditFilled'
import EyeFilled from '@ant-design/icons/EyeFilled'
import PlusOutlined from '@ant-design/icons/PlusOutlined'

import { useMediaQuery } from '@/hooks/useMediaQr'
import {
  ActionType,
  ProDescriptions,
  ProTable,
  BetaSchemaForm as SchemaForm,
  TableDropdown,
} from '@ant-design/pro-components'
import { useLockFn, useMemoizedFn } from 'ahooks'
import {
  Button,
  Modal,
  Popconfirm,
  Space,
  Tag,
  Typography,
  message,
  notification,
  theme,
} from 'antd'
import { MutableRefObject, useMemo, useRef } from 'react'
import { useSearchParams } from 'umi'
import StatisticCard from './StatisticCard'
import TblExport from './export'
import { IDataTable } from './type'

const DataTable = <
  TData extends Record<any, any>,
  TDataList,
  TEditData = Record<any, any>,
  TDetail = any,
>(
  props: IDataTable.PageProps<TData, TDataList, TEditData, TDetail>,
) => {
  const {
    toolBarProps,
    state,
    crudProps,
    columns = [],
    columnsOptions,
    axios,
    ...tblProProps
  } = props
  const listActionRef = tblProProps.actionRef as MutableRefObject<ActionType>

  const {
    actionsRender = [],
    actionColProps = {},
    resDetailFieldKey = ['data'],
    resListFiledKey = ['data'],
    listTotal,
    deleteUrl,
    crudId = 'id',
    onModeChange,
    addEditProps,
    detailProp,
    listProps,
  } = crudProps || {}

  const detailRef = useRef<ActionType>()
  const { isSmUp } = useMediaQuery()
  const [params, setParams] = useSearchParams()
  const { token } = theme.useToken()

  const {
    editTitle,
    addConfigs,
    editConfigs,
    uiProps = {},
    editResponse,
  } = addEditProps || {}
  const { detailTitle, desProps = {}, viewConfigs } = detailProp || {}
  const { listResponse, listConfigs } = listProps || {}

  const { isEditMode, isViewMode, isAddMode } = useMemo(() => {
    const openCrudModal = state.openCrudModal
    const crudType = state.crudType
    const modes = {
      edit: openCrudModal && crudType === 'edit',
      view: openCrudModal && crudType === 'view',
      add: openCrudModal && crudType === 'add',
    }
    return {
      isEditMode: modes.edit,
      isViewMode: modes.view,
      isAddMode: modes.add,
    }
  }, [state.openCrudModal, state.crudType])

  const setCrudMode = (
    type: IDataTable.CrudType | 'reset',
    row: Partial<TData>,
  ) => {
    state.row = row

    if (type === 'view') {
      detailRef.current?.reload()
    }
    if (type === 'reset') {
      state.openCrudModal = false
      state.row = {}
      state.crudType = 'table'
      crudProps.form.resetFields()
    } else if (type === 'add') {
      state.openCrudModal = true
      state.row = {}
      crudProps.form.resetFields()
      state.crudType = type
    } else {
      state.openCrudModal = true
      state.crudType = type
    }
    // callback fn every mode change
    onModeChange?.(state)
  }

  const onClickEdit = useMemoizedFn((row: TData) => {
    setCrudMode('edit', row)
    if (editConfigs) {
      state.loadingEdit = true
      axios
        .request({ method: 'get', ...editConfigs(row) })
        .then((res) => {
          const getRes = editResponse?.(res) as any
          console.log('getRes', getRes)
          crudProps.form.setFieldsValue(getRes)
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          state.loadingEdit = false
        })
    } else {
      crudProps.form.setFieldsValue(editResponse?.(row as any) as any)
    }
  })

  const onClickDelete = (row: TEditData) => {
    if (deleteUrl) {
      state.loadingDelete = true
      axios
        .delete(deleteUrl(row))
        .then(() => {
          message.success('Delete operation successfully')
        })
        .catch((err) => {
          console.error(err)
          const errMsg = err.message || 'Delete operation failed'
          message.error(errMsg)
        })
        .finally(() => {
          listActionRef.current.reload()
          state.loadingDelete = false
        })
    }
  }

  const getColumns = useMemo(() => {
    const allCols = [
      ...columns.map((colItem) => {
        if (colItem?.renderStatistic) {
          colItem.render = (_, entity) => {
            // const { ...tagItems } = colItem?.renderStatistic(entity) || {}
            return <StatisticCard />
          }
        }

        if (colItem?.renderTag) {
          colItem.render = (_, entity) => {
            const {
              data,
              direction = 'horizontal',
              ...tagItems
            } = colItem?.renderTag(entity) || {}
            const renderTag = (
              <Tag
                className="capitalize min-w-[50px] text-center"
                {...tagItems}
              >
                {tagItems?.children || '-'}
              </Tag>
            )
            // multiple tags
            if (Array.isArray(data)) {
              return (
                <Space align="center" size="small" direction={direction}>
                  {data.map((i, tagKey) => {
                    return (
                      <Tag
                        key={tagKey}
                        className="capitalize min-w-[50px] text-center"
                        {...tagItems}
                      >
                        {i}
                      </Tag>
                    )
                  })}
                </Space>
              )
            }
            return renderTag
          }
        }
        return { ...colItem, ...columnsOptions }
      }),
      {
        fixed: 'right',
        title: 'Actions',
        align: 'center',
        width: 120,
        valueType: 'option',
        className: 'print:hidden block',
        render: (_, row) => {
          return [
            <Button
              shape="circle"
              key="view"
              size="small"
              onClick={() => setCrudMode('view', row)}
            >
              <EyeFilled style={{ color: token.colorInfo, fontSize: 20 }} />
            </Button>,
            <Button
              type="primary"
              shape="circle"
              key="edit"
              size="small"
              loading={
                state.loadingEdit && row?.[crudId] === state?.row?.[crudId]
              }
              onClick={() => onClickEdit(row)}
            >
              <EditFilled style={{ color: 'white', fontSize: 15 }} />
            </Button>,
            <TableDropdown
              key={'export'}
              menus={[
                {
                  disabled: state.loadingDelete,
                  key: 'delete',
                  name: (
                    <Popconfirm
                      title="Are you sure to delete?"
                      onConfirm={() => onClickDelete(row as any)}
                      trigger={['click']}
                    >
                      <DeleteOutlined
                        style={{
                          color: token.colorError,
                          fontSize: token.fontSizeLG,
                        }}
                      />
                    </Popconfirm>
                  ),
                },
              ]}
            />,
            ...actionsRender,
          ].filter(Boolean)
        },
        ...actionColProps,
      },
    ] as IDataTable.CustomColumns<TData, 'text'>[]

    return allCols
  }, [columns, columnsOptions])

  const onFinishAddOrEdit = useMemoizedFn(async (values: TEditData) => {
    const isAddMode = state.crudType === 'add'
    if (addConfigs && isAddMode) {
      state.loadingAdd = true
      const getConfigs = addConfigs(values)
      axios
        .request({
          method: 'post',
          params: { ...values },
          ...getConfigs,
        })
        .then(() => {
          notification.success({
            message: 'Success',
            description: 'Operation successfully',
          })

          setCrudMode('reset', {})
        })
        .catch((e) => {
          console.error(e)
          const errData = Array.isArray(e?.response?.data?.data)
            ? (e?.response?.data?.data as any[])
            : [e?.response?.data?.data || {}]
          const Msg = (
            <Space direction="vertical">
              {errData.map((errItem, key) => {
                return (
                  <div className="space-x-1" key={key}>
                    <Typography.Text strong className="capitalize">
                      {errItem?.field}:
                    </Typography.Text>
                    <Typography.Text type="danger">
                      {errItem?.message}
                    </Typography.Text>
                  </div>
                )
              })}
            </Space>
          )

          notification.error({
            message: 'Invalid',
            description: Msg,
          })
        })
        .finally(() => {
          listActionRef.current.reload()
          state.loadingAdd = false
        })
    }
    // edit mode
    else {
      state.loadingEditSubmit = true
      axios
        .request({
          method: 'put',
          ...editConfigs?.(state.row as any, values),
        })
        .then(() => {
          notification.success({
            message: 'Success',
            description: 'Operation successfully',
          })

          setCrudMode('reset', {})
        })
        .catch((e) => {
          console.error(e)
          const errData = Array.isArray(e?.response?.data?.data)
            ? (e?.response?.data?.data as any[])
            : [e?.response?.data?.data || {}]
          const Msg = (
            <Space direction="vertical">
              {errData.map((errItem, key) => {
                return (
                  <div className="space-x-1" key={key}>
                    <Typography.Text strong className="capitalize">
                      {errItem?.field}:
                    </Typography.Text>
                    <Typography.Text type="danger">
                      {errItem?.message}
                    </Typography.Text>
                  </div>
                )
              })}
            </Space>
          )

          notification.error({
            message: 'Invalid',
            description: Msg,
          })
        })
        .finally(() => {
          listActionRef.current.reload()
          state.loadingEditSubmit = false
        })
    }
  })

  const requestView = useLockFn(async (...args) => {
    const response = await axios(viewConfigs?.(state?.row, args))
    const getRes = resDetailFieldKey.reduce(
      (obj, level) => obj[level],
      response.data,
    )
    return {
      data: getRes || [],
      success: true,
    }
  })

  return (
    <>
      {(isAddMode || (isEditMode && !state.loadingEdit)) && (
        <SchemaForm<TEditData>
          submitter={{ submitButtonProps: { loading: state.loadingAdd } }}
          onFinish={onFinishAddOrEdit}
          form={crudProps.form as any}
          columns={columns as any}
          layoutType="ModalForm"
          open={state.openCrudModal}
          modalProps={{
            onCancel(_) {
              state.openCrudModal = false
              state.crudType = 'table'
            },
          }}
          {...{
            rowProps: {
              gutter: [10, 2],
            },
            colProps: {
              span: 12,
            },
            grid: isSmUp,
            ...(uiProps || ({} as any)),
          }}
          title={
            isEditMode ? editTitle ?? addEditProps?.title : addEditProps?.title
          }
        />
      )}

      <Modal
        open={isViewMode}
        width="70%"
        title={detailTitle || 'View'}
        onCancel={() => setCrudMode('reset', {})}
      >
        <ProDescriptions
          actionRef={detailRef}
          columns={columns as any}
          request={requestView}
          {...desProps}
        />
      </Modal>

      <ProTable<TData>
        id="data-table"
        search={{
          labelWidth: 'auto',
        }}
        beforeSearchSubmit={(params) => {
          const { pageSize, _timestamp, ...filter } = params || {}
          state.filter = { ...(filter as TData) }
          listActionRef.current?.reload()
        }}
        columns={getColumns}
        request={async (params, ...args) => {
          const response = await axios.request(
            listConfigs({ ...state.filter, ...params }, ...args),
          )
          if (listResponse) {
            const getVal = listResponse?.(response)
            state.dataSource = getVal?.data || []

            return {
              ...getVal,
              success: true,
            }
          }
          const getRes = resListFiledKey.reduce(
            (obj, level) => obj[level],
            response,
          )
          // console.log("list response", getRes);

          return {
            data: getRes.data || [],
            success: true,
            total: listTotal,
          }
        }}
        options={{
          fullScreen: true,
          setting: { draggable: true },
        }}
        pagination={{
          defaultPageSize: 10,
          current: Number(params.get('current')) || 1,
          pageSize: Number(params?.get('pageSize')) || 10,
          showQuickJumper: true,
        }}
        onChange={(e) => {
          // console.log("ee", e);
          setParams({ pageSize: e?.pageSize, current: e?.current })
        }}
        scroll={{ x: true }}
        rowKey="id"
        dateFormatter="string"
        headerTitle="Data Table"
        toolBarRender={() =>
          [
            <TblExport key="export" {...props} />,
            <Button
              key={'crud'}
              type="primary"
              onClick={() => {
                if (toolBarProps?.onAddClick) {
                  toolBarProps?.onAddClick()
                } else {
                  setCrudMode('add', {})
                }
              }}
              icon={<PlusOutlined />}
            >
              Add
            </Button>,
          ].filter(Boolean)
        }
        {...tblProProps}
      />
    </>
  )
}

export default DataTable
