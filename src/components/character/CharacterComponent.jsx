import {
    FireFilled,
    UserOutlined,
    FileTextFilled,
    ExperimentFilled,
} from '@ant-design/icons';
import {
    Card,
    Form,
    Row,
    Tabs,
    Button,
    Space,
    Divider,
    Col,
    Modal,
} from 'antd';
import React, { useState } from 'react';

import CharTabComponent from './CharTabComponent';
import './CharacterComponent.css';
import DiceRollComponent from './DiceRollComponent';
import SkillTabComponent from './SkillTabComponent';

const { TabPane } = Tabs;

const CharacterComponent = () => {
    const [showDiceRoll, setShowDiceRoll] = useState(false);

    return (
        <Card
            className="character-card"
            // title={
            //     <span className="charsheet-attr-title">
            //         <Space>
            //             <FileTextFilled />
            //             Ficha de Personagem v0.1
            //         </Space>
            //     </span>
            // }
        >
            <DiceRollComponent
                setVisible={setShowDiceRoll}
                visible={showDiceRoll}
            />
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
                {/*<Divider style={{ margin: '10px 0' }} />*/}
                {/*<Row justify="center">*/}
                {/*    <Col span={12}>*/}
                {/*        <Button*/}
                {/*            onClick={() => {*/}
                {/*                setShowDiceRoll(true);*/}
                {/*            }}*/}
                {/*            type="primary"*/}
                {/*            danger*/}
                {/*            disabled*/}
                {/*        >*/}
                {/*            TODO - Dice Roll*/}
                {/*        </Button>*/}
                {/*    </Col>*/}
                {/*    <Col span={12} style={{ textAlign: 'right' }}>*/}
                {/*        <Button type="primary" htmlType="submit" disabled>*/}
                {/*            TODO - Save*/}
                {/*        </Button>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Form>
        </Card>
    );
};

export default CharacterComponent;
