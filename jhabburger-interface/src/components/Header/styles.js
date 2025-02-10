import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #1f1f1f;
  color: #ffffff;
`;

export const Logo = styled.img`
  width: 200px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const NavName = styled.a`
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.$isActive ? '#38e5cc' : '#ffffff')};
  transform: ${(props) => (props.$isActive ? 'scale(1.1)' : 'scale(1)')};
  transition: all 0.3s ease;
  &:hover {
    color: #38e5cc;
    transform: scale(1.1);
  }
`;

export const Span = styled.span`
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;

export const LoggedUserContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const UserImage = styled.img`
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const UserName = styled.a`
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #f59705;
`;

export const Logout = styled.a`
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #fe463c;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.7;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ListOrderIcon = styled.img`
  width: 30px;
`;

export const Orders = styled.a`
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.$isActive ? '#38e5cc' : '#ffffff')};
  transform: ${(props) => (props.$isActive ? 'scale(1.1)' : 'scale(1)')};
  transition: all 0.3s ease;
  &:hover {
    color: #38e5cc;
    transform: scale(1.1);
  }
`;
