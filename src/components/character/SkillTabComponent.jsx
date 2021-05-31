import {
    CaretDownOutlined,
    CaretLeftOutlined,
    ThunderboltFilled,
} from '@ant-design/icons';
import { Button, Collapse, Divider, Progress, Space } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import JobInfoEnum from '../../enums/jobInfoEnum';
import SubclassInfoEnum from '../../enums/subclassInfoEnum';
import { setCurrentMana } from '../../reducers/characterReducer';
import {
    extractJobInfo,
    extractSubclassInfo,
} from '../../utils/attributeUtils';
import './SkillTabComponent.css';

const { Panel } = Collapse;

const SkillTabComponent = () => {
    const [skillOpened, setSkillOpened] = useState(null);
    const { currentMana, totalMana, job, level, subclass } = useSelector(
        (state) => state.character
    );
    const jobSkills = extractJobInfo(job, JobInfoEnum.SKILLS) || [];
    const subclassSkills =
        extractSubclassInfo(subclass, SubclassInfoEnum.SKILLS) || [];

    const checkForPanelExpand = (index) => {
        setSkillOpened(index === skillOpened ? null : index);
    };

    const dispatch = useDispatch();

    const skillList = jobSkills
        .concat(subclassSkills)
        .filter((s) => s.level <= level)
        .map((s, i) => {
            const header = (
                <div className="skill-list-header-content">
                    <div className="skill-list-header-content-start">
                        <Space size="middle">
                            <Button
                                className="skill-list-header-content-button"
                                type="primary"
                                danger
                                disabled={s.cost > currentMana}
                                onClick={() => {
                                    if (s.cost <= currentMana) {
                                        dispatch(
                                            setCurrentMana(currentMana - s.cost)
                                        );
                                    }
                                }}
                            >
                                <ThunderboltFilled className="skill-mana-symbol" />
                                {s.cost}
                            </Button>
                            {s.name}
                        </Space>
                    </div>
                    <Button
                        onClick={() => {
                            checkForPanelExpand(i.toString());
                        }}
                        type="primary"
                        danger
                        className="skill-list-header-content-button"
                    >
                        {i.toString() === skillOpened ? (
                            <CaretDownOutlined />
                        ) : (
                            <CaretLeftOutlined />
                        )}
                    </Button>
                </div>
            );
            return (
                <Panel
                    className="skill-list-header-panel"
                    header={header}
                    key={i}
                    showArrow={false}
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
                strokeColor={{
                    '0%': '#D89614',
                    '100%': '#D89614',
                }}
                percent={totalMana > 0 ? (currentMana / totalMana) * 100 : 0}
                format={() => `${currentMana}/${totalMana}`}
            />
            <Divider style={{ margin: '24px' }} />
            <p>Lista de Habilidades</p>
            <div className="skill-list">
                {skillList.length > 0 && (
                    <Collapse activeKey={skillOpened}>{skillList}</Collapse>
                )}
            </div>
        </div>
    );
};

SkillTabComponent.propTypes = {};

export default SkillTabComponent;
