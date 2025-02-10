import React, { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import '../styles.css';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/CartContex';
import { api } from '../../../services/api';

export function CheckoutForm({ checkoutFormRef }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cartProducts, clearCartData } = useCart();
  const navigate = useNavigate();
  const {
    state: { dpmCheckerLink },
  } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe ou Elements com falha, tente novamente.');
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      toast.error(error.message);
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      const order = cartProducts.map((product) => {
        return {
          id: product.id,
          quantity: product.quantity,
          price: product.price,
        };
      });

      try {
        const { status } = await toast.promise(
          api.post('orders', { products: order }),
          {
            pending: '👨🏻‍💻 Realizando pedido...',
            success: '🙆🏻‍♂️ Pedido realizado com sucesso!',
            error: '🙅🏻‍♂️ Falha ao realizar pedido. Tente novamente.',
          },
        );

        if (status === 200 || status === 201) {
          setTimeout(() => {
            navigate(
              `/completed-order?payment_intent_client_secret=${paymentIntent.client_secret}`,
            );
          }, 2000);
          clearCartData();
        } else if (status === 400 || status === 409) {
        } else {
          throw new Error();
        }
      } catch (error) {
        toast.error('🤦🏻‍♂️ Falha no sistema! Tente novamente.');
      }
    } else {
      navigate(
        `/completed-order?payment_intent_client_secret=${paymentIntent.client_secret}`,
      );
    }

    setIsLoading(false);
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit} ref={checkoutFormRef}>
        <PaymentElement id="payment-element" options={{ layout: 'tabs' }} />
        {/* <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              'Pagar Agora'
            )}
          </span>
        </button> */}
        {message && <div id="payment-message">{message}</div>}

        {/* <div id="dpm-annotation">
          <p>
            Os métodos de pagamento são disponibilizados de acordo com sua
            região.&nbsp;
            <a
              href={dpmCheckerLink}
              target="_blank"
              rel="noopener noreferrer"
              id="dpm-integration-checker"
            >
              Ver métodos de pagamento.
            </a>
          </p>
        </div> */}
      </form>
    </>
  );
}
