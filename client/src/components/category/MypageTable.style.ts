import { styled } from 'styled-components';

export const Styled_MypageTable = {
  Table: styled.table`
    width: 1095px;
    font-size: var(--basic-font-size);
    text-align: center;
    line-height: 34px;
    border-collapse: collapse; //표 테두리 삭제

    & > .date {
      width: 200px;
    }
    & > .number {
      width: 250px;
    }
    & > .status {
      width: 200px;
    }
  `,
  Th: styled.th`
    background-color: var(--category-color);
  `,
};
