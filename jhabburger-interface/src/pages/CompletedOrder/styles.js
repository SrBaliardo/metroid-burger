import styled from 'styled-components';
import BackgroundBg from '../../assets/background-bg.svg';
import Background from '../../assets/background-black-color-texture.jpg';

export const Container = styled.div`
  background: url('${BackgroundBg}');
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .subcontainer {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-around;
  }
`;

export const CoverSection = styled.section`
  background: url('${Background}') no-repeat center;
  background-size: cover;
  width: 100%;
  height: 300px;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const ChekoutImage = styled.img`
  width: 300px;
`;

export const Hello = styled.h1`
  width: 450px;
  font-family: 'Road Rage', sans-serif;
  font-size: 70px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
`;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  font-weight: 800;
  padding: 10px;
  color: #f59705;
  margin-top: 50px;
`;

export const Underline = styled.h2`
  padding: 10px;
  margin-bottom: 50px;
  border-top: 4px solid #f59705;
  width: 300px;
`;

export const ContainerChekout = styled.section`
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 500px;
  }

  button {
    width: fit-content;
    font-size: 1.2rem;
    background-color: #f59705;
    &:hover {
      color: #f59705 !important;
    }
  }
`;

export const Footer = styled.footer`
  height: 20px;
  width: 100%;
  background-color: #1f1f1f;
  text-align: center;
  font-family: 'Jura', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
`;
