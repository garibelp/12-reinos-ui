import { ThunderboltFilled } from '@ant-design/icons';
import { Collapse, Divider, Progress } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import JobInfoEnum from '../../enums/jobInfoEnum';
import SubclassInfoEnum from '../../enums/subclassInfoEnum';
import {
    extractJobInfo,
    extractSubclassInfo,
} from '../../utils/attributeUtils';
import './SkillTabComponent.css';

const { Panel } = Collapse;

const SkillTabComponent = (props) => {
    const { currentMana, totalMana, job, level, subclass } = props;
    const jobSkills = extractJobInfo(job, JobInfoEnum.SKILLS) || [];
    const subclassSkills =
        extractSubclassInfo(subclass, SubclassInfoEnum.SKILLS) || [];

    const skillList = jobSkills
        .concat(subclassSkills)
        .filter((s) => s.level <= level)
        .map((s, i) => {
            const header = (
                <p className="skill-list-header-content">
                    <ThunderboltFilled className="skill-mana-symbol" />
                    {s.cost} | {s.name}
                </p>
            );
            return (
                <Panel
                    className="skill-list-header-panel"
                    header={header}
                    key={i}
                >
                    <p>{s.description}</p>
                </Panel>
            );
        });

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
            <p>Magias</p>
            <div className="skill-list">
                {skillList.length > 0 && (
                    <Collapse accordion>{skillList}</Collapse>
                )}
            </div>
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
