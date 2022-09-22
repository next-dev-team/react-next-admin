import { Result, Button } from 'antd';
import { Link } from '@umijs/max';

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="此页面未找到"
      extra={
        <Button type="primary">
          <Link to="/">去首页</Link>
        </Button>
      }
    />
  );
};
