import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 65%;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const CartHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  background-color: #333232;
  color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  grid-gap: 20px;
  padding: 10px;
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

export const CartProductsInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  padding: 10px;
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;

  p {
    margin-top: 10px;
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  justify-self: center;
`;

export const Quantity = styled.div`
  display: flex;
  gap: 20px;

  button {
    font-size: 24px;
    height: 30px;
    width: 30px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7px;
    &:hover {
      background-color: #38e5cc;
    }
    &:active {
      opacity: 0.7;
    }
  }
`;

export const MLinkContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 30px;
`;

export const MLink = styled(Link)`
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  border-bottom: 1px solid #000000;
  padding-bottom: 3px;
  color: #000000;
  transition: all 0.3s ease;
  &:hover {
    color: #f59705;
    border-bottom: 1px solid #f59705;
  }
`;
