import { Avatar, Card, Col, Radio, Row, Tooltip } from 'antd';
import Text from 'antd/es/typography/Text';
import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as Dice } from '../../assets/images/d20.svg';
import AttributeEnum from '../../enums/attributeEnum';
import { calculateAttribute } from '../../utils/attributeUtils';
import './AttributesDisplayComponent.css';
import StatusIconComponent from './StatusIconComponent';

const { Group: RadioGroup } = Radio;

const AttributesDisplayComponent = (props) => {
    const {
        background,
        race,
        job,
        subclass,
        defective,
        level,
        enhancedAttribute,
    } = props;

    const useEnhanced = race === 'Alterado';

    let bonusEnhance = 0;
    let defectiveColor = '';
    if (useEnhanced) {
        bonusEnhance = defective ? -1 : 1;
        defectiveColor = defective ? 'darkred' : 'darkgreen';
    }

    return (
        <RadioGroup style={{ width: '100%' }}>
            <Row className="attribute-table">
                {Object.entries(AttributeEnum).map((attr) => {
                    const baseAttributeValue = calculateAttribute(
                        attr[1].base,
                        background,
                        race,
                        job,
                        subclass,
                        level,
                        enhancedAttribute === attr[0] ? bonusEnhance : 0
                    );
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
                                        <StatusIconComponent
                                            StatusIcon={Dice}
                                            currentValue={
                                                <Text
                                                    style={{
                                                        fontSize: '35px',
                                                    }}
                                                    strong
                                                >
                                                    {baseAttributeValue}
                                                </Text>
                                            }
                                            customIconCss={{
                                                fill: `${
                                                    enhancedAttribute ===
                                                    attr[0]
                                                        ? defectiveColor
                                                        : 'dimgrey'
                                                }`,
                                                width: '45px',
                                                margin: '5px',
                                            }}
                                            customTextCss={{
                                                top: '46%',
                                                color: '#D89614',
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
