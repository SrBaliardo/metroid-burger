import styled from 'styled-components';
import TrashIcon from '../../assets/trash-bin.png';

export const ContainerButton = styled.button`
  background: url('${TrashIcon}') no-repeat center;
  background-size: 23px;
  background-color: #fe463c;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  &&:hover {
    background-color: #ffffff;
    border: 2px solid #fe463c;
  }
  &&:active {
    background-color: #fe463c;
  }
`;
