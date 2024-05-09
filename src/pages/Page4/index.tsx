import { Avatar, Button, Space } from 'antd-mobile';
import { useModel } from 'umi';

const Page = () => {
  const { name, setName } = useModel('model');
  return (
    <div>
      <Space block direction="vertical">
        <Avatar src="" />
      </Space>

      <div>{name}</div>
      <p>This is umi docs.</p>
      <Button
        onClick={() => {
          setName('docs');
        }}
      >
        确定
      </Button>
    </div>
  );
};

export default Page;
