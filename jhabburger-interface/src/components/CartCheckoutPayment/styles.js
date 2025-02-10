import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  height: 330px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const CartHeader = styled.header`
  width: 100%;
  background-color: #333232;
  color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 15px;
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerPaymentMethods = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Jura', sans-serif;
`;

export const ContainerMethod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    margin-right: 5px;
  }
`;

export const ContainerChange = styled.div`
  margin: 5px 15px;
  color: #828282;
  font-size: 16px;

  div {
    display: flex;
    gap: 15px;
    margin-top: 5px;
    align-items: center;
    height: 30px;
  }
`;

export const ConfirmChange = styled.button`
  padding: 5px;
  border-radius: 5px;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  color: #ffffff;
  background-color: #38e5cc;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  &&:hover {
    background-color: #ffffff;
    color: #38e5cc;
  }
  &&:active {
    color: #ffffff;
    background-color: #38e5cc;
  }
`;

export const InputChange = styled.input`
  border-bottom: 1px solid #828282;
  width: 150px;
  margin-right: 5px;
  font-family: 'Jura', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #828282;
  padding: 3px 7px;
`;

export const ContainerQrCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  img {
    width: 150px;
    border-radius: 20px;
    margin-bottom: 10px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  height: 100%;
`;
