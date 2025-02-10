import {
  CategoriesCarousel,
  ConteinerItems,
  Image,
  CategoryTitle,
} from './styles';
import { api } from '../../services/api';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { useNavigate } from 'react-router-dom';

export function CategoryCarousel() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }
    loadCategories();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  const handleCategoryClick = (categoryId) => {
    navigate('/products', { state: { categoryId } });
  };

  return (
    <CategoriesCarousel>
      <Carousel
        itemsToShow={5}
        itemPadding={[5, 10]}
        style={{ width: '98%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map((category) => (
            <ConteinerItems
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              <Image src={category.url} alt="category-image" />
              <CategoryTitle>{category.name}</CategoryTitle>
            </ConteinerItems>
          ))}
      </Carousel>
    </CategoriesCarousel>
  );
}
