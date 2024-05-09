import { Locale } from 'antd-mobile/es/locales/base';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import { useState } from 'react';

const Model = () => {
  const [name, setName] = useState('地方');
  const [age, setAge] = useState(99);

  const [lang, setLang] = useState<Locale>(zhCN);
  return { name, setName, age, setAge, lang, setLang };
};

export default Model;
