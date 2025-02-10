import styled from 'styled-components';

export const OffersCarousel = styled.div`
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
    margin-bottom: 20px;
  }
`;
