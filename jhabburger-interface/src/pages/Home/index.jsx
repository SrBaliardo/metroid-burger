import React from 'react';
import {
  CategoryCarousel,
  OfferCarousel,
  Header,
  Footer,
} from '../../components';
import {
  Container,
  CoverSection,
  CoverImage,
  Hello,
  CategoriesSection,
  OfferSection,
  CategoryTitle,
  OfferTitle,
} from './styles';
import Logo from '../../assets/hamburguer-face-home.svg';

export function Home() {
  return (
    <Container>
      <Header />

      <CoverSection>
        <CoverImage src={Logo} alt="banner-hambueguer" />
        <Hello>Bem-vindo(a)</Hello>
      </CoverSection>

      <CategoriesSection>
        <CategoryTitle>CATEGORIAS</CategoryTitle>
        <CategoryCarousel />
      </CategoriesSection>

      <OfferSection>
        <OfferTitle>OFERTAS DO DIA</OfferTitle>
        <OfferCarousel />
      </OfferSection>

      <Footer />
    </Container>
  );
}
