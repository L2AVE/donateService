import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [formData, setFormData] = useState({
    loginId: '',
    password: '',
  });

  const [loginStatus, setLoginStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //서버요청
  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', formData);
      const data = response.data;
      setLoginStatus(data.status);
    } 
    catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Form>
      <Form.Group controlId="formLoginId">
        <Form.Label>Login ID</Form.Label>
        <Form.Control type="text" name="loginId" value={formData.loginId} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
      </Form.Group>

      <Button type="button" onClick={handleLogin}>Login</Button>
      {loginStatus && <div>{loginStatus}</div>}
    </Form>
  );
};

export default Login;
