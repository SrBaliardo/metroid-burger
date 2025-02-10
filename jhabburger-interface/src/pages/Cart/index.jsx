import React from 'react';
import { Header, CartItems, CartResume, Footer } from '../../components';
import {
  Container,
  CoverSection,
  ChekoutImage,
  Hello,
  Title,
  Underline,
  ContainerChekout,
} from './styles';
import ChekoutImg from '../../assets/background-checkout.svg';

export function Cart() {
  return (
    <Container>
      <Header />

      <CoverSection>
        <ChekoutImage src={ChekoutImg} alt="background-checkout" />
        <Hello>CONFIRA SEU PEDIDO ANTES DE CONTINUAR</Hello>
      </CoverSection>

      <Title>Checkout - Pedido</Title>
      <Underline></Underline>
      <ContainerChekout>
        <CartItems />
        <CartResume />
      </ContainerChekout>

      <Footer />
    </Container>
  );
}
