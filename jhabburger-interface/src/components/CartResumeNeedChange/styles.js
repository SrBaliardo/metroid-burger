import styled from 'styled-components';
import { Button } from '../../components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .container {
    background-color: #ffffff;
    border-radius: 10px;
    width: 100%;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    height: 265px;
  }
`;

export const CartHeader = styled.header`
  width: 100%;
  background-color: #333232;
  color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const CartResumeInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 15px;
  margin: 10px;
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #828282;

  .right {
    text-align: right;
  }

  .total-order {
    font-size: 24px;
    color: #000000;
    margin-top: 50px;
  }
`;

export const ButtonBack = styled(Button)`
  background-color: #ffffff;
  color: #38e5cc;
  border: 1px solid #38e5cc;
  &:hover {
    background-color: #38e5cc !important;
    color: #ffffff !important;
  }
`;
