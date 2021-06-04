import { Layout, Menu } from 'antd';
import React from 'react';

import './App.less';
import CharacterComponent from './components/character/CharacterComponent';

const { Header, Content } = Layout;
const { Item } = Menu;

const App = () => (
    <Layout className="app-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Item key="2" disabled>
                    Personagens
                </Item>
                <Item key="1">Ficha Atual</Item>
                <Item key="3" disabled>
                    Mesas
                </Item>
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
            <CharacterComponent />
        </Content>
    </Layout>
);

export default App;
