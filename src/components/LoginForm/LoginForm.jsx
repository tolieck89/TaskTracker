import React, { useState, useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { AuthContext, LanguageContext, ThemeContext } from '../providers/context'; 

const LoginForm = () => {
  const { setIsAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
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
    <div className="login-form-container">
      {/* <h2>{language==="EN" ? "Log in:" : "Увійти:"}</h2> */}
      <h4>{language==="EN" ? "Input your creds:" : "Введіть дані для входу:"}</h4>

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
    </div>
  );
};

export default LoginForm;
