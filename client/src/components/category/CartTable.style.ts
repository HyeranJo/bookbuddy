import { styled } from 'styled-components';

export const Styled_CartTable = {
  H1: styled.h1`
    font-size: var(--title-font-size);
    margin-bottom: 20px;
    display: inline-block;
  `,
  Table: styled.table`
    /* width: 1095px; */
    width: 1300px;
    font-size: var(--basic-font-size);
    text-align: center;
    line-height: 34px;
    border-collapse: collapse; //표 테두리 삭제
    table-layout: fixed; //테이블 크기 고정
  `,
  Th: styled.th`
    background-color: var(--category-color);
  `,
  Tr: styled.tr`
    line-height: 50px;

    & > .booktitle {
      text-align: left;
      font-size: var(--third-title-font-size);
      padding-top: 5px;
    }
  `,
  DeleteTr: styled.tr`
    border-bottom: 1px solid gray;
    line-height: 50px;

    & > .delete {
      cursor: pointer;
      text-align: left;
      font-size: var(--basic-font-size);
    }
  `,
  Td: styled.td`
    white-space: nowrap; //줄바꿈 방지
    overflow: hidden; //넘치는 텍스트 숨기기
    text-overflow: ellipsis; //말줄임 기호(...)넣기
  `,
  Img: styled.img`
    height: 130px;
    margin-top: 15px;
  `,
  Input: styled.input`
    cursor: pointer;
    transform: scale(1.5);
  `,
  AmountTr: styled.tr`
    border-bottom: 1px solid gray;
    line-height: 50px;
    text-align: right;

    & > td {
      padding: 15px 30px;
      font-size: var(--third-title-font-size);
    }
    &:last-child {
      border-bottom: 0px;

      & > td {
        font-size: var(--subtitle-font-size);
        font-weight: bold;
      }
    }
  `,
};
