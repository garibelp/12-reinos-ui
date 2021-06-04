import {
    FireFilled,
    UserOutlined,
    FileTextFilled,
    ExperimentFilled,
} from '@ant-design/icons';
import { Card, Form, Row, Tabs, Button, Space, Divider } from 'antd';
import React from 'react';

import CharTabComponent from './CharTabComponent';
import './CharacterComponent.css';
import SkillTabComponent from './SkillTabComponent';

const { TabPane } = Tabs;

const CharacterComponent = () => {
    return (
        <Card
            className="character-card"
            title={
                <span className="charsheet-attr-title">
                    <Space>
                        <FileTextFilled />
                        Ficha de Personagem v0.1
                    </Space>
                </span>
            }
        >
            <Form size="small" labelCol={{ span: 9 }} wrapperCol={{ span: 15 }}>
                <Tabs defaultActiveKey="1" type="card" centered>
                    <TabPane
                        key="1"
                        tab={
                            <span className="charsheet-attr-title">
                                <UserOutlined />
                                Personagem
                            </span>
                        }
                    >
                        <CharTabComponent />
                    </TabPane>
                    <TabPane
                        key="2"
                        tab={
                            <span>
                                <FireFilled />
                                Habilidades
                            </span>
                        }
                    >
                        <SkillTabComponent />
                    </TabPane>
                    <TabPane
                        key="3"
                        disabled
                        tab={
                            <span>
                                <ExperimentFilled />
                                Itens
                            </span>
                        }
                    >
                        TODO: Items
                    </TabPane>
                </Tabs>
                <Divider />
                <Row style={{ justifyContent: 'center' }}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            TODO - Save
                        </Button>
                    </Space>
                </Row>
            </Form>
        </Card>
    );
};

export default CharacterComponent;
