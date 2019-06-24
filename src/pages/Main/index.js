import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import {
  Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      {/* Header com Logo e Nome do Usuário */}
      <Header />

      {/* Conteúdo(Card) centralizado com Saldo e outras informações */}
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>

          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 16.611,43</Description>
          </CardContent>

          <CardFooter>
            <Annotation>Transferência de R$ 200,00 recebida de Fulano de Tal às 06:15h</Annotation>
          </CardFooter>
        </Card>
      </Content>

      {/* Tabs com scroll view no footer */}
      <Tabs />
    </Container>
  );
}
