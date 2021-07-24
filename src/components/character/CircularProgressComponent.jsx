import { MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import { Progress, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import './CircularProgressComponent.css';

const CircularProgressComponent = (props) => {
    const {
        minusClick,
        plusClick,
        currentPoints,
        maxPoints,
        disabled,
        minusIconTooltip,
        plusIconTooltip,
    } = props;

    return (
        <div className="circular-progress">
            <Tooltip title={minusIconTooltip} placement="bottom">
                <MinusCircleFilled
                    className="change-status-button"
                    onClick={() => {
                        if (!disabled) minusClick();
                    }}
                />
            </Tooltip>
            <Progress
                type="dashboard"
                strokeColor={{
                    '0%': 'green',
                    '50%': 'yellow',
                    '100%': 'red',
                }}
                width={50}
                percent={maxPoints > 0 ? (currentPoints / maxPoints) * 100 : 0}
                format={() => `${currentPoints || 0}/${maxPoints || 0}`}
            />
            <Tooltip title={plusIconTooltip} placement="bottom">
                <PlusCircleFilled
                    className="change-status-button"
                    onClick={() => {
                        if (!disabled) plusClick();
                    }}
                />
            </Tooltip>
        </div>
    );
};

CircularProgressComponent.propTypes = {
    minusClick: PropTypes.func,
    plusClick: PropTypes.func,
    currentPoints: PropTypes.number,
    maxPoints: PropTypes.number,
    disabled: PropTypes.bool,
    minusIconTooltip: PropTypes.string,
    plusIconTooltip: PropTypes.string,
};

CircularProgressComponent.defaultProps = {
    minusClick: () => {},
    plusClick: () => {},
    currentPoints: 0,
    maxPoints: 0,
    disabled: false,
    minusIconTooltip: null,
    plusIconTooltip: null,
};

export default CircularProgressComponent;
