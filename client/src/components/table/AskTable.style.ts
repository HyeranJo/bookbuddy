import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_AskTable = {
  Container: styled.div`
    width: 1095px;

    ${DeviceQuery.bigScreen`
      width: calc(1095px / ${screenScale.bigScreen});
    `}
  `,
  H1: styled.h1`
    font-size: var(--subtitle-font-size);
    margin-bottom: 20px;
    display: inline-block;

    ${DeviceQuery.bigScreen`
      margin-bottom: calc(20px / ${screenScale.bigScreen});
      font-size:calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
    `}
  `,
  MessageSpan: styled.span`
    margin-left: 15px;
    font-size: var(--message-font-size);

    ${DeviceQuery.bigScreen`
      margin-left: calc(15px / ${screenScale.bigScreen});
      font-size:calc(var(--message-font-size) / ${screenScale.bigScreen});
    `}
  `,
  Table: styled.table`
    width: 1095px;
    font-size: var(--basic-font-size);
    text-align: center;
    line-height: 34px;
    border-collapse: collapse; //표 테두리 삭제
    table-layout: fixed; //테이블 크기 고정

    ${DeviceQuery.bigScreen`
      width: calc(1095px / ${screenScale.bigScreen});
      font-size:calc(var(--basic-font-size) / ${screenScale.bigScreen});
      line-height: calc(34px / ${screenScale.bigScreen});
    `}

    & .title-body {
      text-align: left;
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
  Td: styled.td`
    white-space: nowrap; //줄바꿈 방지
    overflow: hidden; //넘치는 텍스트 숨기기
    text-overflow: ellipsis; //말줄임 기호(...)넣기
  `,
};
