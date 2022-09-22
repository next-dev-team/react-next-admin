import { Result, Button } from 'antd';
import { Link } from '@umijs/max';

export default () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="服务器发生了错误"
      extra={
        <Button type="primary">
          <Link to="/">去首页</Link>
        </Button>
      }
    />
  );
};
