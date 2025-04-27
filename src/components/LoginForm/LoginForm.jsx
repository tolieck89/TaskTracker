import React, { useState, useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { AuthContext } from '../providers/context'; 

const LoginForm = () => {
  const { setIsAuth } = useContext(AuthContext);
  const [error, setError] = useState('');

  const onFinish = (values) => {
    const { username, password } = values;
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuth(true);
    } else {
      setError('Невірний логін або пароль');
    }
  };

  return (
    <Form name="login" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Введіть ім’я користувача!' }]}
      >
        <Input placeholder="Ім’я користувача" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Введіть пароль!' }]}
      >
        <Input.Password placeholder="Пароль" />
      </Form.Item>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Увійти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
