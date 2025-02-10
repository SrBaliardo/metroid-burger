import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Header,
  CartCheckoutUserData,
  CartCheckoutPayment,
  CartResumeNeedChange,
  Footer,
} from '../../components';
import {
  Container,
  CoverSection,
  ChekoutImage,
  Hello,
  Title,
  Underline,
  ContainerChekout,
  ContainerData,
} from './styles';
import ChekoutImg from '../../assets/background-checkout.svg';

export function CartCheckout() {
  const checkoutFormRef = useRef(null);
  const [needChange, setNeedChange] = useState(false);
  const [changeValue, setChangeValue] = useState(0);
  const {
    state: { clientSecret, dpmCheckerLink },
  } = useLocation();

  if (!clientSecret) {
    return (
      <div>
        Erro! Volte e tente novamente. Se persistir, entre em contato conosco
        para reportar.
      </div>
    );
  }

  const setNeedChangeValue = (needChange, value) => {
    setNeedChange(needChange);
    setChangeValue(value);
  };

  return (
    <Container>
      <Header />

      <CoverSection>
        <ChekoutImage src={ChekoutImg} alt="background-checkout" />
        <Hello>CONFIRA OS DADOS PARA ENTREGA E FORMA DE PAGAMENTO</Hello>
      </CoverSection>

      <Title>Checkout - Finalizar Pedido</Title>
      <Underline></Underline>
      <ContainerChekout>
        <ContainerData>
          <CartCheckoutUserData />
          <CartCheckoutPayment
            setNeedChangeValue={setNeedChangeValue}
            clientSecret={clientSecret}
            dpmCheckerLink={dpmCheckerLink}
            checkoutFormRef={checkoutFormRef}
          />
        </ContainerData>
        <CartResumeNeedChange
          needChange={needChange}
          changeValue={changeValue}
          clientSecret={clientSecret}
          dpmCheckerLink={dpmCheckerLink}
          checkoutFormRef={checkoutFormRef}
        />
      </ContainerChekout>

      <Footer />
    </Container>
  );
}
