import React from 'react';
import QRCode from 'react-native-qrcode';

import { Container, Code } from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://google.com"
          size={80}
          fgColor="#FFF"
          bgColor="#8B10AE"
        />
      </Code>
    </Container>
  );
}
