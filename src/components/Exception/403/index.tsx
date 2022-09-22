import { Result, Button } from 'antd';
import { Link } from '@umijs/max';

export default () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="你没有此页面的访问权限"
      extra={
        <Button type="primary">
          <Link to="/">去首页</Link>
        </Button>
      }
    />
  );
};
