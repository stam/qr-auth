import React, { useState } from 'react';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';
import { observer } from 'mobx-react-lite';

import ScanBehavior from '../behaviors/scan';
import Button from '../components/Button';

const Container = styled.form`
  width: 80%;
  margin: auto;
  padding-top: 1rem;
  max-width: 800px;
`;

const Warning = styled.h2`
  color: orange;
`;

const Success = styled.h2`
  color: green;
`;

const scanBehavior = new ScanBehavior();

const ScanScreen = () => {
  const [qr] = useState(scanBehavior);

  return (
    <Container>
      <h1>Scan</h1>

      {qr.isIllegal && (
        <Warning>
          Duplicate QR code found! {qr.medication && qr.medication.name}
          <Button type="button" onClick={qr.reset}>
            Continue
          </Button>
        </Warning>
      )}
      {qr.isSuccessFul && (
        <Success>
          Medication checked in! {qr.medication && qr.medication.name}
          <Button type="button" onClick={qr.reset}>
            Continue
          </Button>
        </Success>
      )}
      {qr.isScanning && <h2>Please scan a QR code...</h2>}
      {qr.isProcessing && <Success>QR Code found! Processing...</Success>}
      {!qr.isDone && <QrReader delay={0} onScan={qr.handleScan} onError={qr.handleError} />}
    </Container>
  );
};

export default observer(ScanScreen);
