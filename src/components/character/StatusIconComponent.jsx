import PropTypes from 'prop-types';
import React from 'react';

import './StatusIconComponent.css';

const StatusIconComponent = (props) => {
    const { statusName, StatusIcon, currentValue } = props;
    return (
        <>
            <div className="status-title"> {statusName} </div>
            <div>
                <StatusIcon className="status-icon" />
                <div className="status-text">{currentValue}</div>
            </div>
        </>
    );
};

StatusIconComponent.propTypes = {
    statusName: PropTypes.string,
    StatusIcon: PropTypes.object.isRequired,
    currentValue: PropTypes.string,
};

StatusIconComponent.defaultProps = {
    statusName: 'Title',
    currentValue: '',
};

export default StatusIconComponent;
