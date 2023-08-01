import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/FormGroup';

const Register = () => {
  const [formData, setFormData] = useState({
    memberId: '',
    memberNickname: '',
    password: '',
    memberName: '',
    memberPhone: '',
    email: '',
    city: '',
    street: '',
    zipcode: '',
    serviceAgreement: false, // Set the default value for serviceAgreement as false
  });
  const [idCheckMessage, setIdCheckMessage] = useState('');
  const [nicknameCheckMessage, setNicknameCheckMessage] = useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
  };

  const handleIdCheck = async () => {
    try {
      const response = await axios.post('/api/checkId', { memberId: formData.memberId });
      const data = response.data;
      setIdCheckMessage(data.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleNicknameCheck = async () => {
    try {
      const response = await axios.post('/api/checkNickname', { nickName: formData.memberNickname });
      const data = response.data;
      setNicknameCheckMessage(data.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  const addMember = async (memberData) => {
    try {
      const response = await axios.post('/api/addMember', memberData);
      return response.data; // If the server returns data in the response
    } catch (error) {
      throw new Error('Failed to add member.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addMember(formData);
      // Do something after successful submission
    } catch (error) {
      // Handle error here
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <FormGroup>
        <Form.Label>Member ID</Form.Label>
        <input type="text" name="memberId" value={formData.memberId} onChange={handleChange} />
        <Button type="button" onClick={handleIdCheck}>Check ID</Button>
        <div>{idCheckMessage}</div>
      </FormGroup>

      <FormGroup>
        <Form.Label>Member Nickname</Form.Label>
        <input type="text" name="memberNickname" value={formData.memberNickname} onChange={handleChange} />
        <Button type="button" onClick={handleNicknameCheck}>Check Nickname</Button>
        <div>{nicknameCheckMessage}</div>
      </FormGroup>

    <FormGroup>
      <Form.Label>Password</Form.Label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
    </FormGroup>

    <FormGroup>
      <Form.Label>Member Name</Form.Label>
      <input type="text" name="memberName" value={formData.memberName} onChange={handleChange} />
    </FormGroup>

    <FormGroup>
      <Form.Label>Member Phone</Form.Label>
      <input type="text" name="memberPhone" value={formData.memberPhone} onChange={handleChange} />
    </FormGroup>

    <FormGroup>
      <Form.Label>Email</Form.Label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
    </FormGroup>

    <FormGroup>
      <Form.Label>City</Form.Label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} />
    </FormGroup>

    <FormGroup>
      <Form.Label>Street</Form.Label>
      <input type="text" name="street" value={formData.street} onChange={handleChange} />
    </FormGroup>

    <FormGroup>
      <Form.Label>Zipcode</Form.Label>
      <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} />
    </FormGroup>

    <FormGroup>
      <Form.Label>Service Agreement</Form.Label>
      <input type="checkbox" name="serviceAgreement" checked={formData.serviceAgreement} onChange={handleChange} />
    </FormGroup>

    <Button type="submit">Add Member</Button>
  </form>
  );
};

export default Register;
