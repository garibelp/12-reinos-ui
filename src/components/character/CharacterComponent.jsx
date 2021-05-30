import {
    FireFilled,
    UserOutlined,
    FileTextFilled,
    ThunderboltFilled,
    HeartFilled,
    ExperimentFilled,
    DingtalkOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import {
    Card,
    Input,
    Form,
    Select,
    Row,
    Col,
    InputNumber,
    Tabs,
    Button,
    Space,
    Divider,
    Tooltip,
    Switch,
} from 'antd';
import React, { useState } from 'react';

import { ReactComponent as Dice } from '../../assets/images/d20.svg';
import logo from '../../assets/images/logo_nome.png';
import { ReactComponent as Shield } from '../../assets/images/shield.svg';
import JobInfoEnum from '../../enums/jobInfoEnum';
import RaceInfoEnum from '../../enums/raceInfoEnum';
import Background from '../../mock/background';
import Jobs from '../../mock/jobs';
import Races from '../../mock/races';
import Subclasses from '../../mock/subclasses';
import {
    extractBackgroundBond,
    extractJobInfo,
    extractMaxLifeAndMana,
    extractRaceInfo,
} from '../../utils/attributeUtils';
import AptitudesComponent from './AptitudesComponent';
import AttributeTableComponent from './AttributeTableComponent';
import './CharacterComponent.css';
import CircularProgressComponent from './CircularProgressComponent';
import SkillTabComponent from './SkillTabComponent';
import StatusIconComponent from './StatusIconComponent';

const { Option } = Select;
const { Item: FormItem } = Form;
const { TabPane } = Tabs;
const { TextArea } = Input;

const backgroundList = Background.map((b) => (
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

const CharacterComponent = () => {
    const [form] = Form.useForm();
    const [currentLife, setCurrentLife] = useState(1);
    const [totalLife, setTotalLife] = useState(1);
    const [currentMana, setCurrentMana] = useState(0);
    const [totalMana, setTotalMana] = useState(0);
    const [level, setLevel] = useState(1);
    const [heroPoints, setHeroPoints] = useState(1);
    const [currentArmor, setCurrentArmor] = useState(0);
    const [totalArmor, setTotalArmor] = useState(0);
    const [background, setBackground] = useState('');
    const [race, setRace] = useState('');
    const [job, setJob] = useState('');
    const [subclass, setSubclass] = useState('');
    const [motivation, setMotivation] = useState('');
    const [defective, setDefective] = useState(false);

    const submitForm = (values) => {
        console.log('submit:', values);
    };

    // newLevel - Used to trigger change on component when job is already selected and level change
    const setJobValues = (value, newLevel = 0) => {
        const levelToUse = newLevel || level;
        setJob(value);

        const classArmor = extractJobInfo(value, JobInfoEnum.ARMOR);
        setCurrentArmor(classArmor);
        setTotalArmor(classArmor);

        const { life, mana } = extractMaxLifeAndMana(value, levelToUse);

        if (newLevel < level) {
            setCurrentLife(life);
            setCurrentMana(mana);
        }
        if (levelToUse < 2) {
            setSubclass('');
            form.setFieldsValue({ subclass: null });
        }
        setTotalLife(life);
        setTotalMana(mana);
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
        <Card
            className="character-card"
            title={
                <span className="charsheet-attr-title">
                    <Space>
                        <FileTextFilled />
                        Ficha de Personagem v0.1
                    </Space>
                </span>
            }
        >
            <Form
                form={form}
                onFinish={submitForm}
                size="small"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 15 }}
            >
                <Tabs
                    defaultActiveKey="1"
                    type="card"
                    centered
                    style={{ marginBottom: 32 }}
                >
                    <TabPane
                        key="1"
                        tab={
                            <span className="charsheet-attr-title">
                                <UserOutlined />
                                Personagem
                            </span>
                        }
                    >
                        <Row>
                            <Col span={8}>
                                <FormItem
                                    name="charName"
                                    label="Personagem"
                                    rules={[{ required: true }]}
                                >
                                    <Input placeholder="Digitar nome" />
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem
                                    name="background"
                                    label="Antecedente"
                                    rules={[{ required: true }]}
                                >
                                    <Select
                                        placeholder="Selecionar antecedente"
                                        allowClear
                                        value={background}
                                        onChange={setBackground}
                                    >
                                        {backgroundList}
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span={4} style={{ marginLeft: '8px' }}>
                                <FormItem
                                    name="level"
                                    label="Nível"
                                    rules={[{ required: true }]}
                                    initialValue={level}
                                >
                                    <InputNumber
                                        min={1}
                                        max={3}
                                        onChange={(levelValue) => {
                                            setLevel(levelValue);
                                            setJobValues(job, levelValue);
                                        }}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={3}>
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{
                                        width: '150px',
                                        marginTop: '-20px',
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <FormItem
                                    name="class"
                                    label="Classe"
                                    rules={[{ required: true }]}
                                >
                                    <Select
                                        placeholder="Selecionar classe"
                                        onChange={(value) =>
                                            setJobValues(value)
                                        }
                                        allowClear
                                    >
                                        {jobList}
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem
                                    name="subclass"
                                    label="Subclasse"
                                    shouldUpdate
                                    rules={[
                                        { required: !disableSubclassSelect },
                                    ]}
                                >
                                    <Select
                                        placeholder="Selecionar subclasse"
                                        onChange={setSubclass}
                                        allowClear
                                        disabled={disableSubclassSelect}
                                    >
                                        {subclassList(job)}
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem
                                    name="race"
                                    label="Linhagem"
                                    rules={[{ required: true }]}
                                >
                                    <Select
                                        placeholder="Selecionar linhagem"
                                        allowClear
                                        onChange={setRace}
                                    >
                                        {raceList}
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <Divider />
                        <Row gutter={[5, 5]}>
                            <Col span={12}>
                                <AttributeTableComponent
                                    background={background}
                                    race={race}
                                    job={job}
                                    subclass={subclass}
                                    defective={defective}
                                />
                            </Col>
                            <Col span={12}>
                                <Row
                                    style={{ textAlign: 'center' }}
                                    gutter={[10, 10]}
                                >
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
                                                    reduceAttribute(
                                                        currentLife,
                                                        setCurrentLife
                                                    )
                                                }
                                                plusClick={() =>
                                                    increaseAttribute(
                                                        currentLife,
                                                        totalLife,
                                                        setCurrentLife
                                                    )
                                                }
                                                currentPoints={currentLife}
                                                maxPoints={totalLife}
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
                                                    reduceAttribute(
                                                        currentMana,
                                                        setCurrentMana
                                                    )
                                                }
                                                plusClick={() =>
                                                    increaseAttribute(
                                                        currentMana,
                                                        totalMana,
                                                        setCurrentMana
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
                                                    reduceAttribute(
                                                        heroPoints,
                                                        setHeroPoints
                                                    )
                                                }
                                                plusClick={() =>
                                                    increaseAttribute(
                                                        heroPoints,
                                                        level,
                                                        setHeroPoints
                                                    )
                                                }
                                                currentPoints={heroPoints}
                                                maxPoints={level}
                                            />
                                        </Space>
                                    </Col>
                                </Row>
                                <Divider />
                                <AptitudesComponent />
                                <Divider style={{ margin: '10px 0' }} />
                                <Row style={{ textAlign: 'center' }}>
                                    <Col span={8}>
                                        <StatusIconComponent
                                            StatusIcon={Dice}
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
                                                <Shield className="charsheet-shield" />
                                                Armadura
                                            </Space>
                                        </span>
                                        <Space>
                                            <CircularProgressComponent
                                                minusClick={() =>
                                                    reduceAttribute(
                                                        currentArmor,
                                                        setCurrentArmor
                                                    )
                                                }
                                                plusClick={() =>
                                                    increaseAttribute(
                                                        currentArmor,
                                                        totalArmor,
                                                        setCurrentArmor
                                                    )
                                                }
                                                currentPoints={currentArmor}
                                                maxPoints={totalArmor}
                                            />
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <StatusIconComponent
                                            StatusIcon={Shield}
                                            statusName={'Defesa'}
                                            currentValue={(
                                                extractJobInfo(
                                                    job,
                                                    JobInfoEnum.LIFE
                                                ) + currentArmor
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
                                    <Col span={24}>
                                        <TeamOutlined
                                            style={{ marginRight: '8px' }}
                                        />
                                        Características de Linhagem
                                    </Col>
                                    <Col className="charsheet-race-info-col">
                                        <Tooltip
                                            title={proRaceSkill.description}
                                        >
                                            <Card
                                                size="small"
                                                bordered={false}
                                                className="charsheet-race-info-card charsheet-internal-card"
                                            >
                                                {proRaceSkill.name || ' '}
                                            </Card>
                                        </Tooltip>
                                    </Col>
                                    <Col className="charsheet-race-info-col">
                                        <Tooltip
                                            title={conRaceSkill.description}
                                        >
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
                                <Divider style={{ margin: '10px 0' }} />
                                <Row
                                    gutter={[10, 10]}
                                    style={{
                                        textAlign: 'center',
                                        height: '70px',
                                    }}
                                >
                                    <Col span={8}>
                                        <p>Vínculo</p>
                                        <Card
                                            size="small"
                                            bordered={false}
                                            className="charsheet-bond-info-card charsheet-internal-card"
                                        >
                                            {extractBackgroundBond(background)}
                                        </Card>
                                        <Tooltip title="Atributo usado em Alterados para checagem de defeito">
                                            <FormItem
                                                // name="defective"
                                                label="Defeituoso"
                                                labelCol={{ span: 16 }}
                                            >
                                                <Switch
                                                    disabled={
                                                        race !== 'Alterado'
                                                    }
                                                    checked={defective}
                                                    onChange={setDefective}
                                                />
                                            </FormItem>
                                        </Tooltip>
                                    </Col>
                                    <Col span={16}>
                                        <p>Motivação</p>
                                        <FormItem
                                            wrapperCol={8}
                                            name="motivation"
                                        >
                                            <TextArea
                                                onChange={setMotivation}
                                                value={motivation}
                                                placeholder="Inserir motivação"
                                                rows={2}
                                            />
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane
                        key="2"
                        tab={
                            <span>
                                <FireFilled />
                                Habilidades
                            </span>
                        }
                    >
                        <SkillTabComponent
                            level={level}
                            job={job}
                            subclass={subclass}
                            currentMana={currentMana}
                            totalMana={totalMana}
                        />
                    </TabPane>
                    <TabPane
                        key="3"
                        tab={
                            <span>
                                <ExperimentFilled />
                                Itens
                            </span>
                        }
                    >
                        TODO: Items
                    </TabPane>
                </Tabs>
            </Form>
            <Divider />
            <Row style={{ justifyContent: 'center' }}>
                <Space>
                    <Button type="primary">TODO - Save</Button>
                    <Button type="primary" danger>
                        TODO - Reset
                    </Button>
                </Space>
            </Row>
        </Card>
    );
};

export default CharacterComponent;
