import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_AskTable = {
  Container: styled.div`
    width: 1095px;

    ${DeviceQuery.bigScreen`
      width: calc(1095px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1095px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1095px / ${screenScale.tablet});
    `}
  `,
  H1: styled.h1`
    font-size: var(--subtitle-font-size);
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;

    ${DeviceQuery.bigScreen`
      margin-bottom: calc(20px / ${screenScale.bigScreen});
      font-size:calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-bottom: calc(20px / ${screenScale.desktop});
      font-size:calc(var(--subtitle-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      margin-bottom: calc(20px / ${screenScale.tablet});
      font-size:calc(var(--subtitle-font-size) / ${screenScale.tablet});
    `}

    & > div {
      display: flex;
      align-items: center;
    }
  `,
  MessageSpan: styled.span`
    margin-left: 15px;
    font-size: var(--message-font-size);

    ${DeviceQuery.bigScreen`
      margin-left: calc(15px / ${screenScale.bigScreen});
      font-size:calc(var(--message-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-left: calc(15px / ${screenScale.desktop});
      font-size:calc(var(--message-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      margin-left: calc(15px / ${screenScale.tablet});
      font-size:calc(var(--message-font-size) / ${screenScale.tablet});
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
    ${DeviceQuery.desktop`
      width: calc(1095px / ${screenScale.desktop});
      font-size:calc(var(--basic-font-size) / ${screenScale.desktop});
      line-height: calc(34px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1095px / ${screenScale.tablet});
      font-size:calc(var(--basic-font-size) / ${screenScale.tablet});
      line-height: calc(34px / ${screenScale.tablet});
    `}

    & .title-body {
      text-align: left;
    }

    & > tbody {
      & tr > td:last-child {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 4px;

        ${DeviceQuery.bigScreen`
          gap: calc(10px / ${screenScale.bigScreen});
          margin-top:calc(4px / ${screenScale.bigScreen});
        `}
        ${DeviceQuery.desktop`
          gap: calc(10px / ${screenScale.desktop});
          margin-top:calc(4px / ${screenScale.desktop});
        `}
        ${DeviceQuery.tablet`
          gap: calc(10px / ${screenScale.tablet});
          margin-top:calc(4px / ${screenScale.tablet});
        `}
      }
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

  DeletePatchBtn: styled.button`
    &:hover {
      cursor: pointer;
    }
  `,
};
