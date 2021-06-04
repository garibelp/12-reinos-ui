import { Button, Modal } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import './DiceRollComponent.css';

const DiceRollComponent = (props) => {
    const { visible, setVisible } = props;
    return (
        <Modal
            className="dice-roll-modal"
            visible={visible}
            footer={[
                <Button onClick={() => setVisible(false)} type="primary">
                    Fechar
                </Button>,
            ]}
        >
            test
        </Modal>
    );
};

DiceRollComponent.propTypes = {
    visible: PropTypes.bool,
    setVisible: PropTypes.func,
};

DiceRollComponent.defaultProps = {
    visible: false,
    setVisible: () => {},
};

export default DiceRollComponent;
