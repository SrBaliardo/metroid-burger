import styled from 'styled-components';
import EditNoteIcon from '@mui/icons-material/EditNote';

export const Container = styled.div`
  .css-11xur9t-MuiPaper-root-MuiTableContainer-root {
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  .css-12q85cb-MuiTableCell-root,
  .css-1howxi1-MuiTableCell-root {
    color: #ffffff;
    background-color: #1f1f1f;
    font-weight: bold;
  }
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 7px;
`;

export const IconCheck = styled.p`
  color: #59ca46;
  transform: scale(1.3);
`;

export const IconUncheck = styled.p`
  color: #fe463c;
  transform: scale(1.3);
`;

export const IconEdit = styled(EditNoteIcon)`
  transform: scale(1.7);
  color: #004498;
  cursor: pointer;
  &:hover {
    color: #0c70cc;
  }
`;
