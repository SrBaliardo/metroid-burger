import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AdminSideMenu } from '../../components';
import { ProductsList } from './Products';
import { Orders } from './Orders';
import { NewProduct } from './NewProduct';
import { EditProduct } from './EditProduct';
import { paths } from '../../utils/paths';
import { Container, DashboardContainer } from './styles';

export function Admin() {
  const location = useLocation();
  const [currentScreen, setCurrentScreen] = useState(() => {
    return localStorage.getItem('currentScreen') || 'products';
  });

  useEffect(() => {
    if (location.pathname === paths.EditProduct) {
      setCurrentScreen('editProduct');
    } else {
      localStorage.setItem('currentScreen', currentScreen);
    }
  }, [currentScreen, location.pathname]);

  return (
    <Container>
      <AdminSideMenu
        setCurrentScreen={setCurrentScreen}
        currentScreen={currentScreen}
      />
      <DashboardContainer>
        {currentScreen === 'orders' && <Orders />}
        {currentScreen === 'products' && <ProductsList />}
        {currentScreen === 'addNewProduct' && (
          <NewProduct setCurrentScreen={setCurrentScreen} />
        )}
        {location.pathname === paths.EditProduct && <EditProduct />}
      </DashboardContainer>
    </Container>
  );
}
