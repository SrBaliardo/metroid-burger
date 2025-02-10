import { Container, Image, Message } from './styles';
import React from 'react';
import EmptyCartImage from '../../assets/empty-cart.png';

export function EmptyCart() {
  return (
    <Container>
      <Image src={EmptyCartImage} alt="empty-cart-image" />
      <Message>Seu carrinho está vazio 🥺</Message>
    </Container>
  );
}
