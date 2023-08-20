import { styled } from 'styled-components';

export const Styled_MypageTable = {
  Container: styled.div`
    width: 1095px;
  `,
  H1: styled.h1`
    font-size: var(--title-font-size);
    margin-bottom: 20px;
    display: inline-block;
  `,
  MessageSpan: styled.span`
    margin-left: 15px;
    font-size: var(--message-font-size);
  `,
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
  BookListDiv: styled.div`
    display: flex;
    flex-flow: column;
  `,
  Tr: styled.tr`
    border-bottom: 1px solid gray;
  `,
};
