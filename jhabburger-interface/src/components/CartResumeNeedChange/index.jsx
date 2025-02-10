import React, { useState, useEffect } from 'react';
import { Container, CartHeader, CartResumeInfo, ButtonBack } from './styles';
import { Button } from '../../components';
import { useCart } from '../../hooks/CartContex';
import { formatCurrency } from '../../utils/formatCurrency';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

export function CartResumeNeedChange({
  needChange,
  changeValue,
  clientSecret,
  dpmCheckerLink,
  checkoutFormRef,
}) {
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);
  const [deliveryTax] = useState(7);
  const { cartProducts, clearCartData } = useCart();

  useEffect(() => {
    const sumPriceItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setTotalOrderPrice(sumPriceItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    if (checkoutFormRef?.current) {
      checkoutFormRef.current.dispatchEvent(
        new Event('submit', { bubbles: true }),
      );
    }
    console.log(clientSecret);
    console.log(dpmCheckerLink);

    // const order = cartProducts.map((product) => {
    //   return { id: product.id, quantity: product.quantity };
    // });

    // try {
    //   const { status } = await toast.promise(
    //     api.post('orders', { products: order }),
    //     {
    //       pending: '👨🏻‍💻 Realizando pedido...',
    //       success: '🙆🏻‍♂️ Pedido realizado com sucesso!',
    //       error: '🙅🏻‍♂️ Falha ao realizar pedido. Tente novamente.',
    //     },
    //   );

    //   if (status === 200 || status === 201) {
    //     clearCartData();
    //     setTimeout(() => {
    //       location.replace('/');
    //     }, 2000);
    //   } else if (status === 400 || status === 409) {
    //   } else {
    //     throw new Error();
    //   }
    // } catch (error) {
    //   toast.error(
    //     '🤦🏻‍♂️ Falha no sistema! Tente novamente ou contate o suporte. 👨🏻‍💻',
    //   );
    // }
  };

  return (
    <Container>
      <div className="container">
        <CartHeader>
          <p>Resumo do pedido</p>
        </CartHeader>
        <CartResumeInfo>
          <p>Itens</p>
          <p className="right">{formatCurrency(totalOrderPrice)}</p>
          <p>Taxa de entrega</p>
          <p className="right">{formatCurrency(deliveryTax)}</p>
          <p className="total-order">Total</p>
          <p className="total-order right">
            {formatCurrency(totalOrderPrice + deliveryTax)}
          </p>
          {needChange && changeValue > 0 && (
            <>
              <p>Seu troco</p>
              <p className="right">
                {formatCurrency(changeValue - (totalOrderPrice + deliveryTax))}
              </p>
            </>
          )}
        </CartResumeInfo>
      </div>
      <Button onClick={submitOrder}>Finalizar Pedido</Button>
      <ButtonBack
        onClick={() => {
          window.history.back();
        }}
      >
        Voltar para o Carrinho
      </ButtonBack>
    </Container>
  );
}
