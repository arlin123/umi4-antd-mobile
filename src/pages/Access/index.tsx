import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd-mobile';

const AccessPage = () => {
  const access = useAccess();
  return (
    <div>
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
    </div>
  );
};

export default AccessPage;
