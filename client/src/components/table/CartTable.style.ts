import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_CartTable = {
  H1: styled.h1`
    font-size: var(--title-font-size);
    margin-bottom: 20px;
    display: inline-block;

    ${DeviceQuery.bigScreen`
      font-size:calc(var(--title-font-size) / ${screenScale.bigScreen});
      margin-bottom: calc(20px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size:calc(var(--title-font-size) / ${screenScale.desktop});
      margin-bottom: calc(20px / ${screenScale.desktop});
    `}
  `,
  Table: styled.table`
    /* width: 1095px; */
    width: 1300px;
    font-size: var(--basic-font-size);
    text-align: center;
    line-height: 34px;
    border-collapse: collapse; //표 테두리 삭제
    table-layout: fixed; //테이블 크기 고정

    ${DeviceQuery.bigScreen`
      width: calc(1300px / ${screenScale.bigScreen});
      font-size:calc(var(--basic-font-size) / ${screenScale.bigScreen});
      line-height: calc(34px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1300px / ${screenScale.desktop});
      font-size:calc(var(--basic-font-size) / ${screenScale.desktop});
      line-height: calc(34px / ${screenScale.desktop});
    `}
  `,
  Th: styled.th`
    background-color: var(--category-color);

    & > input {
      cursor: pointer;
      transform: scale(1.5);
    }
  `,
  Tr: styled.tr`
    line-height: 50px;

    ${DeviceQuery.bigScreen`
      line-height: calc(50px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      line-height: calc(50px / ${screenScale.desktop});
    `}

    & > .booktitle {
      text-align: left;
      font-size: var(--third-title-font-size);
      padding-top: 5px;

      ${DeviceQuery.bigScreen`
        font-size:calc(var(--third-title-font-size) / ${screenScale.bigScreen});
        padding-top: calc(5px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        font-size:calc(var(--third-title-font-size) / ${screenScale.desktop});
        padding-top: calc(5px / ${screenScale.desktop});
      `}
    }
    & * .checkbox {
      cursor: pointer;
      transform: scale(1.5);
    }
    & * img {
      height: 130px;
      margin-top: 15px;

      ${DeviceQuery.bigScreen`
        height: calc(130px/ ${screenScale.bigScreen});
        margin-top: calc(15px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        height: calc(130px/ ${screenScale.desktop});
        margin-top: calc(15px / ${screenScale.desktop});
      `}
    }
    & > .booktitle {
      white-space: nowrap; //줄바꿈 방지
      overflow: hidden; //넘치는 텍스트 숨기기
      text-overflow: ellipsis; //말줄임 기호(...)넣기
    }
    & :last-child {
      font-size: var(--third-title-font-size);

      ${DeviceQuery.bigScreen`
        font-size:calc(var(--third-title-font-size) / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        font-size:calc(var(--third-title-font-size) / ${screenScale.desktop});
      `}
    }
  `,
  DeleteTr: styled.tr`
    border-bottom: 1px solid gray;
    line-height: 50px;

    ${DeviceQuery.bigScreen`
      line-height: calc(50px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      line-height: calc(50px / ${screenScale.desktop});
    `}

    & > .delete {
      cursor: pointer;
      text-align: left;
      font-size: var(--basic-font-size);

      ${DeviceQuery.bigScreen`
        font-size:calc(var(--basic-font-size) / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        font-size:calc(var(--basic-font-size) / ${screenScale.desktop});
      `}
    }
  `,
  AmountTr: styled.tr`
    border-bottom: 1px solid gray;
    line-height: 50px;
    text-align: right;

    ${DeviceQuery.bigScreen`
      line-height: calc(50px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      line-height: calc(50px / ${screenScale.desktop});
    `}

    & > td {
      padding: 15px 30px;
      font-size: var(--third-title-font-size);

      ${DeviceQuery.bigScreen`
        padding: calc(15px / ${screenScale.bigScreen}) calc(30px / ${screenScale.bigScreen});
        font-size:calc(var(--third-title-font-size) / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        padding: calc(15px / ${screenScale.desktop}) calc(30px / ${screenScale.desktop});
        font-size:calc(var(--third-title-font-size) / ${screenScale.desktop});
      `}
    }
    &:last-child {
      border-bottom: 0px;

      & > td {
        font-size: var(--subtitle-font-size);
        font-weight: bold;

        ${DeviceQuery.bigScreen`
          font-size:calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
        `}
        ${DeviceQuery.desktop`
          font-size:calc(var(--subtitle-font-size) / ${screenScale.desktop});
        `}
      }
    }
  `,
};
