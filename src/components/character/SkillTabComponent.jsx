import { ThunderboltFilled } from '@ant-design/icons';
import { Divider, Progress } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import JobInfoEnum from '../../enums/jobInfoEnum';
import { extractJobInfo } from '../../utils/attributeUtils';
import './SkillTabComponent.css';

const SkillTabComponent = (props) => {
    const { currentMana, totalMana, job, level, subclass } = props;
    const jobSkills = extractJobInfo(job, JobInfoEnum.SKILLS);
    return (
        <div className="skill-mana">
            <ThunderboltFilled className="skill-mana-symbol" />
            Mana
            <Progress
                className="skill-mana-bar"
                status="active"
                percent={totalMana > 0 ? (currentMana / totalMana) * 100 : 0}
                format={() => `${currentMana}/${totalMana}`}
            />
            <Divider style={{ margin: '24px' }} />
            TODO: Magias (classe e subclasse)
        </div>
    );
};

SkillTabComponent.propTypes = {
    currentMana: PropTypes.number,
    totalMana: PropTypes.number,
    level: PropTypes.number,
    job: PropTypes.string,
    subclass: PropTypes.string,
};

SkillTabComponent.defaultProps = {
    currentMana: 0,
    totalMana: 0,
    level: 1,
    job: '',
    subclass: '',
};

export default SkillTabComponent;
