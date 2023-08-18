import { styled } from 'styled-components';

export const Styled_CartTable = {
  Table: styled.table`
    width: 1095px;
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
    border-bottom: 1px solid gray;
    line-height: 50px;

    & > .booktitle {
      text-align: left;
    }
    & > .delete {
      cursor: pointer;
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
};
