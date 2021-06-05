import { MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import { Checkbox, Col, Progress, Row, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import './CircularProgressComponent.css';

const CircularProgressComponent = (props) => {
    const { minusClick, plusClick, currentPoints, maxPoints } = props;
    return (
        <div className="circular-progress">
            <MinusCircleFilled
                className="change-status-button"
                onClick={minusClick}
            />
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
            <PlusCircleFilled
                className="change-status-button"
                onClick={plusClick}
            />
        </div>
    );
};

CircularProgressComponent.propTypes = {
    minusClick: PropTypes.func,
    plusClick: PropTypes.func,
    currentPoints: PropTypes.number,
    maxPoints: PropTypes.number,
};

CircularProgressComponent.defaultProps = {
    minusClick: () => {},
    plusClick: () => {},
    currentPoints: 0,
    maxPoints: 0,
};

export default CircularProgressComponent;
