import React, {useState} from 'react';
import {PageLayout, Input} from 'components/common';
import styled from 'styled-components';

const Form = styled.form`
width: 100%;
max-width: 400px;
background: white;
border: 1px solid #eee;
padding: 16px;
box-sizing: border-box;
color: black;
border-radius: 4px;
`

export default function Login() {

  const [formFields, setFormFields ] = useState({username: '', password: ''});
  
  function handInputChange(e){
    e.persist();
    setFormFields(s => ({
      ...s,
      [e.target.name]: e.target.value
    }));
  }
  
  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          value={formFields.username}
          name="username"
          placeholder="Username"
          type="text"
          onChange={handInputChange}
        ></Input>
        <Input
          value={formFields.password}
          name="password"
          placeholder="Username"
          onChange={handInputChange}
          type="password"
        ></Input>
      </Form>
    </PageLayout>
  );
}
