import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Api from '../store/Api';

const Container = styled.form`
  width: 80%;
  margin: auto;
  padding-top: 1rem;
  max-width: 800px;
  height: 90vh;
  overflow-y: scroll;
`;

const QrImage = styled.img`
  display: inline-block;
  width: 240px;
  height: 240px;
`;

interface MedicationData {
  id: string;
  name: string;
}

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
`;

const DemoScreen = () => {
  const [data, setData] = useState<MedicationData[]>([]);

  useEffect(() => {
    Api.getMedication().then(res => setData(res.data));
  }, []);

  return (
    <Container>
      {data.map(med => (
        <Item key={med.id}>
          <QrImage src={`/api/static/${med.id}.png`} />
          {med.name}
        </Item>
      ))}
    </Container>
  );
};

export default DemoScreen;
