import { RadarChartOutlined } from '@ant-design/icons';
import { Col, Row, Select, Space } from 'antd';
import React, { useState } from 'react';

import aptitudes from '../../mock/aptitudes';
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

const AptitudesComponent = (props) => {
    const [aptitudeList, setAptitudeList] = useState(['', '', '']);

    function updateAptitudeList(value, index) {
        const updatedAptList = [...aptitudeList];
        updatedAptList[index] = value;
        setAptitudeList(updatedAptList);
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
            <Row style={{ marginLeft: '5px' }} gutter={[5, 5]}>
                <Col span={8}>
                    <Select
                        className="aptitude-select"
                        onChange={(value) => {
                            updateAptitudeList(value, 0);
                        }}
                        placeholder="Selecionar aptidão"
                        allowClear
                    >
                        {buildAptitudes(aptitudeList, 0)}
                    </Select>
                </Col>
                <Col span={8}>
                    <Select
                        className="aptitude-select"
                        onChange={(value) => {
                            updateAptitudeList(value, 1);
                        }}
                        placeholder="Selecionar aptidão"
                        allowClear
                    >
                        {buildAptitudes(aptitudeList, 1)}
                    </Select>
                </Col>
                <Col span={8}>
                    <Select
                        className="aptitude-select"
                        onChange={(value) => {
                            updateAptitudeList(value, 2);
                        }}
                        placeholder="Selecionar aptidão"
                        allowClear
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
