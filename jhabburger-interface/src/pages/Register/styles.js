import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.svg';
import BackgroundBg from '../../assets/background-bg.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
  background: url('${BackgroundBg}');
  background-color: #1e1e1e;
  background-size: contain;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: #38e5cc;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

  button {
    margin-top: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: 'Orbitron', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;

  label {
    margin-left: 7px;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  height: 45px;
  font-family: 'Jura', sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding-left: 10px;
  border: ${(props) => (props.$error ? '3px solid #fe463c' : 'none')};
`;

export const LinkP = styled.p`
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  text-align: left;
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
`;

export const LinkSpan = styled.span`
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
`;
