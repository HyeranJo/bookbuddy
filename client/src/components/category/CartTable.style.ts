import { styled } from 'styled-components';

export const Styled_CartTable = {
  Table: styled.table`
    width: 1095px;
    font-size: var(--basic-font-size);
    text-align: center;
    line-height: 34px;
    border-collapse: collapse; //표 테두리 삭제

    & > .quantity {
      width: 150px;
    }
    & > .price {
      width: 250px;
    }
  `,
  Th: styled.th`
    background-color: var(--category-color);
  `,
};
