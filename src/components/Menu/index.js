import React from 'react';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, Code, Nav, NavItem, NavText, SignOutButtom, SignOutButtomText,
} from './styles';

export default function Menu() {
  return (
    <Container>

      {/* QRCode */}
      <Code>
        <QRCode
          value="https://google.com"
          size={80}
          fgColor="#FFF"
          bgColor="#8B10AE"
        />
      </Code>

      {/* Menu */}
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="settings" size={20} color="#FFF" />
          <NavText>Configura NuConta</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configura cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      {/* Botão Sair */}
      <SignOutButtom onPress={() => {}}>
        <SignOutButtomText>SAIR DA CONTA</SignOutButtomText>
      </SignOutButtom>
    </Container>
  );
}
