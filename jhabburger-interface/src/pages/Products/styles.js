import styled from 'styled-components';
import BackgroundBg from '../../assets/background-bg.svg';
import { Button } from '../../components';

export const Container = styled.div`
  background: url('${BackgroundBg}');
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CoverSection = styled.section`
  width: 100%;
  position: relative;
`;

export const CoverImage = styled.img`
  width: 100%;
  background-color: #1f1f1f;
`;

export const Hello = styled.h1`
  position: absolute;
  width: 450px;
  top: 90px;
  right: 50px;
  font-family: 'Road Rage', sans-serif;
  font-size: 75px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
`;

export const ContainerCategoriesMenu = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  backdrop-filter: blur(2px);
`;

export const CategoryButton = styled.button`
  font-family: 'Jura', sans-serif;
  font-size: 24px;
  font-weight: bold;
  border-bottom: ${(props) =>
    props.$activeCategory ? '1.5px solid #f59705' : '#bebebf'};
  color: ${(props) => (props.$activeCategory ? '#f59705' : '#bebebf')};
  transform: ${(props) => (props.$activeCategory ? 'scale(1.1)' : 'scale(1)')};
  padding: 10px;
  background: none;
  line-height: 20px;
  transition: all 0.3s ease;
  &:hover {
    color: #f59705;
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
  }
`;

export const ProductsSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  gap: 30px;
  padding: 35px;
  justify-items: center;
  margin: 30px 0 150px 0;
`;

export const ButtonBack = styled(Button)`
  width: fit-content !important;
  margin-left: 55px;
  font-size: 1.2rem;
`;
