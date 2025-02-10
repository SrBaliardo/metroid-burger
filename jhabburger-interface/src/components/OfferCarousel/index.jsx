import { OffersCarousel } from './styles';
import { CardProduct } from '../../components';
import { api } from '../../services/api';
import Carousel from 'react-elastic-carousel';
import React, { useEffect, useState } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';

export function OfferCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products');

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) };
        });

      setOffers(onlyOffers);
    }
    loadOffers();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  return (
    <OffersCarousel>
      <Carousel
        itemsToShow={5}
        itemPadding={[5, 10]}
        style={{ width: '98%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </Carousel>
    </OffersCarousel>
  );
}
