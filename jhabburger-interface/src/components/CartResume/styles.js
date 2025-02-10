import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
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
    font-weight: bold;
    color: #000000;
    margin: 50px 0 10px 0;
  }
`;
