import { RadarChartOutlined } from '@ant-design/icons';
import { Col, Row, Select, Space } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import aptitudes from '../../mock/aptitudes';
import { setAptitudeList } from '../../reducers/characterReducer';
import './AptitudesComponent.css';

const { Option } = Select;

function buildAptitudes(list, index) {
    const filteredList = list.filter((e, i) => i !== index);
    return aptitudes.map((a) => {
        const disableOption = filteredList.includes(a.name);
        return (
            <Option
                key={`apt-${index}-${a.name}`}
                value={a.name}
                disabled={disableOption}
            >
                {a.name}
            </Option>
        );
    });
}

const AptitudesComponent = () => {
    const { aptitudeList, id } = useSelector((state) => state.character);
    const dispatch = useDispatch();

    const editionFlow = !!id;

    function updateAptitudeList(value, index) {
        const updatedAptList = [...aptitudeList];
        updatedAptList[index] = value;
        dispatch(setAptitudeList(updatedAptList));
    }

    return (
        <Row style={{ textAlign: 'center' }} gutter={[10, 10]}>
            <Col span={24}>
                <span className="charsheet-attr-title">
                    <Space>
                        <RadarChartOutlined />
                        Aptidões
                    </Space>
                </span>
            </Col>
            <Row style={{ width: '100%' }} gutter={[3, 3]}>
                <Col span={8}>
                    <Select
                        className="aptitude-select"
                        value={aptitudeList[0]}
                        onChange={(value) => {
                            updateAptitudeList(value, 0);
                        }}
                        placeholder="Selecionar"
                        disabled={editionFlow}
                    >
                        {buildAptitudes(aptitudeList, 0)}
                    </Select>
                </Col>
                <Col span={8}>
                    <Select
                        className="aptitude-select"
                        value={aptitudeList[1]}
                        onChange={(value) => {
                            updateAptitudeList(value, 1);
                        }}
                        placeholder="Selecionar"
                        disabled={editionFlow}
                    >
                        {buildAptitudes(aptitudeList, 1)}
                    </Select>
                </Col>
                <Col span={8}>
                    <Select
                        className="aptitude-select"
                        value={aptitudeList[2]}
                        onChange={(value) => {
                            updateAptitudeList(value, 2);
                        }}
                        placeholder="Selecionar"
                        disabled={editionFlow}
                    >
                        {buildAptitudes(aptitudeList, 2)}
                    </Select>
                </Col>
            </Row>
        </Row>
    );
};

AptitudesComponent.propTypes = {};

export default AptitudesComponent;
