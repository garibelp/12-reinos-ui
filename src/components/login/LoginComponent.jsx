import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Card, Input, Button, notification } from 'antd';
import React, { useState } from 'react';

import { authService } from '../../service/authService';
import './LoginComponent.css';

function LoginComponent(props) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = () => {
        setLoading(true);
        const { email, password } = form.getFieldsValue();
        authService
            .login(email, password)
            .then((user) => {
                const { from } = props.location.state || {
                    from: { pathname: '/char/list' },
                };
                props.history.push(from);
            })
            .catch((err) => {
                console.error(err);
                notification.error({
                    message: 'Erro durante login',
                    description:
                        'Tente novamente, caso persista o erro, entre em contato com o suporte.',
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Card className="login-card" title="Login">
            <Form
                name="normal_login"
                className="login-form"
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Favor inserir email válido',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            min: 8,
                            max: 20,
                            message: 'Favor inserir senha válida',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Senha"
                    />
                </Form.Item>
                <Form.Item className="login-card-button">
                    <Button loading={loading} type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default LoginComponent;
