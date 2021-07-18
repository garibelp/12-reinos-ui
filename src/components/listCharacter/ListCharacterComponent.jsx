import {
    PlusCircleFilled,
    EditFilled,
    DeleteFilled,
    ReloadOutlined,
} from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { Table, Button, Tooltip } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { CHARACTER_LIST } from '../../graphql/character/character.queries';
import './ListCharacterComponent.css';

const ListCharacterComponent = () => {
    const history = useHistory();
    const { loading, error, data, refetch } = useQuery(CHARACTER_LIST);

    const columns = [
        {
            title: 'Nome',
            dataIndex: 'name',
            key: (char) => `name-${char._id}`,
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
            },
            width: '25%',
        },
        {
            title: 'Nível',
            dataIndex: 'level',
            key: (char) => `level-${char._id}`,
            sorter: {
                compare: (a, b) => a.level > b.level,
            },
            width: '5%',
        },
        {
            title: 'Linhagem',
            dataIndex: 'race',
            key: (char) => `race-${char._id}`,
            sorter: {
                compare: (a, b) => a.race.localeCompare(b.race),
            },
            width: '15%',
        },
        {
            title: 'Antecedente',
            dataIndex: 'background',
            key: (char) => `background-${char._id}`,
            sorter: {
                compare: (a, b) => a.background.localeCompare(b.background),
            },
            width: '15%',
        },
        {
            title: 'Classe',
            dataIndex: 'job',
            key: (char) => `job-${char._id}`,
            sorter: {
                compare: (a, b) => a.job.localeCompare(b.job),
            },
            width: '15%',
        },
        {
            title: 'Subclasse',
            dataIndex: 'subclass',
            key: (char) => `subclass-${char._id}`,
            sorter: {
                compare: (a, b) => a.subclass.localeCompare(b.subclass),
            },
            width: '14%',
        },
        {
            title: 'Ações',
            key: (char) => `actions-${char._id}`,
            render: (char) => (
                <div className="list-char-table-actions">
                    <Tooltip title="Editar" placement="bottom">
                        <Button
                            type="primary"
                            danger
                            icon={<EditFilled />}
                            onClick={() => {
                                const { _id } = char;
                                history.push(`/char/edit/${_id}`);
                            }}
                        />
                    </Tooltip>
                    <Tooltip title="Deletar" placement="bottom">
                        <Button
                            type="primary"
                            icon={<DeleteFilled />}
                            disabled
                        />
                    </Tooltip>
                </div>
            ),
            width: '11%',
        },
    ];

    if (error) return `Error! ${error.message}`;

    return (
        <Table
            loading={loading}
            className="list-char-table"
            columns={columns}
            dataSource={loading ? [] : data.characters}
            size="small"
            bordered
            pagination={{ position: ['bottomCenter'] }}
            title={() => (
                <div className="list-char-table-title">
                    <Tooltip title="Criar Personagem">
                        <Button
                            type="primary"
                            danger
                            style={{ float: 'left' }}
                            onClick={() => {
                                history.push('/char/create');
                            }}
                            icon={<PlusCircleFilled />}
                        />
                    </Tooltip>
                    Personagens
                    <Tooltip title="Atualizar Lista">
                        <Button
                            icon={<ReloadOutlined />}
                            style={{ float: 'right' }}
                            type="primary"
                            onClick={() => {
                                refetch();
                            }}
                        />
                    </Tooltip>
                </div>
            )}
        />
    );
};

export default ListCharacterComponent;
