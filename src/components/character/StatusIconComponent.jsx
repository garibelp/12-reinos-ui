import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import './StatusIconComponent.css';

const StatusIconComponent = (props) => {
    const {
        statusName,
        StatusIcon,
        currentValue,
        customIconCss,
        customTextCss,
        customTitleCss,
        tooltipMessage,
    } = props;
    return (
        <>
            <div className="status-title" style={customTitleCss}>
                {statusName}
            </div>
            <div className="status-body">
                <Tooltip placement="bottom" title={tooltipMessage}>
                    <StatusIcon className="status-icon" style={customIconCss} />
                    <div className="status-text" style={customTextCss}>
                        {currentValue}
                    </div>
                </Tooltip>
            </div>
        </>
    );
};

StatusIconComponent.propTypes = {
    statusName: PropTypes.string,
    StatusIcon: PropTypes.object.isRequired,
    currentValue: PropTypes.any,
    tooltipMessage: PropTypes.string,
    customTitleCss: PropTypes.objectOf(PropTypes.any),
    customTextCss: PropTypes.objectOf(PropTypes.any),
    customIconCss: PropTypes.objectOf(PropTypes.any),
};

StatusIconComponent.defaultProps = {
    statusName: '',
    currentValue: '',
    tooltipMessage: null,
    customTitleCss: {},
    customTextCss: {},
    customIconCss: {},
};

export default StatusIconComponent;
