import { Outlet, useLocation, useModel } from '@umijs/max';
import { ConfigProvider, NavBar, Space, TabBar, Tag } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import { FC, useState } from 'react';
import { history } from 'umi';
import styles from './index.less';

import {
  AppOutline,
  BankcardOutline,
  BillOutline,
  UserOutline,
} from 'antd-mobile-icons';

export default () => {
  const localT = useLocation();
  console.log('localT', localT);
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: 'page2',
      title: '页面',
      icon: <BankcardOutline />,
    },
    {
      key: 'page3',
      title: '页面',
      icon: <BillOutline />,
    },
    {
      key: 'page4',
      title: '页面',
      icon: <UserOutline />,
    },
    {
      key: 'access',
      title: 'Access',
      icon: <UserOutline />,
    },
  ];

  const [activeKey, setActiveKey] = useState<string>('home');
  const { lang, setLang } = useModel('model');
  const [langName, setLangName] = useState<string>('EN');

  const getTitle = () => {
    return tabs.filter((x) => x.key === activeKey).map((x) => x.title)[0];
  };

  function changLang() {
    if (lang.locale === 'en') {
      setLang(zhCN);
      setLangName('EN');
    } else if (lang.locale === 'zh-CH') {
      setLang(enUS);
      setLangName('中');
    }
  }

  const Bottom: FC = () => {
    return (
      <div className={styles.bottom}>
        <TabBar
          activeKey={activeKey}
          onChange={(index) => {
            history.push(index);
            return setActiveKey(index);
          }}
        >
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    );
  };

  const right = (
    <Space>
      <Tag
        color="primary"
        fill="outline"
        style={{ '--border-radius': '4px', fontSize: '12px', padding: '6px' }}
      >
        ACCOUNT
      </Tag>
      <Tag
        onClick={changLang}
        color="primary"
        fill="outline"
        style={{ '--border-radius': '4px', fontSize: '12px', padding: '6px' }}
      >
        {langName}
      </Tag>
    </Space>
  );

  const Hander: FC = () => {
    return (
      <NavBar backArrow={false} right={right}>
        {getTitle()}
      </NavBar>
    );
  };

  return (
    <ConfigProvider locale={lang}>
      <div className={styles.app}>
        <div className={styles.top}>
          <Hander />
        </div>
        <div className={styles.body}>
          <Outlet />
          <Bottom />
          {/* <Bottom /> */}
        </div>
        {/* <div className={styles.bottom}>
          <Bottom />
        </div> */}
      </div>
    </ConfigProvider>
  );
};
