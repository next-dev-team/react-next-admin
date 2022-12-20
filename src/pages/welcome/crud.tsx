import FormCrud from 'next-dev-antd-ui/dist/FormCrud'
import { useRef, useState } from 'react'

import type {
  ActionType,
  BetaSchemaForm,
  ProColumns,
} from '@ant-design/pro-components'
import { useForm } from 'antd/es/form/Form'

import enUSIntl from 'antd/es/locale/en_US'
import kmKHIntl from 'antd/es/locale/km_KH'
import dayjs from 'dayjs'

interface ResData {
  data: Datum[]
}

interface Datum {
  state: string
  id: number
  status: string
  user_created?: any
  date_created: string
  user_updated: string
  date_updated: string
  title: string
  photo: string
  iframeUr?: any
  short_description: string
  description: string
}

type Filter = Datum
const ASSETS = 'https://dwmniez7.directus.app/assets/'

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
}

const intlMap = {
  kmKHIntl,
  enUSIntl,
}

export default function DemoCrud() {
  const [form] = useForm<Datum>()
  const actionRef = useRef<ActionType>()
  const [intl, setIntl] = useState<keyof typeof intlMap>('enUSIntl')

  const columns: (React.ComponentProps<
    typeof BetaSchemaForm<Datum>
  >['columns'][0] & {
    dataIndex?: keyof Datum | 'list'
    customRenderType?: 'tag' | 'formList'
  } & Omit<ProColumns<Datum>, 'valueType'>)[] = [
    {
      title: 'No',
      valueType: 'indexBorder',
      width: '10%',
    },

    {
      order: 6,
      width: '10%',
      title: 'Name',
      dataIndex: 'title',
      tip: 'The title will automatically shrink if it is too long',
      formItemProps: {
        rules: [{ required: true }],
      },
      hideInSearch: false,
      copyable: true,
    },
    {
      order: 2,
      width: '10%',
      title: 'Photo',
      dataIndex: 'photo',
      valueType: { type: 'image', width: 70 },
      formItemProps: {
        rules: [{ required: true }],
        name: 'photo',
      },
    },
    {
      order: 4,
      width: '30%',
      title: 'Short Description',
      dataIndex: 'short_description',
      valueType: 'textarea',
      ellipsis: true,
    },
    {
      order: 3,
      width: '20%',
      title: 'Modified date',
      dataIndex: 'date_updated',
      valueType: 'date',
    },
    {
      order: 5,
      width: '10%',
      title: 'state',
      dataIndex: 'state',
      initialValue: 'all',
      filters: true,
      onFilter: true,
      valueEnum: {
        all: { text: 'All', status: 'Default' },
        close: { text: 'close', status: 'Default' },
        running: { text: 'running', status: 'Processing' },
        online: { text: 'Online', status: 'Success' },
        error: { text: 'Exception', status: 'Error' },
      },
    },
    {
      width: '10%',
      title: 'List',
      align: 'center',
      valueType: 'formList',
      dataIndex: 'list',
      ellipsis: true,

      initialValue: [{ state: 'all', title: 'title' }],
      columns: [
        {
          valueType: 'group',
          colProps: { span: 24 },
          columns: [
            {
              title: 'status',
              dataIndex: 'state',
              valueType: 'select',
              valueEnum,
            },
            {
              title: 'title',
              dataIndex: 'title',
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: 'This item is required',
                  },
                ],
              },
            },
          ],
        },
        {
          valueType: 'dateTime',
          initialValue: new Date(),
          dataIndex: 'currentTime',
        },
      ],
    },
    {
      order: 1,
      width: '10%',
      title: 'Status',
      hideInSearch: false,
      dataIndex: 'status',
      valueType: 'select',
      customRenderType: 'tag',
      formItemProps: {
        rules: [{ required: true }],
      },
      sorter: true,
      fieldProps: {
        options: [
          {
            value: 'published',
            label: 'Published',
          },
          {
            value: 'draft',
            label: 'Draft',
          },
        ],
      },
    },
  ]

  // <ConfigProvider locale={intlMap[intl]}>

  return (
    <FormCrud<Datum, Filter>
      // manage form, setFieldsValue, resetFields ....
      form={form}
      // actionRef manage reload or refetch data, filter....
      actionRef={actionRef}
      // manage all column and render form, filter...
      columns={columns as any}
      options={{
        search: true,
      }}
      headerTitle={
        <Space>
          <span>Advance Table</span>
          <Select<keyof typeof intlMap>
            defaultActiveFirstOption
            bordered={false}
            value={intl}
            onChange={(value) => {
              dayjs.locale(intlMap[value].locale)
              setIntl(value)
            }}
            options={Object.keys(intlMap).map((value) => ({
              value,
              label: value,
            }))}
          />
        </Space>
      }
      tableExtraRender={(_, data) => (
        <Card>
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Row">{data.length}</Descriptions.Item>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">
              2017-01-10
            </Descriptions.Item>
            <Descriptions.Item label="Effective Time">
              2017-10-10
            </Descriptions.Item>
          </Descriptions>
        </Card>
      )}
      // custom config, params, to _axios request
      requestConfig={(returnVal) => {
        const value = returnVal as unknown as ResData & typeof returnVal
        console.log('requestConfig', value)

        const idField = value?.id || value?.record?.id

        return {
          // common
          headers: {
            Authorization: 'Bearer D5UspbnsDoF-PMLpPSESE072T6vky2DJ',
          },
          baseURL: 'https://dwmniez7.directus.app/items',

          // getConfig
          getConfig: {
            url: '/blog',
            requestReturn: {
              data: value?.data?.map?.((i) => {
                return {
                  ...i,
                  photo: ASSETS + i?.photo,
                  //@ts-ignore
                  state: valueEnum[Math.floor(Math.random() * 10) % 4],
                }
              }),
              total: 10,
            },
          },
          addConfig: {
            params: {
              status: 'published',
              title: 'hello',
              short_description: 'bg',
              description: '<p>j</p>',
              photo: '5c2a896e-b3f4-4098-9ddf-7cefda50905c',
            },
          },

          // delete
          deleteUrl: `/blog/${idField}`,

          //edit
          editUrl: `/blog/${idField}`,
          editMethod: 'put',
          editParam: {
            ..._omit(value, 'record'),
          },
        }
      }}
      // manage actions (fixed at the right)
      actions={{
        // add more action to dropdown 3 dot
        moreOptMenu: (val) => {
          return [
            {
              key: 'check',
              name: 'check',
              icon: <CheckCircleOutlined />,
              onClick: () => {
                _notification.info({
                  message: 'action click',
                  description: (
                    <Typography.Paragraph code>
                      {JSON.stringify(val)}
                    </Typography.Paragraph>
                  ),
                })

                console.log('moreOptMenu check', val)
              },
            },
          ]
        },
      }}
    />
  )
}
