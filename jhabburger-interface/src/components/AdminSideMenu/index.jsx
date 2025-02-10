import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import {
  Container,
  ContainerItems,
  Links,
  ContainerLogout,
  Box,
} from './styles';
import { tagsMenu } from './tags-menu';
import LogoutIcon from '@mui/icons-material/Logout';
import Boss from '../../assets/metroids-boss.png';

export function AdminSideMenu({ setCurrentScreen, currentScreen }) {
  const { clearUserData } = useUser();
  const navigate = useNavigate();

  const logout = () => {
    clearUserData();
    navigate('/login');
  };

  return (
    <Container>
      <img src={Boss} />

      <Box>
        <hr></hr>
        {tagsMenu.map((item) => (
          <ContainerItems
            key={item.id}
            onClick={() => setCurrentScreen(item.screen)}
            $isActive={currentScreen === item.screen}
          >
            <item.icon className="item-icon" />
            <Links to={item.link}>{item.label}</Links>
          </ContainerItems>
        ))}
        <hr></hr>
        <ContainerLogout>
          <LogoutIcon className="item-icon" />
          <a onClick={logout}>Sair</a>
        </ContainerLogout>
      </Box>
    </Container>
  );
}
