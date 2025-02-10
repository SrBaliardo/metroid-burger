import styled from 'styled-components';
import CartIcon from '../../assets/add-to-cart.png';

export const ContainerButton = styled.button`
  background: url('${CartIcon}') no-repeat center;
  background-size: 23px;
  background-color: #38e5cc;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  &&:hover {
    background-color: #ffffff;
    border: 2px solid #38e5cc;
  }
  &&:active {
    background-color: #38e5cc;
  }
`;
