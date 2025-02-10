import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    background-color: #565656;
    padding: 5px 30px 30px 30px;
    border-radius: 10px;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  }

  button {
    margin-top: 50px;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Label = styled.p`
  padding: 5px 10px;
  font-weight: bold;
  margin-top: 25px;
`;

export const UploadLabel = styled.label`
  padding: 5px 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 10px;
  height: 40px;
  gap: 10px;
  margin: 25px 0 10px 0;
  cursor: pointer;
  input {
    opacity: 0;
    width: 1px;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  height: 40px;
  width: 100%;
  min-width: 350px;
  padding: 0 10px;
  font-family: 'Poppins', sans-serif;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  border: ${(props) => (props.$error ? '3px solid #fe463c' : 'none')};
  &&[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const CategorySelect = styled(ReactSelect)`
  color: #000000;
  margin-bottom: 10px;

  .css-13cymwt-control {
    cursor: pointer;
    border-radius: 10px;
    height: 40px;
    border: ${(props) => (props.$error ? '3px solid #fe463c' : 'none')};
  }
`;

export const Offer = styled.p`
  padding: 10px;
  font-weight: bold;
  margin-top: 25px;

  input {
    transform: scale(1.7);
  }
`;
