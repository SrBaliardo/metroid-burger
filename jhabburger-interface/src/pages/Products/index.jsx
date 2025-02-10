import { api } from '../../services/api';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';

import { Header, CardProduct, Footer } from '../../components';
import {
  Container,
  CoverSection,
  CoverImage,
  Hello,
  CategoryButton,
  ContainerCategoriesMenu,
  ProductsSection,
  ButtonBack,
} from './styles';
import Logo from '../../assets/hamburguer-face-products.svg';

export function Products() {
  const location = useLocation();
  const state = location.state || {};
  const categoryId = state.categoryId || 0;

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryId);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('products');
      const newProducts = data.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) };
      });

      setProducts(newProducts);
    }
    loadProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setProductsFilter(products);
    } else {
      const FilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );

      setProductsFilter(FilteredProducts);
    }
  }, [activeCategory, products]);

  useEffect(() => {
    if (categoryId !== 0) {
      setActiveCategory(categoryId);
    }
  }, [categoryId]);

  function goBack() {
    window.history.back();
  }

  return (
    <Container>
      <Header />

      <CoverSection>
        <CoverImage src={Logo} alt="banner-hambueguer" />
        <Hello>O MELHOR COMBO PRA DETONAR SUA FOME ESTÁ AQUI!</Hello>
      </CoverSection>

      <ContainerCategoriesMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              type="button"
              key={category.id}
              $activeCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </ContainerCategoriesMenu>

      <ButtonBack onClick={goBack}>&lt; Voltar</ButtonBack>

      <ProductsSection>
        {productsFilter &&
          productsFilter.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsSection>

      <Footer />
    </Container>
  );
}
