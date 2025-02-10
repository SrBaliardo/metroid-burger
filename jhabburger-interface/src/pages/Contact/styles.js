import styled from 'styled-components';
import Background from '../../assets/computador-listras.webp';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url('${Background}') no-repeat center;
  background-size: cover;
`;

export const ContainerContact = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 50px;

  p {
    color: #000000;
    font-weight: 500;
  }

  .ctt-img {
    width: 500px;
  }
`;

export const ContainerOurData = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Jura';
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 43px;
    margin-bottom: 25px;
    color: #f59705;
  }

  h2 {
    font-size: 20px;
  }
`;

export const ImageCallUs = styled.img`
  width: 500px;
`;

export const ContainerSocialMidia = styled.div`
  display: flex;
  gap: 15px;
  margin: 15px 0 25px 0;

  a {
    display: flex;
    gap: 5px;
    align-items: flex-end;
    transition: all 0.3s ease;
    &:hover {
      color: #38e5cc;
    }
  }
`;

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    display: flex;
    gap: 5px;
    align-items: flex-end;
    transition: all 0.3s ease;
    &:hover {
      color: #38e5cc;
    }
  }

  h2 {
    font-size: 20px;
  }
`;

export const Phone = styled.div`
  display: flex;
  gap: 15px;
`;

export const Mail = styled.div`
  display: flex;
  gap: 15px;
`;

export const ContainerLocalization = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  color: #f59705;

  img {
    height: 300px;
    width: 500px;
    border: 2px solid #bababa;
    border-radius: 10px;
    justify-content: center;
  }
`;
