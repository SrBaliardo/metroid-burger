import React, { useState } from 'react';
import {
  ContainerCardProduct,
  ConteinerItems,
  Image,
  ProductName,
  Description,
  ProductPrice,
  Overlay,
  LargeCard,
} from './styles';
import { ButtonCart } from '../../components';
import { useCart } from '../../hooks/CartContex';
import { useNavigate } from 'react-router-dom';

export function CardProduct({ product }) {
  const { addProductsToCart } = useCart();
  const navigate = useNavigate();
  const [isLarge, setIsLarge] = useState(false);

  const handleCardClick = () => {
    setIsLarge(true);
  };

  const closeLargeCard = () => {
    setIsLarge(false);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addProductsToCart(product);
    navigate('/cart');
  };

  return (
    <>
      <ContainerCardProduct onClick={handleCardClick}>
        <Image src={product.url} alt="product-offer-image" />
        <ConteinerItems>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>
            {product.formatedPrice}
            <ButtonCart onClick={handleAddToCart} />
          </ProductPrice>
        </ConteinerItems>
      </ContainerCardProduct>

      {isLarge && (
        <Overlay onClick={closeLargeCard}>
          <LargeCard onClick={(e) => e.stopPropagation()}>
            <Image src={product.url} alt="product-large-image" />
            <ProductName>{product.name}</ProductName>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              sit officia itaque nesciunt? Blanditiis, vero dignissimos. Iste
              iure cupiditate laboriosam ipsum repellat ex quisquam ipsam sed
              tempore, numquam, commodi nemo!
            </Description>
            <ProductPrice>
              {product.formatedPrice}
              <ButtonCart onClick={handleAddToCart} />
            </ProductPrice>
          </LargeCard>
        </Overlay>
      )}
    </>
  );
}
