import { Layout, Menu } from 'antd';
import React from 'react';

import './App.css';
import { SignUpComponent } from './components/auth/SignUpComponent';

const { Header, Content } = Layout;
const { Item } = Menu;

const App = () => (
    <Layout className="app-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Item key="1">nav 1</Item>
                <Item key="2">nav 2</Item>
                <Item key="3">nav 3</Item>
            </Menu>
        </Header>
        <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}
        >
            <SignUpComponent />
        </Content>
    </Layout>
);

export default App;
