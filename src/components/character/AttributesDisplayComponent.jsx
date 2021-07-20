import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, Col, Radio, Row, Button } from 'antd';
import Text from 'antd/es/typography/Text';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Dice } from '../../assets/images/d20.svg';
import AttributeEnum from '../../enums/attributeEnum';
import {
    setCurrentBonusPoints,
    setBaseAttributeValue,
    setBonusAttributes,
} from '../../reducers/characterReducer';
import {
    extractJobBonusAttributeName,
    extractBackgroundBonusAttributeName,
} from '../../utils/attributeUtils';
import './AttributesDisplayComponent.css';
import StatusIconComponent from './StatusIconComponent';

const { Group: RadioGroup } = Radio;

const AttributesDisplayComponent = () => {
    const characterStore = useSelector((state) => state.character);

    const dispatch = useDispatch();
    const {
        id,
        background,
        race,
        job,
        defective,
        enhancedAttribute,
        bonusAttributes,
    } = characterStore;

    const jobBonusAttrName = extractJobBonusAttributeName(job);
    const backgroundAttrName = extractBackgroundBonusAttributeName(background);
    const useEnhanced = race === 'Alterado';
    const disabled = !!id;

    let defectiveColor = '';
    if (useEnhanced) {
        defectiveColor = defective ? 'darkred' : 'darkgreen';
    }

    function modifyAttribute(attrName, lockChange, decrease = false) {
        const isBgAndJobFilled = job && background;
        const baseAttribute = characterStore[attrName];

        if (!lockChange && isBgAndJobFilled) {
            function updateStore(attrValue, points, updatedAttribute) {
                dispatch(
                    setBonusAttributes({
                        ...bonusAttributes,
                        [attrName]: attrValue,
                    })
                );
                dispatch(setCurrentBonusPoints(points));
                // TODO: Update base value on store
                dispatch(
                    setBaseAttributeValue({
                        attributeName: attrName,
                        attributeValue: updatedAttribute,
                    })
                );
            }
            const { currentBonusPoints } = characterStore;
            let currentValue = bonusAttributes[attrName];

            if (decrease) {
                // Decrease stats
                currentValue -= 1;
                if (currentBonusPoints < 3 && currentValue >= 0) {
                    updateStore(
                        currentValue,
                        currentBonusPoints + 1,
                        baseAttribute - 1
                    );
                }
            } else {
                // Increase stats
                currentValue += 1;
                if (currentBonusPoints > 0 && currentValue < 3) {
                    updateStore(
                        currentValue,
                        currentBonusPoints - 1,
                        baseAttribute + 1
                    );
                }
            }
        }
    }

    return (
        <RadioGroup style={{ width: '100%' }}>
            <Row className="attribute-table">
                {Object.entries(AttributeEnum).map((attr) => {
                    const baseAttributeValue = characterStore[attr[1].base];

                    // Check if the current attribute is the job base attribute
                    const isJobBaseAttr = attr[1].base === jobBonusAttrName;

                    // Check if the current attribute is the background base attribute
                    const isBgBaseAttr = attr[1].base === backgroundAttrName;

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
                                                modifyAttribute(
                                                    attr[1].base,
                                                    isBgBaseAttr || disabled,
                                                    true
                                                );
                                            }}
                                            shape="circle"
                                            disabled={disabled}
                                            type="primary"
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
                                                modifyAttribute(
                                                    attr[1].base,
                                                    isBgBaseAttr || disabled
                                                );
                                            }}
                                            shape="circle"
                                            disabled={disabled}
                                            type="primary"
                                            danger
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
