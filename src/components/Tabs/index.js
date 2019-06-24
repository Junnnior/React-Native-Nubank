import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        {/* Tab indicar Amigos */}
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>

        {/* Tab Cobrar */}
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>

        {/* Tab Depositar */}
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>

        {/* Tab transferir */}
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>

        {/* Tab Bloquear Cartão */}
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
