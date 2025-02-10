import styled from 'styled-components';
import BackgroundBg from '../../assets/background-bg.svg';

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
`;

export const Hello = styled.h1`
  position: absolute;
  top: 20px;
  right: 50px;
  font-family: 'Road Rage', sans-serif;
  font-size: 70px;
  font-weight: 400;
  color: #ffffff;
`;

export const CategoriesSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
`;

export const OfferSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0 80px 0;
`;

export const CategoryTitle = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 61px;
  font-weight: 500;
  line-height: 25px;
  color: #f59705;
`;

export const OfferTitle = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 61px;
  font-weight: 500;
  line-height: 25px;
  color: #59ca46;
`;
