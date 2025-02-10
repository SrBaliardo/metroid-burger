import styled from 'styled-components';
import Background from '../../assets/background-metroid-lunch.png';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('${Background}') no-repeat center;
  background-size: cover;
`;
