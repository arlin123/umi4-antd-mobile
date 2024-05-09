import { DemoBlock } from '@/components';
import { useModel } from '@umijs/max';
import {
  Button,
  Dialog,
  ErrorBlock,
  Input,
  Modal,
  NoticeBar,
  Popup,
} from 'antd-mobile';
import { useState } from 'react';

export default () => {
  const { name, setName } = useModel('model');
  const [value, setValue] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <>
      <DemoBlock title="超长滚动" padding="0">
        <NoticeBar
          content={`适用于当前页面内信息的通知，是一种较醒目的页面内通知方式`}
          color="alert"
        />
      </DemoBlock>
      <DemoBlock title=" 设置全局状态值 （useModel）">
        <div>当前状态值： {name}</div>
        <Input
          placeholder="请输入要修改的名称"
          onChange={(val) => {
            setValue(val);
          }}
        />
        <Button
          onClick={() => {
            setName(value);
          }}
        >
          确定
        </Button>
      </DemoBlock>
      <br />
      <DemoBlock title="语言 、右上角切换语言">
        <ErrorBlock status="disconnected" />
      </DemoBlock>

      <DemoBlock title="弹窗">
        <Button
          block
          onClick={() => {
            Dialog.alert({
              content: '点击遮罩关闭',
              closeOnMaskClick: true,
            });
          }}
        >
          点击遮罩关闭
        </Button>
        <br />
        <Button
          block
          onClick={() =>
            Modal.alert({
              content: '人在天边月上明',
              onConfirm: () => {
                console.log('Confirmed');
              },
            })
          }
        >
          最简单的弹窗
        </Button>
        <br />

        <Popup
          visible={popupVisible}
          // onMaskClick={() => {
          //   setPopupVisible(false)
          // }}
          bodyStyle={{
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            minHeight: '40vh',
            fontSize: '16px',
          }}
          showCloseButton
          onClose={() => {
            setPopupVisible(false);
          }}
        >
          <div style={{ padding: '24px' }}> 内容</div>
        </Popup>

        <Button
          onClick={() => {
            setPopupVisible(true);
          }}
        >
          圆角的弹出层
        </Button>
      </DemoBlock>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
