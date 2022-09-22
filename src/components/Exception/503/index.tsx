import { Result, Button } from 'antd';
import { Link } from '@umijs/max';

export default () => {
  return (
    <Result
      status="500"
      title="服务维护中..."
      subTitle="程序员已使出吃奶的力气了,请您耐心等待下哦"
      extra={
        <Button type="primary">
          <Link to="/">去首页</Link>
        </Button>
      }
    />
  );
};
