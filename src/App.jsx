import { Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import './App.less';
import LogoPng from './assets/images/logo_nome.png';
import CharacterComponent from './components/character/CharacterComponent';
import ListCharacterComponent from './components/listCharacter/ListCharacterComponent';
import LoginComponent from './components/login/LoginComponent';
import { setId } from './reducers/characterReducer';
import { authService } from './service/authService';

const { Header, Content } = Layout;
const { Item } = Menu;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            const currentUser = authService.currentUserValue;
            if (!currentUser) {
                // not logged in so redirect to login page with the return url
                return <Redirect to="/login" />;
            }

            // authorized so return component
            return <Component {...props} />;
        }}
    />
);

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        authService.currentUser.subscribe((u) => setCurrentUser(u));
    }, []);

    return (
        <Layout className="app-layout">
            <Header className="site-layout-header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    className="menu-header"
                    defaultSelectedKeys={['1']}
                >
                    {currentUser && (
                        <>
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
                        </>
                    )}
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
                    <PrivateRoute
                        exact
                        path="/char/list"
                        component={ListCharacterComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/char/create"
                        component={CharacterComponent}
                        render={() => {
                            dispatch(setId(null));
                        }}
                    />
                    <PrivateRoute
                        exact
                        path="/char/edit/:id"
                        component={() => <CharacterComponent editionFlow />}
                    />
                    <Route exact path="/login" component={LoginComponent} />
                    <Redirect to="/char/list" />
                </Switch>
            </Content>
        </Layout>
    );
};

export default App;
