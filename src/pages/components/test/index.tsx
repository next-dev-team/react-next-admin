import { Result } from 'antd'
import React from 'react'

const NoFoundPage: React.FC = () => (
  <>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  </>
)

export default NoFoundPage
