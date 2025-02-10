import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 100%;

  .css-11xur9t-MuiPaper-root-MuiTableContainer-root {
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin-top: 10px;
  }

  .css-1ygcj2i-MuiTableCell-root {
    background-color: #1f1f1f;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    line-height: 20px;
  }

  .css-1ex1afd-MuiTableCell-root,
  .css-dsuxgy-MuiTableCell-root,
  .lkGUXb .css-1ex1afd-MuiTableCell-root {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 20px;
  }

  .css-1howxi1-MuiTableCell-root {
    background-color: #565656;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    line-height: 20px;
  }
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 7px;
`;

export const ReactSelectStatus = styled(ReactSelect)`
  width: 200px;

  .css-13cymwt-control {
    cursor: pointer;
    border-radius: 8px;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  margin: 20px 0;
  padding: 10px;
  align-items: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  width: 70%;
`;

export const LinkMenu = styled.a`
  width: 80%;
  font-weight: ${(props) => (props.$isActiveStatus ? '600' : '400')};
  transform: ${(props) => (props.$isActiveStatus ? 'scale(1.05)' : 'scale(1)')};
  border: ${(props) =>
    props.$isActiveStatus ? '1.5px solid #f59705' : 'none'};
  border-radius: ${(props) => (props.$isActiveStatus ? '15px' : 'none')};
  color: #000000;
  padding: 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    font-weight: 600;
  }
`;
