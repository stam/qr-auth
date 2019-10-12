import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import Api from '../store/Api';
import Button from '../components/Button';

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



const FactoryScreen = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await Api.registerMedication(name);
      window.alert(`Medication ${name} successfully added`)
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
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
