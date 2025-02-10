import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import {
  HeaderContainer,
  Logo,
  NavContainer,
  NavName,
  Span,
  LoggedUserContainer,
  UserImage,
  ContainerInfoUser,
  UserName,
  Logout,
  OrdersContainer,
  ListOrderIcon,
  Orders,
} from './styles';
import BannerLogo from '../../assets/metroidburguer-banner.png';
import Avatar from '../../assets/user-helmet.jpg';
import ListOrdersIcon from '../../assets/list-orders.png';

export function Header() {
  const { userData, clearUserData } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const logout = () => {
    clearUserData();
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Logo src={BannerLogo} alt="banner-logo-metroidburger" />
      <NavContainer>
        <NavName onClick={() => navigate('/')} $isActive={pathname === '/'}>
          Home
        </NavName>
        <Span>|</Span>
        <NavName
          onClick={() => navigate('/products')}
          $isActive={pathname.includes('products')}
        >
          Produtos
        </NavName>
        <Span>|</Span>
        <NavName
          onClick={() => navigate('/contact')}
          $isActive={pathname.includes('contact')}
        >
          Contato
        </NavName>
      </NavContainer>
      <LoggedUserContainer>
        <UserImage
          src={userData?.url || Avatar}
          alt="user-image"
          onClick={() => navigate('/user-profile')}
        />
        <ContainerInfoUser>
          <Span>
            Olá,
            <UserName onClick={() => navigate('/user-profile')}>
              {' '}
              {userData?.name}
            </UserName>
          </Span>
          <Logout onClick={logout}>Sair</Logout>
        </ContainerInfoUser>
      </LoggedUserContainer>
      <OrdersContainer>
        <ListOrderIcon src={ListOrdersIcon} alt="list-order-icon" />
        <Orders onClick={() => navigate('/cart')}>Pedido</Orders>
      </OrdersContainer>
    </HeaderContainer>
  );
}
