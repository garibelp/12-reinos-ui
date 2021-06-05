import { Layout, Menu } from 'antd';
import React from 'react';

import './App.less';
import LogoPng from './assets/images/logo_nome.png';
import CharacterComponent from './components/character/CharacterComponent';

const { Header, Content } = Layout;
const { Item } = Menu;

const App = () => (
    <Layout className="app-layout">
        <Header className="site-layout-header">
            <Menu
                theme="dark"
                mode="horizontal"
                className="menu-header"
                defaultSelectedKeys={['1']}
            >
                <Item key="1">Personagem</Item>
                <Item key="2" disabled>
                    Mesas
                </Item>
            </Menu>
            <img
                style={{ width: '145px', marginRight: '10px' }}
                src={LogoPng}
            />
        </Header>
        <Content
            className="site-layout-header"
            style={{
                padding: '24px 0',
                minHeight: 280,
            }}
        >
            <CharacterComponent />
        </Content>
    </Layout>
);

export default App;
