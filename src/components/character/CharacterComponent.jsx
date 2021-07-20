import { FireFilled, UserOutlined, ExperimentFilled } from '@ant-design/icons';
import { useQuery, useMutation } from '@apollo/client';
import {
    Card,
    Form,
    Tabs,
    notification,
    Divider,
    Row,
    Col,
    Button,
} from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
    CREATE_CHARACTER,
    UPDATE_CHARACTER,
} from '../../graphql/character/character.mutations';
import { CHARACTER } from '../../graphql/character/character.queries';
import { setCharacterInfoBlock } from '../../reducers/characterReducer';
import {
    buildLoadCharacterPayload,
    validateCharMandatoryAttributes,
} from '../../utils/attributeUtils';
import CharTabComponent from './CharTabComponent';
import './CharacterComponent.css';
import DiceRollComponent from './DiceRollComponent';
import SkillTabComponent from './SkillTabComponent';

const defaultErrorMessage =
    'Tente novamente. Caso persista o erro, entre em contato com o time de desenvolvimento.';
const { TabPane } = Tabs;

const CharacterComponent = () => {
    const [showDiceRoll, setShowDiceRoll] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const [createCharacter] = useMutation(CREATE_CHARACTER);
    const [updateCharacter] = useMutation(UPDATE_CHARACTER);

    const character = useSelector((state) => state.character);
    const { id } = character;

    // Query to retrieve char information
    const { loading } = useQuery(CHARACTER, {
        skip: !id,
        variables: { id },
        onCompleted: (d) => {
            const { character: dbCharacter } = d;
            dispatch(
                setCharacterInfoBlock(buildLoadCharacterPayload(dbCharacter))
            );
        },
        onError: (error) => {
            console.error('Error loading char:', error);
            notification.error({
                message: 'Erro ao buscar informação do personagem!',
                description: defaultErrorMessage,
            });
            history.push('/char/list');
        },
    });

    // Create/edit char mutations logic
    function saveCharacter() {
        // Validate mandatory fields
        const {
            errors,
            createPayload,
            commonPayload,
        } = validateCharMandatoryAttributes(character);
        if (errors.length > 0) {
            // Display missing fields error for user
            notification.error({
                message: <b>CAMPOS NÃO PREENCHIDOS</b>,
                description: errors.map((e, i) => (
                    <p key={`err-array-${i}`}>{e}</p>
                )),
            });
        } else {
            // Save information
            if (id) {
                // Edition flow
                updateCharacter({
                    variables: { payload: commonPayload },
                }).catch((error) => {
                    console.error(error);
                    notification.error({
                        message: 'Falha ao salvar!',
                        description: defaultErrorMessage,
                    });
                });
            } else {
                // Creation flow
                createCharacter({
                    variables: {
                        payload: { ...createPayload, ...commonPayload },
                    },
                })
                    .then((res) => {
                        const {
                            data: {
                                createCharacter: { _id },
                            },
                        } = res;
                        history.push(`/char/edit/${_id}`);
                    })
                    .catch((error) => {
                        console.error(error);
                        notification.error({
                            message: 'Falha ao salvar!',
                            description: defaultErrorMessage,
                        });
                    });
            }
        }
    }

    return (
        <Card className="character-card" loading={id && loading}>
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
                <Divider style={{ margin: '10px 0' }} />
                <Row justify="center">
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button
                            style={{ marginRight: '5px' }}
                            type="primary"
                            onClick={() => {
                                history.push('/char/list');
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button danger type="primary" onClick={saveCharacter}>
                            Salvar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default CharacterComponent;
