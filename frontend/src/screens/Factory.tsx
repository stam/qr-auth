import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import Api from '../store/Api';

const Form = styled.form`
  width: 80%;
  margin: auto;
  padding-top: 1rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  padding: 0.25rem 1rem;
`;

const Button = styled.button`
  cursor: pointer;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 120px;

  background: #2ea289;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 4px;

  &:disabled {
    opacity: 0.4;
    text-decoration: strikethrough;
  }
`;

const FactoryScreen = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    // setLoading(true);

    try {
      Api.registerMedication(name);
    } catch (e) {
      console.error(e);
    }

  }, [name])

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Register medication</h1>
      <label>Medication name</label>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Button disabled={loading}>Submit</Button>
    </Form>
  )
};

export default FactoryScreen;
