import {
    DingtalkOutlined,
    HeartFilled,
    TeamOutlined,
    ThunderboltFilled,
} from '@ant-design/icons';
import {
    Card,
    Checkbox,
    Col,
    Divider,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    Space,
    Switch,
    Tooltip,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as AttributesSvg } from '../../assets/images/attributes.svg';
import { ReactComponent as DiceSvg } from '../../assets/images/d20.svg';
import { ReactComponent as GearSvg } from '../../assets/images/gear.svg';
import { ReactComponent as LinkSvg } from '../../assets/images/link.svg';
import { ReactComponent as MotivationSvg } from '../../assets/images/motivation.svg';
import { ReactComponent as ShieldSvg } from '../../assets/images/shield.svg';
import { ReactComponent as SkullSvg } from '../../assets/images/skull.svg';
import AttributeEnum from '../../enums/attributeEnum';
import JobInfoEnum from '../../enums/jobInfoEnum';
import RaceInfoEnum from '../../enums/raceInfoEnum';
import Backgrounds from '../../mock/background';
import Jobs from '../../mock/jobs';
import Races from '../../mock/races';
import Subclasses from '../../mock/subclasses';
import * as charActions from '../../reducers/characterReducer';
import {
    extractBackgroundBond,
    extractJobInfo,
    extractMaxLifeAndMana,
    extractRaceInfo,
} from '../../utils/attributeUtils';
import AptitudesComponent from './AptitudesComponent';
import AttributesDisplayComponent from './AttributesDisplayComponent';
import './CharTabComponent.css';
import CircularProgressComponent from './CircularProgressComponent';
import StatusIconComponent from './StatusIconComponent';

const { Item: FormItem } = Form;
const { Option } = Select;

const backgroundList = Backgrounds.map((b) => (
    <Option key={`bg-option-${b.name}`} value={b.name}>
        {b.name}
    </Option>
));

const raceList = Races.map((r) => (
    <Option key={`race-option-${r.name}`} value={r.name}>
        {r.name}
    </Option>
));

const jobList = Jobs.map((j) => (
    <Option key={`job-option-${j.name}`} value={j.name}>
        {j.name}
    </Option>
));

const subclassList = (job) => {
    const filteredSubclasses = Subclasses.filter((s) => s.job === job);
    return filteredSubclasses.map((s) => (
        <Option key={`subclass-option-${s.name}`} value={s.name}>
            {s.name}
        </Option>
    ));
};

const CharTabComponent = () => {
    const {
        currentLife,
        totalLife,
        currentMana,
        totalMana,
        level,
        heroPoints,
        currentArmor,
        totalArmor,
        background,
        race,
        job,
        subclass,
        // motivation,
        defective,
        enhancedAttribute,
    } = useSelector((state) => state.character);

    const dispatch = useDispatch();

    // newLevel - Used to trigger change on component when job is already selected and level change
    const setJobValues = (value, newLevel = 0) => {
        const charObject = {};

        if (newLevel) {
            charObject.level = newLevel;
        }
        const levelToUse = newLevel || level;

        if (levelToUse < 2 || value !== job) {
            charObject.subclass = null;
        }

        const { life, mana } = extractMaxLifeAndMana(value, levelToUse);

        if (newLevel < level) {
            charObject.currentLife = life;
            charObject.currentMana = mana;
        }

        const classArmor = extractJobInfo(value, JobInfoEnum.ARMOR);
        charObject.currentArmor = classArmor;
        charObject.totalArmor = classArmor;
        charObject.job = value;
        charObject.totalLife = life;
        charObject.totalMana = mana;
        dispatch(charActions.setCharacterInfoBlock(charObject));
    };

    const increaseAttribute = (current, total, callbackFunc) => {
        if (current < total) {
            callbackFunc(current + 1);
        }
    };

    const reduceAttribute = (current, callbackFunc) => {
        if (current > 0) {
            callbackFunc(current - 1);
        }
    };

    // Logic to retrieve the race skills
    const proRaceSkill = extractRaceInfo(race, RaceInfoEnum.PRO_SKILL) || {};
    const conRaceSkill = extractRaceInfo(race, RaceInfoEnum.CON_SKILL) || {};
    // Attribute used to disable subclass if player is level 1
    const disableSubclassSelect = level < 2;

    return (
        <>
            <Row>
                <Col span={8}>
                    <FormItem label="Personagem" rules={[{ required: true }]}>
                        <Input placeholder="Digitar nome" />
                    </FormItem>
                </Col>
                <Col span={8}>
                    <FormItem label="Antecedente" rules={[{ required: true }]}>
                        <Select
                            placeholder="Selecionar antecedente"
                            allowClear
                            value={background}
                            onChange={(v) =>
                                dispatch(charActions.setBackground(v))
                            }
                        >
                            {backgroundList}
                        </Select>
                    </FormItem>
                </Col>
                <Col span={8}>
                    <Row style={{ width: '100%' }}>
                        <Col span={16} style={{ textAlign: 'right' }}>
                            Nível :
                            <InputNumber
                                min={1}
                                max={3}
                                value={level}
                                style={{
                                    margin: '0 12px 0 8px',
                                    width: '80px',
                                }}
                                onChange={(levelValue) => {
                                    setJobValues(job, levelValue);
                                }}
                            />
                        </Col>
                        <Col style={{ alignSelf: 'center' }} span={2}>
                            <SkullSvg
                                style={{
                                    fill: 'white',
                                    width: '25px',
                                    height: '25px',
                                }}
                            />
                        </Col>
                        <Col span={6}>
                            <Checkbox.Group>
                                <Row style={{ width: '100%' }}>
                                    <Tooltip
                                        title={`Sucessos em testes contra a morte`}
                                    >
                                        <Col
                                            style={{ textAlign: 'center' }}
                                            span={24}
                                        >
                                            <Checkbox
                                                className="check-death-success"
                                                value="1"
                                            />
                                            <Checkbox
                                                className="check-death-success"
                                                value="2"
                                            />
                                            <Checkbox
                                                className="check-death-success"
                                                value="3"
                                            />
                                        </Col>
                                    </Tooltip>
                                    <Tooltip
                                        title={`Falhas em testes contra a morte`}
                                        placement="bottom"
                                    >
                                        <Col
                                            style={{ textAlign: 'center' }}
                                            span={24}
                                        >
                                            <Checkbox
                                                className="check-death-fail"
                                                value="4"
                                            />
                                            <Checkbox
                                                className="check-death-fail"
                                                value="5"
                                            />
                                            <Checkbox
                                                className="check-death-fail"
                                                value="6"
                                            />
                                        </Col>
                                    </Tooltip>
                                </Row>
                            </Checkbox.Group>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ height: '30px' }}>
                <Col span={8}>
                    <FormItem label="Classe" rules={[{ required: true }]}>
                        <Select
                            placeholder="Selecionar classe"
                            onChange={(value) => setJobValues(value)}
                            allowClear
                        >
                            {jobList}
                        </Select>
                    </FormItem>
                </Col>
                <Col span={8}>
                    <FormItem
                        label="Subclasse"
                        rules={[{ required: !disableSubclassSelect }]}
                    >
                        <Select
                            placeholder="Selecionar subclasse"
                            value={subclass}
                            onChange={(v) => {
                                dispatch(charActions.setSubclass(v));
                            }}
                            allowClear
                            disabled={disableSubclassSelect}
                        >
                            {subclassList(job)}
                        </Select>
                    </FormItem>
                </Col>
                <Col span={8}>
                    <FormItem label="Linhagem" rules={[{ required: true }]}>
                        <Select
                            placeholder="Selecionar linhagem"
                            allowClear
                            onChange={(v) => {
                                dispatch(charActions.setRace(v));
                                if (v !== 'Alterado') {
                                    dispatch(charActions.setDefective(false));
                                    dispatch(
                                        charActions.setEnhancedAttribute(null)
                                    );
                                }
                            }}
                        >
                            {raceList}
                        </Select>
                    </FormItem>
                </Col>
            </Row>
            <Divider style={{ margin: '10px 0' }} />
            <Row gutter={[5, 5]}>
                <Col
                    style={{
                        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    span={12}
                >
                    <Row>
                        <AptitudesComponent />
                    </Row>
                    <Divider style={{ margin: '15px 0' }} />
                    <Row>
                        <Col
                            span={24}
                            style={{
                                display: 'flex',
                                alignContent: 'center',
                                placeContent: 'center',
                                marginBottom: '5px',
                            }}
                        >
                            <AttributesSvg
                                style={{
                                    fill: 'white',
                                    width: '18px',
                                    height: '18px',
                                    marginRight: '5px',
                                }}
                            />
                            Atributos
                        </Col>
                        <AttributesDisplayComponent
                            background={background}
                            race={race}
                            job={job}
                            subclass={subclass}
                            defective={defective}
                            level={level}
                            enhancedAttribute={enhancedAttribute}
                        />
                    </Row>
                </Col>
                <Col span={12}>
                    <Row style={{ textAlign: 'center' }} gutter={[10, 10]}>
                        <Col span={8}>
                            <span className="charsheet-attr-title">
                                <Space>
                                    <HeartFilled />
                                    Vida
                                </Space>
                            </span>
                            <Space>
                                <CircularProgressComponent
                                    minusClick={() =>
                                        reduceAttribute(currentLife, (v) =>
                                            dispatch(
                                                charActions.setCurrentLife(v)
                                            )
                                        )
                                    }
                                    plusClick={() =>
                                        increaseAttribute(
                                            currentLife,
                                            totalLife,
                                            (v) =>
                                                dispatch(
                                                    charActions.setCurrentLife(
                                                        v
                                                    )
                                                )
                                        )
                                    }
                                    currentPoints={currentLife}
                                    maxPoints={totalLife}
                                    displayTest
                                />
                            </Space>
                        </Col>
                        <Col span={8}>
                            <span className="charsheet-attr-title">
                                <Space>
                                    <ThunderboltFilled />
                                    Mana
                                </Space>
                            </span>
                            <Space>
                                <CircularProgressComponent
                                    minusClick={() =>
                                        reduceAttribute(currentMana, (v) =>
                                            dispatch(
                                                charActions.setCurrentMana(v)
                                            )
                                        )
                                    }
                                    plusClick={() =>
                                        increaseAttribute(
                                            currentMana,
                                            totalMana,
                                            (v) =>
                                                dispatch(
                                                    charActions.setCurrentMana(
                                                        v
                                                    )
                                                )
                                        )
                                    }
                                    currentPoints={currentMana}
                                    maxPoints={totalMana}
                                />
                            </Space>
                        </Col>
                        <Col span={8}>
                            <span className="charsheet-attr-title">
                                <Space>
                                    <DingtalkOutlined />
                                    Heroísmo
                                </Space>
                            </span>
                            <Space>
                                <CircularProgressComponent
                                    minusClick={() =>
                                        reduceAttribute(heroPoints, (v) =>
                                            dispatch(
                                                charActions.setHeroPoints(v)
                                            )
                                        )
                                    }
                                    plusClick={() =>
                                        increaseAttribute(
                                            heroPoints,
                                            level,
                                            (v) =>
                                                dispatch(
                                                    charActions.setHeroPoints(v)
                                                )
                                        )
                                    }
                                    currentPoints={heroPoints}
                                    maxPoints={level}
                                />
                            </Space>
                        </Col>
                    </Row>
                    <Divider style={{ margin: '10px 0' }} />
                    <Row style={{ textAlign: 'center' }}>
                        <Col span={8}>
                            <StatusIconComponent
                                StatusIcon={DiceSvg}
                                statusName={'Dado de Classe'}
                                currentValue={extractJobInfo(
                                    job,
                                    JobInfoEnum.HIT_DICE
                                )}
                            />
                        </Col>
                        <Col span={8}>
                            <span className="charsheet-attr-title">
                                <Space>
                                    <ShieldSvg className="charsheet-shield" />
                                    Armadura
                                </Space>
                            </span>
                            <Space>
                                <CircularProgressComponent
                                    minusClick={() =>
                                        reduceAttribute(currentArmor, (v) =>
                                            dispatch(
                                                charActions.setCurrentArmor(v)
                                            )
                                        )
                                    }
                                    plusClick={() =>
                                        increaseAttribute(
                                            currentArmor,
                                            totalArmor,
                                            (v) =>
                                                dispatch(
                                                    charActions.setCurrentArmor(
                                                        v
                                                    )
                                                )
                                        )
                                    }
                                    currentPoints={currentArmor}
                                    maxPoints={totalArmor}
                                />
                            </Space>
                        </Col>
                        <Col span={8}>
                            <StatusIconComponent
                                StatusIcon={ShieldSvg}
                                statusName={'Defesa'}
                                currentValue={(
                                    extractJobInfo(job, JobInfoEnum.LIFE) +
                                    currentArmor
                                ).toString()}
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <Row
                        gutter={[10, 10]}
                        justify="space-around"
                        style={{ textAlign: 'center' }}
                    >
                        <Col span={12}>
                            <Row justify="space-between">
                                <Col span={24} style={{ marginBottom: '10px' }}>
                                    <TeamOutlined
                                        style={{
                                            marginRight: '8px',
                                        }}
                                    />
                                    Características de Linhagem
                                </Col>
                                <Col
                                    span={12}
                                    className="charsheet-race-info-col"
                                >
                                    <Tooltip title={proRaceSkill.description}>
                                        <Card
                                            size="small"
                                            bordered={false}
                                            className="charsheet-race-info-card charsheet-internal-card"
                                        >
                                            {proRaceSkill.name || ' '}
                                        </Card>
                                    </Tooltip>
                                </Col>
                                <Col
                                    span={12}
                                    className="charsheet-race-info-col"
                                >
                                    <Tooltip title={conRaceSkill.description}>
                                        <Card
                                            size="small"
                                            bordered={false}
                                            className="charsheet-race-info-card charsheet-internal-card"
                                        >
                                            {conRaceSkill.name || ' '}
                                        </Card>
                                    </Tooltip>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row justify="space-around">
                                <Tooltip title="Atributo usado em Alterados para checagem de defeito e melhoria">
                                    <Col
                                        style={{ marginBottom: '10px' }}
                                        span={24}
                                    >
                                        <GearSvg
                                            style={{
                                                width: '12px',
                                                marginRight: '5px',
                                                fill: 'white',
                                            }}
                                        />
                                        Alterado
                                    </Col>
                                </Tooltip>
                                <Col span={24}>
                                    <Tooltip title="Defeituoso?">
                                        <Switch
                                            disabled={race !== 'Alterado'}
                                            checked={defective}
                                            onChange={(v) => {
                                                dispatch(
                                                    charActions.setDefective(v)
                                                );
                                            }}
                                        />
                                    </Tooltip>
                                    <Tooltip title="Atributo modificado">
                                        <Select
                                            style={{
                                                width: '190px',
                                                marginLeft: '10px',
                                            }}
                                            disabled={race !== 'Alterado'}
                                            value={enhancedAttribute}
                                            onChange={(v) => {
                                                dispatch(
                                                    charActions.setEnhancedAttribute(
                                                        v
                                                    )
                                                );
                                            }}
                                            placeholder="Selecionar atributo"
                                        >
                                            {Object.entries(AttributeEnum).map(
                                                (attr) => (
                                                    <Option
                                                        key={`${attr[1].base}-enhanced`}
                                                        value={attr[0]}
                                                    >
                                                        {attr[1].base}
                                                    </Option>
                                                )
                                            )}
                                        </Select>
                                    </Tooltip>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Divider style={{ margin: '10px 0' }} />
                    <Row>
                        <Col span={24}>
                            <Row
                                style={{
                                    placeContent: 'center',
                                    marginBottom: '10px',
                                }}
                            >
                                <LinkSvg
                                    style={{
                                        width: '15px',
                                        marginRight: '5px',
                                        fill: 'white',
                                    }}
                                />
                                Vínculo
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <Card
                                        size="small"
                                        bordered={false}
                                        className="charsheet-bond-info-card charsheet-internal-card"
                                    >
                                        {extractBackgroundBond(background)}
                                    </Card>
                                </Col>
                                <Col span={18}>
                                    <TextArea
                                        onBlur={(v) => {
                                            // TODO: set bond
                                        }}
                                        style={{ height: '24px' }}
                                        rows={1}
                                        placeholder="Descrição de vínculo"
                                        size="small"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Divider style={{ margin: '10px 0' }} />
                        <Col span={24}>
                            <Row
                                style={{
                                    justifyContent: 'center',
                                    marginBottom: '10px',
                                }}
                            >
                                <MotivationSvg
                                    style={{
                                        height: '15px',
                                        width: '15px',
                                        fill: 'white',
                                        marginRight: '5px',
                                    }}
                                />
                                Motivação
                            </Row>
                            <TextArea
                                onBlur={(v) => {
                                    // TODO: set motivation
                                    // dispatch(charActions.setMotivation(v));
                                }}
                                style={{ marginLeft: '2px', height: '46px' }}
                                rows={2}
                                placeholder="Inserir motivação"
                                size="small"
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

CharTabComponent.propTypes = {};

export default CharTabComponent;
