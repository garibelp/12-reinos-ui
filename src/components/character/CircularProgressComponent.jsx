import { MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import { Checkbox, Col, Progress, Row, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import './CircularProgressComponent.css';

const checkBoxField = (success = false) => {
    return (
        <Tooltip
            title={`${
                success ? 'Sucessos' : 'Falhas'
            } em testes contra a morte`}
        >
            <Checkbox.Group>
                <Row>
                    <Col span={24}>
                        <Checkbox
                            className={`test-checkbox-${success ? 's' : 'e'}`}
                            value="1"
                        />
                    </Col>
                    <Col span={24}>
                        <Checkbox
                            className={`test-checkbox-${success ? 's' : 'e'}`}
                            value="2"
                        />
                    </Col>
                    <Col span={24}>
                        <Checkbox
                            className={`test-checkbox-${success ? 's' : 'e'}`}
                            value="3"
                        />
                    </Col>
                </Row>
            </Checkbox.Group>
        </Tooltip>
    );
};

const CircularProgressComponent = (props) => {
    const {
        minusClick,
        plusClick,
        currentPoints,
        maxPoints,
        displayTest,
    } = props;
    return (
        <div
            className={`circular-progress ${
                !displayTest && 'circular-progress-margin'
            }`}
        >
            {displayTest && checkBoxField(true)}
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
                className={`${displayTest && 'progress-field-with-check'}`}
                width={50}
                percent={maxPoints > 0 ? (currentPoints / maxPoints) * 100 : 0}
                format={() => `${currentPoints || 0}/${maxPoints || 0}`}
            />
            <PlusCircleFilled
                className="change-status-button"
                onClick={plusClick}
            />
            {displayTest && checkBoxField()}
        </div>
    );
};

CircularProgressComponent.propTypes = {
    minusClick: PropTypes.func,
    plusClick: PropTypes.func,
    currentPoints: PropTypes.number,
    maxPoints: PropTypes.number,
    displayTest: PropTypes.bool,
};

CircularProgressComponent.defaultProps = {
    minusClick: () => {},
    plusClick: () => {},
    currentPoints: 0,
    maxPoints: 0,
    displayTest: false,
};

export default CircularProgressComponent;
