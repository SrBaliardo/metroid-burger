import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutFormCompleted, Header, Footer } from '../../components';
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
import CompleteImg from '../../assets/metroidburger-checkout(3nobg).png';

export function CompletedOrder() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />

      <CoverSection>
        <ChekoutImage src={ChekoutImg} alt="background-checkout" />
        <Hello>AGORA É SÓ AGUARDAR. CONFIRA SUA ENTREGA</Hello>
      </CoverSection>

      <Title>Pedido Realizado com Sucesso!</Title>
      <Underline></Underline>
      <ContainerChekout>
        <div className="subcontainer">
          <img src={CompleteImg} alt="image-metroidburguer-complete" />

          <CheckoutFormCompleted />
        </div>
      </ContainerChekout>

      <Footer />
    </Container>
  );
}
