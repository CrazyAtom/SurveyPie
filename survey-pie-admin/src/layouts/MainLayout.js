import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

const menuItems = [
  {
    label: <Link to="/list">설문 조사 관리</Link>,
    key: 'list',
  },
  {
    label: <Link to="/builder">빌더</Link>,
    key: 'builder',
  },
];

function MainLayout({ selectedKeys, children }) {
  const [current, setCurrent] = useState('list');

  const onMenu = (e) => {
    console.log('click ', e);
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
          theme="dark"
          onClick={onMenu}
          selectedKeys={selectedKeys}
          items={menuItems}
          mode="inline"
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
