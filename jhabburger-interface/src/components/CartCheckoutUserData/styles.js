import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const Container2 = styled.div`
  display: flex;
  padding: 25px;
  gap: 10px;
  margin-left: 20px;
  justify-content: space-between;
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

export const ContainerAddress = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;

export const ContainerChangeAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  gap: 10px;
  margin-right: 100px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Jura', sans-serif;
  border: 1px solid #858585;
  border-radius: 10px;
`;

export const AddContainer = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const AddLink = styled(Link)`
  font-family: 'Jura', sans-serif;
  font-size: 14px;
  padding-bottom: 3px;
  color: #858585;
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  &:hover {
    color: #f59705;
  }
`;

export const IconAddAddress = styled(AddLocationAltIcon)`
  transform: scale(0.7);
`;

export const LinkContainer = styled.div`
  padding: 0 0 30px 25px;
  margin-left: 20px;
`;

export const LinkChangeAddress = styled.a`
  font-family: 'Jura', sans-serif;
  font-size: 16px;
  border-bottom: 1px solid #858585;
  padding-bottom: 3px;
  color: #858585;
  transition: all 0.3s ease;
  &:hover {
    color: #f59705;
    border-bottom: 1px solid #f59705;
  }

  input {
    opacity: 0;
    width: 1px;
  }
`;
