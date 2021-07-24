import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, Col, Radio, Row, Button } from 'antd';
import Text from 'antd/es/typography/Text';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Dice } from '../../assets/images/d20.svg';
import AttributeEnum from '../../enums/attributeEnum';
import { setBonusAttribute } from '../../reducers/characterReducer';
import './AttributesDisplayComponent.css';
import StatusIconComponent from './StatusIconComponent';

const { Group: RadioGroup } = Radio;

const AttributesDisplayComponent = () => {
    const characterStore = useSelector((state) => state.character);

    const dispatch = useDispatch();
    const {
        race,
        defective,
        enhancedAttribute,
        job,
        background,
        currentBonusPoints,
        id,
    } = characterStore;

    const useEnhanced = race === 'Alterado';

    let defectiveColor = '';
    if (useEnhanced) {
        defectiveColor = defective ? 'darkred' : 'darkgreen';
    }

    const creationFlow = !id;

    return (
        <RadioGroup style={{ width: '100%' }}>
            <Row className="attribute-table">
                {Object.entries(AttributeEnum).map((attr) => {
                    const attrValues = characterStore[attr[1].init];
                    const baseAttributeValue = Object.values(attrValues).reduce(
                        (a, b) => a + b
                    );

                    // Check if the current attribute is the job base attribute
                    const isJobBaseAttr = attrValues.job > 0;

                    // Check if the current attribute is the background base attribute
                    const isBgBaseAttr = attrValues.background > 0;

                    // Check if the current attribute is the enhanced race attribute
                    const isEnhancedAttr = enhancedAttribute === attr[0];

                    let numberColor = 'white';
                    let diceTooltipMessage = '';
                    if (isJobBaseAttr) {
                        diceTooltipMessage += `Atributo bônus de classe ${job}`;
                        numberColor = 'gold';
                    }
                    if (isBgBaseAttr) {
                        diceTooltipMessage += `\nAtributo de antecedente ${background}`;
                        numberColor = '#FF7700';
                    }
                    if (isEnhancedAttr) {
                        diceTooltipMessage += '\nAtributo bônus de Alterado';
                    }

                    const disableSub =
                        isBgBaseAttr ||
                        attrValues.bonus === 0 ||
                        !creationFlow ||
                        currentBonusPoints === 3;
                    const disableAdd =
                        isBgBaseAttr ||
                        attrValues.bonus === 2 ||
                        !creationFlow ||
                        currentBonusPoints === 0;

                    return (
                        <Col key={attr[1].base} span={12}>
                            <Card
                                className="attribute-card"
                                title={attr[1].base}
                            >
                                <Row
                                    style={{ width: '100%', margin: '0 5px' }}
                                    className="center-content"
                                >
                                    <Col span={8}>
                                        <Button
                                            onClick={() => {
                                                dispatch(
                                                    setBonusAttribute({
                                                        value: -1,
                                                        attribute: attr[0],
                                                    })
                                                );
                                            }}
                                            shape="circle"
                                            type="primary"
                                            disabled={disableSub}
                                            icon={<MinusOutlined />}
                                        />
                                    </Col>
                                    <Col span={8}>
                                        <StatusIconComponent
                                            StatusIcon={Dice}
                                            currentValue={
                                                <Text
                                                    style={{
                                                        fontSize: '45px',
                                                        color: numberColor,
                                                    }}
                                                    strong
                                                >
                                                    {baseAttributeValue}
                                                </Text>
                                            }
                                            customIconCss={{
                                                fill: `${
                                                    isEnhancedAttr
                                                        ? defectiveColor
                                                        : 'dimgrey'
                                                }`,
                                                width: '55px',
                                                margin: '5px',
                                            }}
                                            customTextCss={{
                                                top: '44%',
                                            }}
                                            tooltipMessage={diceTooltipMessage}
                                        />
                                    </Col>
                                    <Col span={8}>
                                        <Button
                                            onClick={() => {
                                                dispatch(
                                                    setBonusAttribute({
                                                        value: 1,
                                                        attribute: attr[0],
                                                    })
                                                );
                                            }}
                                            shape="circle"
                                            type="primary"
                                            danger
                                            disabled={disableAdd}
                                            icon={<PlusOutlined />}
                                        />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </RadioGroup>
    );
};

export default AttributesDisplayComponent;
