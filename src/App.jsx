import { Layout, Menu } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import './App.less';
import LogoPng from './assets/images/logo_nome.png';
import CharacterComponent from './components/character/CharacterComponent';
import ListCharacterComponent from './components/listCharacter/ListCharacterComponent';
import { setId } from './reducers/characterReducer';

const { Header, Content } = Layout;
const { Item } = Menu;

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <Layout className="app-layout">
            <Header className="site-layout-header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    className="menu-header"
                    defaultSelectedKeys={['1']}
                >
                    <Item
                        key="1"
                        onClick={() => {
                            history.push('/char/list');
                        }}
                    >
                        Personagens
                    </Item>
                    <Item
                        key="2"
                        onClick={() => {
                            window.open(
                                'https://homebrewery.naturalcrit.com/share/uIUFJTMizrCk',
                                '_blank'
                            );
                        }}
                    >
                        Manual
                    </Item>
                    <Item key="3" disabled>
                        Mesas
                    </Item>
                </Menu>
                <img
                    style={{ width: '145px', marginRight: '10px' }}
                    src={LogoPng}
                    alt=""
                />
            </Header>
            <Content
                className="site-layout-header"
                style={{
                    padding: '24px 0',
                    minHeight: 280,
                }}
            >
                <Switch>
                    <Route
                        exact
                        path="/char/create"
                        render={() => {
                            dispatch(setId(null));
                            return <CharacterComponent />;
                        }}
                    />
                    <Route
                        exact
                        path="/char/edit/:id"
                        render={(props) => {
                            dispatch(setId(props.match.params.id));
                            return <CharacterComponent />;
                        }}
                    />
                    <Route
                        exact
                        path="/char/list"
                        component={ListCharacterComponent}
                    />
                    <Redirect to="/char/list" />
                </Switch>
            </Content>
        </Layout>
    );
};

export default App;
