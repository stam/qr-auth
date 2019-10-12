import React, { useState } from 'react';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';

const Container = styled.form`
  width: 80%;
  margin: auto;
  padding-top: 1rem;
  max-width: 800px;
`;

enum State {
  Scanning,
  Warning,
  Processing,
}


const Warning = styled.h2`
  color: orange;
`;

const Success = styled.h2`
  color: green;
`;


const ScanScreen = () => {
  const [state, setState] = useState<State>(State.Scanning);
  const handleScan = async (data: string | null) => {
    if (state !== State.Scanning || !data) {
      return;
    }
    let medication;
    try {
      medication = JSON.parse(data);
    } catch (e) {
      // QR Scanned did not contain JSON
      return;
    }
    if (!medication.id || !medication.name) {
      // QR Scanned contains JSON but not our data
      return;
    }
    setState(State.Processing);
  };

  const handleError = (error: any) => {
    console.log('handleError', error);
  };

  return (
    <Container>
      <h1>Scan</h1>
      {state === State.Warning ? (
        <Warning>Duplicate QR code found!</Warning>
      ) : (
        <>
          {state === State.Scanning && <h2>Please scan a QR code...</h2>}
          {state === State.Processing && <Success>QR Code found! Processing...</Success>}
          <QrReader delay={200} onScan={handleScan} onError={handleError} />
        </>
      )}
    </Container>
  );
};

export default ScanScreen;
