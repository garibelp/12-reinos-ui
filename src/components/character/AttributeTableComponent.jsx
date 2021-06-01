import { Descriptions, Radio, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import AttributeEnum from '../../enums/attributeEnum';
import { calculateAttribute } from '../../utils/attributeUtils';

const { Item: DescItem } = Descriptions;
const { Group: RadioGroup } = Radio;

const AttributeTableComponent = (props) => {
    const [bonusAttribute, setBonusAttribute] = useState('');
    const { background, race, job, subclass, defective, level } = props;

    const useEnhanced = race === 'Alterado';

    let bonusEnhance = 0;
    if (useEnhanced) {
        bonusEnhance = defective ? -1 : 1;
    }

    return (
        <RadioGroup style={{ width: '100%' }}>
            <Descriptions size="small" layout="vertical" bordered span={2}>
                {Object.entries(AttributeEnum).map((attr) => {
                    const baseAttributeValue = calculateAttribute(
                        attr[1].base,
                        background,
                        race,
                        job,
                        subclass,
                        level,
                        bonusAttribute === attr[0] ? bonusEnhance : 0
                    );
                    return (
                        <>
                            <DescItem
                                key={`${attr[1]}-defense`}
                                className="attr-defense"
                                label={attr[1].defense}
                            >
                                {baseAttributeValue + 5}
                            </DescItem>
                            <DescItem
                                key={`${attr[1]}-base`}
                                className="attr-base"
                                label={attr[1].base}
                            >
                                {baseAttributeValue}
                                {useEnhanced && (
                                    <Tooltip title="Indicador de atributo utilizado pelo Alterado para melhoria/defeito">
                                        <Radio
                                            style={{ marginLeft: '5px' }}
                                            value={attr[0]}
                                            onClick={() =>
                                                setBonusAttribute(attr[0])
                                            }
                                        />
                                    </Tooltip>
                                )}
                            </DescItem>
                            <DescItem
                                key={`${attr[1]}-offense`}
                                className="attr-offense"
                                label={attr[1].offense}
                            >
                                {baseAttributeValue - 3}
                            </DescItem>
                        </>
                    );
                })}
            </Descriptions>
        </RadioGroup>
    );
};

AttributeTableComponent.propTypes = {
    background: PropTypes.string,
    race: PropTypes.string,
    job: PropTypes.string,
    subclass: PropTypes.string,
    defective: PropTypes.bool,
    level: PropTypes.number,
};

AttributeTableComponent.defaultProps = {
    background: '',
    race: '',
    job: '',
    subclass: '',
    defective: false,
    level: 1,
};

export default AttributeTableComponent;
