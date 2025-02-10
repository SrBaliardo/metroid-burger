import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-width: 350px;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 70px 0;

  hr {
    margin: 50px 30px;
    background: #565656;
    padding: 1px;
  }

  img {
    width: 150px;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 15px;
  padding-left: 30px;
  background: ${(props) => (props.$isActive ? '#565656' : 'none')};
  border-radius: 5px;
  height: 50px;
  margin: 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: ${(props) => (props.$isActive ? 'scale(1)' : 'scale(1.1)')};
  }

  .item-icon {
    color: #ffffff;
  }
`;

export const Box = styled.div`
  min-width: 350px;
  height: 100%;
`;

export const Links = styled(Link)`
  color: #ffffff;
  font-family: 'Jura', sans-serif;
  font-weight: bold;
  line-height: 18px;
  width: 100%;
`;

export const ContainerLogout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: #ffffff;
  font-family: 'Jura', sans-serif;
  font-weight: bold;
  line-height: 18px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
    color: #fe463c;
  }
`;
