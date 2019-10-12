import React, { useState } from 'react';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';

import ScanBehavior from '../behaviors/scan';

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
      {qr.isScanning ? (
        <Warning>Duplicate QR code found!</Warning>
      ) : (
        <>
          {qr.isScanning && <h2>Please scan a QR code...</h2>}
          {qr.isProcessing && <Success>QR Code found! Processing...</Success>}
          <QrReader delay={200} onScan={qr.handleScan} onError={qr.handleError} />
        </>
      )}
    </Container>
  );
};

export default ScanScreen;
