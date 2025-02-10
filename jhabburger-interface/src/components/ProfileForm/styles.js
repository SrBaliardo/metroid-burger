import styled from 'styled-components';
import { Button } from '..';
import { Link } from 'react-router-dom';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EditNoteIcon from '@mui/icons-material/EditNote';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
`;

export const ContainerContent = styled.div`
  display: flex;
  height: 100%;
  width: 900px;
  padding: 20px;
  border: 5px double #dfdfdf;
  border-radius: 10px;
  position: relative;
  background-color: transparent;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(3.5px);
    z-index: -1;
    border-radius: 5px;
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    padding: 5px;
    border: 2px solid #dfdfdf;
    border-radius: 10px;
  }

  img {
    max-width: 180px;
    max-height: 180px;
    height: 100%;
    width: auto;
    padding: 5px;
    border-radius: 10px;
  }
`;

export const UploadLabel = styled.label`
  padding: 5px 10px;
  width: 200px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed;
  border-radius: 10px;
  height: 40px;
  gap: 10px;
  margin: 15px 0;
  cursor: pointer;

  input {
    opacity: 0;
    width: 1px;
  }
  &:hover {
    color: #ffffff;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 35px;
  width: 100%;
  color: #000000;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }

  input {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 40px;
    padding: 0 10px;
    color: #ffffff;
  }

  a {
    text-decoration: underline;
  }

  label {
    padding-left: 5px;
    color: #000000;
  }

  .contaienr-title {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    [data-tooltip] {
      position: relative;
      font-weight: bold;
    }

    [data-tooltip]:after {
      display: none;
      position: absolute;
      top: -5px;
      padding: 5px;
      border-radius: 8px;
      right: calc(100% + 2px);
      content: attr(data-tooltip);
      white-space: nowrap;
      background-color: #f59705;
      color: White;
    }

    [data-tooltip]:hover:after {
      display: block;
    }
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: row !important;
  gap: 20px !important;
  margin-bottom: 35px;
`;

export const ContainerAdress = styled.div`
  display: flex;
  gap: 20px !important;

  .address {
    gap: 20px;
  }

  .street {
    flex-direction: row !important;
    gap: 20px;
  }

  .number {
    width: 70px !important;
  }

  .neighbor {
    flex-direction: row !important;
    gap: 20px;
  }

  .uf {
    width: 70px !important;
  }
`;

export const SearchButton = styled(Button)`
  width: 120px !important;
  height: auto;
  /* background-color: #bfbfbf !important; */
  gap: 10px;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 16px;
  align-self: flex-end;
`;

export const AddLink = styled(Link)`
  font-family: 'Jura', sans-serif;
  padding-bottom: 3px;
  color: #000000;
  display: flex;
  align-items: flex-end;
  justify-content: right;
  padding: 0 5px;
  transition: all 0.3s ease;
  &:hover {
    color: #f59705;
  }
`;

export const IconAddAddress = styled(AddLocationAltIcon)``;

export const ContainerSubmit = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row !important;
  gap: 20px !important;
  justify-content: end !important;
  padding: 20px 0;
  align-items: flex-end !important;
`;

export const CancelButton = styled(Button)`
  width: 200px;
  background-color: #ffffff;
  color: #f59705;
  font-size: 20px;
  &&:hover {
    background-color: #f59705;
    color: #ffffff;
  }
`;

export const SubmitButton = styled(Button)`
  width: 200px;
  font-size: 20px;
`;

export const EditIcon = styled(EditNoteIcon)`
  font-size: 50px !important;
  cursor: pointer;
  &:hover {
    color: #f59705;
  }
`;
