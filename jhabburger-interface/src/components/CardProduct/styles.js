import styled from 'styled-components';

export const ContainerCardProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 250px;
  height: 200px;
  position: relative;
`;

export const ConteinerItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85%;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 155px;
`;

export const ProductName = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #f59705;
`;

export const ProductPrice = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #bebebf;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const LargeCard = styled.div`
  width: 400px;
  height: auto;
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  gap: 20px;

  ${Image} {
    width: 100px;
    height: 100px;
    position: static;
  }
`;
