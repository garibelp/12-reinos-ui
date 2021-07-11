import { MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import { Avatar, Card, Col, Radio, Row, Tooltip } from 'antd';
import Text from 'antd/es/typography/Text';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Dice } from '../../assets/images/d20.svg';
import AttributeEnum from '../../enums/attributeEnum';
import {
    setBonusAttributes,
    setCurrentBonusPoints,
} from '../../reducers/characterReducer';
import {
    calculateAttribute,
    extractJobBonusAttributeName,
    extractBackgroundBonusAttributeName,
} from '../../utils/attributeUtils';
import './AttributesDisplayComponent.css';
import StatusIconComponent from './StatusIconComponent';

const { Group: RadioGroup } = Radio;

const AttributesDisplayComponent = (props) => {
    const { bonusAttributes, currentBonusPoints } = useSelector(
        (state) => state.character
    );
    const dispatch = useDispatch();
    const {
        background,
        race,
        job,
        subclass,
        defective,
        level,
        enhancedAttribute,
    } = props;

    const jobBonusAttrName = extractJobBonusAttributeName(job);
    const backgroundAttrName = extractBackgroundBonusAttributeName(background);
    const useEnhanced = race === 'Alterado';

    let bonusEnhance = 0;
    let defectiveColor = '';
    if (useEnhanced) {
        bonusEnhance = defective ? -1 : 1;
        defectiveColor = defective ? 'darkred' : 'darkgreen';
    }

    function modifyAttribute(attrName, lockChange, decrease = false) {
        const isBgAndJobFilled = job && background;

        if (!lockChange && isBgAndJobFilled) {
            function updateStore(attrValue, points) {
                dispatch(setCurrentBonusPoints(points));
                dispatch(
                    setBonusAttributes({
                        ...bonusAttributes,
                        [attrName]: attrValue,
                    })
                );
            }

            let currentValue = bonusAttributes[attrName];

            if (decrease) {
                // Decrease stats
                currentValue -= 1;
                if (currentBonusPoints < 3 && currentValue >= 0) {
                    updateStore(currentValue, currentBonusPoints + 1);
                }
            } else {
                // Increase stats
                currentValue += 1;
                if (currentBonusPoints > 0 && currentValue < 3) {
                    updateStore(currentValue, currentBonusPoints - 1);
                }
            }
        }
    }

    return (
        <RadioGroup style={{ width: '100%' }}>
            <Row className="attribute-table">
                {Object.entries(AttributeEnum).map((attr) => {
                    const baseAttributeValue =
                        calculateAttribute(
                            attr[1].base,
                            background,
                            race,
                            job,
                            subclass,
                            level,
                            enhancedAttribute === attr[0] ? bonusEnhance : 0
                        ) + bonusAttributes[attr[1].base];

                    // Check if the current attribute is the job base attribute
                    const isJobBaseAttr = attr[1].base === jobBonusAttrName;

                    // Check if the current attribute is the background base attribute
                    const isBgBaseAttr = attr[1].base === backgroundAttrName;

                    // Check if the current attribute is the enhanced race attribute
                    const isEnhancedAttr = enhancedAttribute === attr[0];

                    let diceTooltipMessage = '';
                    if (isJobBaseAttr) {
                        diceTooltipMessage += `Atributo bônus de classe ${job}`;
                    }
                    if (isBgBaseAttr) {
                        diceTooltipMessage += `\nAtributo de antecedente ${background}`;
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
                                        <Tooltip
                                            placement="bottom"
                                            title={attr[1].defense}
                                        >
                                            <Avatar className="attr-def-avatar">
                                                {baseAttributeValue + 5}
                                            </Avatar>
                                        </Tooltip>
                                    </Col>
                                    <Col span={8}>
                                        <PlusCircleFilled
                                            style={{ marginBottom: '6px' }}
                                            onClick={() => {
                                                modifyAttribute(
                                                    attr[1].base,
                                                    isBgBaseAttr
                                                );
                                            }}
                                        />
                                        <StatusIconComponent
                                            StatusIcon={Dice}
                                            currentValue={
                                                <Text
                                                    style={{
                                                        fontSize: '35px',
                                                        color:
                                                            isJobBaseAttr ||
                                                            isBgBaseAttr
                                                                ? 'gold'
                                                                : 'white',
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
                                                width: '45px',
                                                margin: '5px',
                                            }}
                                            customTextCss={{
                                                top: '46%',
                                            }}
                                            tooltipMessage={diceTooltipMessage}
                                        />
                                        <MinusCircleFilled
                                            onClick={() => {
                                                modifyAttribute(
                                                    attr[1].base,
                                                    isBgBaseAttr,
                                                    true
                                                );
                                            }}
                                        />
                                    </Col>
                                    <Col span={8}>
                                        <StatusIconComponent
                                            tooltipMessage={attr[1].offense}
                                            StatusIcon={Dice}
                                            customIconCss={{
                                                fill: '#141414',
                                                width: '32px',
                                                margin: 0,
                                            }}
                                            customTextCss={{
                                                top: '46%',
                                                color: '#D89614',
                                            }}
                                            currentValue={(
                                                baseAttributeValue - 3
                                            ).toString()}
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

AttributesDisplayComponent.propTypes = {
    background: PropTypes.string,
    race: PropTypes.string,
    job: PropTypes.string,
    subclass: PropTypes.string,
    defective: PropTypes.bool,
    level: PropTypes.number,
    enhancedAttribute: PropTypes.string,
};

AttributesDisplayComponent.defaultProps = {
    background: '',
    race: '',
    job: '',
    subclass: '',
    defective: false,
    level: 1,
    enhancedAttribute: '',
};

export default AttributesDisplayComponent;
