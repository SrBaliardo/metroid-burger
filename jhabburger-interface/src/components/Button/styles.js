import styled from 'styled-components';

export const ContainerButton = styled.button`
  font-family: 'Orbitron', sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  background-color: #38e5cc;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
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
