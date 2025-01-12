import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Sider } = Layout;

const items = [
  { key: 'list', label: '설문 조사 관리' },
  { key: 'builder', label: '빌더' },
];

function MainLayout({ children }) {
  const [current, setCurrent] = useState('list');
  const onClick = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible>
        <div
          className="logo"
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
            radius: 6,
          }}
        />
        <Menu
          onClick={onClick}
          theme="dark"
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
