import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckoutForm } from '../../components';
import {
  Container,
  CartHeader,
  ContainerPaymentMethods,
  ContainerMethod,
  ContainerChange,
  InputChange,
  ConfirmChange,
  ContainerQrCode,
  ContainerCard,
} from './styles';
import QrCodeImage from '../../assets/qr-code-metroid.png';
import { useCart } from '../../hooks/CartContex';
import ChekoutImg from '../../assets/background-checkout.svg';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../config/stripeConfig';

export function CartCheckoutPayment({
  setNeedChangeValue,
  clientSecret,
  dpmCheckerLink,
  checkoutFormRef,
}) {
  const [activePaymentMethod, setActivePaymentMethod] = useState('pix');
  const [needChange, setNeedChange] = useState(false);
  const [changeValue, setChangeValue] = useState('');
  const location = useLocation();

  const changePaymentMethod = (method) => {
    setActivePaymentMethod(method);
    setNeedChange(false);
    setChangeValue('');
    setNeedChangeValue(false, 0);
  };

  const confirmChange = () => {
    if (changeValue) {
      const numericValue = parseFloat(
        changeValue.replace(/[^\d,]/g, '').replace(',', '.'),
      );
      setNeedChangeValue(true, numericValue);
    }
  };

  function inputCurrencyMask(inputValue) {
    let valueAfterMask = inputValue.target.value;
    valueAfterMask = valueAfterMask.replace(/\D/g, '');
    valueAfterMask = valueAfterMask.replace(/(\d+)(\d{2})$/, '$1,$2');
    valueAfterMask = valueAfterMask.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    valueAfterMask = 'R$ ' + valueAfterMask;
    inputValue.target.value = valueAfterMask;
    setChangeValue(valueAfterMask);
  }

  return (
    <Container>
      <CartHeader>
        <p>Escolha a forma de pagamento</p>
      </CartHeader>

      <ContainerPaymentMethods>
        <ContainerMethod>
          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={activePaymentMethod === 'cash'}
                onChange={() => changePaymentMethod('cash')}
              />
              Dinheiro
            </label>
            {activePaymentMethod === 'cash' && (
              <ContainerChange>
                <p>Precisa de troco?</p>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="change"
                      checked={!needChange}
                      onChange={() => setNeedChange(false)}
                    />
                    Não
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="change"
                      checked={needChange}
                      onChange={() => setNeedChange(true)}
                    />
                    Sim
                  </label>
                  {needChange && (
                    <>
                      <InputChange
                        type="text"
                        name="inputValue"
                        placeholder="Para quanto?"
                        onKeyUp={inputCurrencyMask}
                      />
                      <ConfirmChange onClick={confirmChange}>
                        Confirmar
                      </ConfirmChange>
                    </>
                  )}
                </div>
              </ContainerChange>
            )}
          </div>

          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="debit-card"
                checked={activePaymentMethod === 'debit-card'}
                onChange={() => changePaymentMethod('debit-card')}
              />
              Cartão de Débito
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="credit-card"
                checked={activePaymentMethod === 'credit-card'}
                onChange={() => changePaymentMethod('credit-card')}
              />
              Cartão de Crédito
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="pix"
                checked={activePaymentMethod === 'pix'}
                onChange={() => changePaymentMethod('pix')}
              />
              PIX
            </label>
          </div>
        </ContainerMethod>
        {activePaymentMethod === 'pix' && (
          <ContainerQrCode>
            <img src={QrCodeImage} alt="qr-code" />
            <p>CHAVE:</p>
            <p>metroidburguer@email.com.br</p>
          </ContainerQrCode>
        )}

        {activePaymentMethod === 'debit-card' && (
          <ContainerCard>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm checkoutFormRef={checkoutFormRef} />
            </Elements>
          </ContainerCard>
        )}

        {activePaymentMethod === 'credit-card' && (
          <ContainerCard>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm checkoutFormRef={checkoutFormRef} />
            </Elements>
          </ContainerCard>
        )}
      </ContainerPaymentMethods>
    </Container>
  );
}
