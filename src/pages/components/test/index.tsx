import { PlusOutlined } from '@ant-design/icons'
import type {
  ProColumns,
  ProDescriptionsItemProps,
} from '@ant-design/pro-components'
import {
  ProCard,
  ProDescriptions,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components'
import { Button, message, Space, Tabs, Tag } from 'antd'
import { _axios } from 'next-dev-utils'
import { useState } from 'react'

type GithubIssueItem = {
  url: string
  id: number
  number: number
  title: string
  labels: {
    name: string
    color: string
  }[]
  state: string
  comments: number
  created_at: string
  updated_at: string
  closed_at?: string
}

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: 'serial number',
    dataIndex: 'index',
    width: 64,
    valueType: 'indexBorder',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    search: false,
  },
  {
    title: (_, type) => (type === 'table' ? 'status' : 'list status'),
    dataIndex: 'state',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      all: { text: 'All', status: 'Default' },
      open: {
        text: 'unresolved',
        status: 'Error',
      },
      closed: {
        text: 'Resolved',
        status: 'Success',
      },
    },
  },
  {
    title: 'sort by',
    key: 'direction',
    hideInTable: true,
    hideInDescriptions: true,
    dataIndex: 'direction',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      asc: 'Positive sequence',
      desc: 'Reverse order',
    },
  },
  {
    title: 'label',
    dataIndex: 'labels',
    width: 120,
    render: (_, row) => (
      <Space>
        {row.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: 'option',
    valueType: 'option',
    dataIndex: 'id',
    render: (text, row) => [
      <a href={row.url} key="show" target="_blank" rel="noopener noreferrer">
        Check
      </a>,
      <TableDropdown
        key="more"
        onSelect={(key) => message.info(key)}
        menus={[
          { key: 'copy', name: 'copy' },
          { key: 'delete', name: 'delete' },
        ]}
      />,
    ],
  },
]

const NoFoundPage: React.FC = () => {
  const [type, setType] = useState('table')
  return (
    <>
      <ProCard>
        <Tabs activeKey={type} onChange={(e) => setType(e)}>
          <Tabs.TabPane tab="table" key="table" />
          <Tabs.TabPane tab="form" key="form" />
          <Tabs.TabPane tab="descriptions" key="descriptions" />
        </Tabs>
        {['table', 'form'].includes(type) && (
          <ProTable<GithubIssueItem>
            columns={columns}
            type={type as 'table'}
            request={async (params = {}) =>
              (
                await _axios.get<{
                  data: GithubIssueItem[]
                }>('https://proapi.azurewebsites.net/github/issues', {
                  params,
                })
              ).data
            }
            pagination={{
              pageSize: 5,
            }}
            rowKey="id"
            dateFormatter="string"
            headerTitle="查询 Table"
            toolBarRender={() => [
              <Button key="3" type="primary">
                <PlusOutlined />
                新建
              </Button>,
            ]}
          />
        )}
        {type === 'descriptions' && (
          <ProDescriptions
            style={{
              background: '#fff',
            }}
            columns={columns as ProDescriptionsItemProps<GithubIssueItem>[]}
            request={async (params) => {
              const msg = await _axios.get<{
                data: GithubIssueItem[]
              }>('https://proapi.azurewebsites.net/github/issues', {
                params,
              })

              return {
                ...msg,
                data: msg?.data.data[0],
              }
            }}
          />
        )}
      </ProCard>
    </>
  )
}

export default NoFoundPage
