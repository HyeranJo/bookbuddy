import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_MypageTable = {
  Container: styled.div`
    width: 1095px;

    ${DeviceQuery.bigScreen`
      width: calc(1095px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1095px / ${screenScale.desktop});
    `}
  `,
  H1: styled.h1`
    font-size: var(--subtitle-font-size);
    margin-bottom: 20px;
    display: inline-block;

    ${DeviceQuery.bigScreen`
      margin-bottom: calc(20px / ${screenScale.bigScreen});
      font-size: calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-bottom: calc(20px / ${screenScale.desktop});
      font-size: calc(var(--subtitle-font-size) / ${screenScale.desktop});
    `}
  `,
  MessageSpan: styled.span`
    margin-left: 15px;
    font-size: var(--message-font-size);

    ${DeviceQuery.bigScreen`
      margin-left: calc(15px / ${screenScale.bigScreen});
      font-size: calc(var(--message-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-left: calc(15px / ${screenScale.desktop});
      font-size: calc(var(--message-font-size) / ${screenScale.desktop});
    `}
  `,
  Table: styled.table`
    width: 1095px;
    font-size: var(--basic-font-size);
    text-align: center;
    line-height: 34px;
    border-collapse: collapse; //표 테두리 삭제

    ${DeviceQuery.bigScreen`
      width: calc(1095px / ${screenScale.bigScreen});
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      line-height: calc(34px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1095px / ${screenScale.desktop});
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
      line-height: calc(34px / ${screenScale.desktop});
    `}

    & > .date {
      width: 200px;

      ${DeviceQuery.bigScreen`
        width: calc(200px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(200px / ${screenScale.desktop});
      `}
    }
    & > .number {
      width: 250px;

      ${DeviceQuery.bigScreen`
        width: calc(250px / ${screenScale.bigScreen});
      `}
    }
    & > .status {
      width: 200px;

      ${DeviceQuery.bigScreen`
        width: calc(200px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(200px / ${screenScale.desktop});
      `}
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
