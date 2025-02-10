import styled from 'styled-components';

export const CategoriesCarousel = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-top: 50px;

  .rec.rec-arrow {
    color: #efefef;
    background-color: #38e5cc;
    border: none;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  }

  .rec.rec-arrow:hover {
    color: #38e5cc;
    background-color: #efefef;
    font-weight: bold;
    border: 3px solid #38e5cc;
  }

  .rec.rec-arrow:disabled {
    background-color: #bebebf;
    color: #efefef;
    border: none;
  }

  .rec.rec-pagination {
    display: none;
  }

  .rec.rec-item-wrapper {
    height: 180px;
    width: 200px;
    position: relative;
  }
`;

export const ConteinerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const CategoryTitle = styled.h2`
  position: absolute;
  bottom: 15px;
  left: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 5px;
  font-weight: bold;
  color: #ffffff;
`;
