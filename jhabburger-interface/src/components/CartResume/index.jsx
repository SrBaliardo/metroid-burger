import { Container, CartHeader, CartResumeInfo } from './styles';
import { Button } from '../../components';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/CartContex';
import { formatCurrency } from '../../utils/formatCurrency';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

export function CartResume() {
  const { cartProducts } = useCart();
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);
  const [deliveryTax] = useState(7);
  const navigate = useNavigate();

  useEffect(() => {
    const sumPriceItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setTotalOrderPrice(sumPriceItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

    try {
      const { data } = await api.post('/create-payment-intent', { products });
      if (data) {
        navigate('/cart-checkout', { state: data });
      }
    } catch (error) {
      toast.error('Falha ao enviar. Tente novamente.');
      console.error('Falha ao enviar ordem', error);
    }
  };

  return (
    <div>
      <Container>
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
        </CartResumeInfo>
      </Container>
      <Button onClick={submitOrder}>Ir para Pagamento</Button>
    </div>
  );
}
