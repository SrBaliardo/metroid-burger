import React from 'react';
import {
  Container,
  CartHeader,
  CartProductsInfo,
  Image,
  Quantity,
  MLinkContainer,
  MLink,
} from './styles';
import { EmptyCart, ButtonTrash } from '../../components';
import { useCart } from '../../hooks/CartContex';
import { formatCurrency } from '../../utils/formatCurrency';

export function CartItems() {
  const { cartProducts, increaseQuantity, decreaseQuantity, deleteProduct } =
    useCart();

  return (
    <Container>
      <CartHeader>
        <p></p>
        <p>Item</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </CartHeader>

      {cartProducts && cartProducts?.length > 0 ? (
        cartProducts.map((product) => (
          <CartProductsInfo key={product.id}>
            <Image src={product.url} alt="product-image" />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <Quantity>
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </Quantity>
            <p>{formatCurrency(product.price * product.quantity)}</p>
            <ButtonTrash onClick={() => deleteProduct(product.id)} />
          </CartProductsInfo>
        ))
      ) : (
        <EmptyCart />
      )}
      <MLinkContainer>
        <MLink to={'/products'}>&lt; Adicionar mais itens</MLink>
      </MLinkContainer>
    </Container>
  );
}
