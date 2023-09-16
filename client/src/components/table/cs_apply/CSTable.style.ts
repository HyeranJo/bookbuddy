import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../../utils/Responsive';

interface CSTableProps {
  width: number;
}
export const Styled_CSTable = {
  Container: styled.div<CSTableProps>`
    width: ${props => props.width}px;

    ${DeviceQuery.bigScreen`
      width: calc( ${(props: CSTableProps) => props.width}px / ${
        screenScale.bigScreen
      });
    `}
    ${DeviceQuery.desktop`
      width: calc( ${(props: CSTableProps) => props.width}px / ${
        screenScale.desktop
      });
    `}
    ${DeviceQuery.tablet`
      width: calc( ${(props: CSTableProps) => props.width}px / ${
        screenScale.tablet
      });
    `}

    & > .pagination {
      margin-top: 20px;

      ${DeviceQuery.bigScreen`
        margin-top: calc(20px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        margin-top: calc(20px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        margin-top: calc(20px / ${screenScale.tablet});
      `}
    }
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
    font-weight: normal;

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
  Table: styled.table<CSTableProps>`
    width: ${props => props.width}px;
    font-size: var(--basic-font-size);
    text-align: center;
    line-height: 34px;
    border-collapse: collapse; //표 테두리 삭제
    table-layout: fixed; //테이블 크기 고정

    ${DeviceQuery.bigScreen`
      width: calc(${(props: CSTableProps) => props.width}px / ${
        screenScale.bigScreen
      });
      font-size:calc(var(--basic-font-size) / ${screenScale.bigScreen});
      line-height: calc(34px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(${(props: CSTableProps) => props.width}px / ${
        screenScale.desktop
      });
      font-size:calc(var(--basic-font-size) / ${screenScale.desktop});
      line-height: calc(34px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(${(props: CSTableProps) => props.width}px / ${
        screenScale.tablet
      });
      font-size:calc(var(--basic-font-size) / ${screenScale.tablet});
      line-height: calc(34px / ${screenScale.tablet});
    `}

    & .title-body {
      text-align: left;

      button {
        border: 0px;
        background-color: white;
        font-size: var(--basic-font-size);

        ${DeviceQuery.bigScreen`
          font-size:calc(var(--basic-font-size) / ${screenScale.bigScreen});
        `}
        ${DeviceQuery.desktop`
          font-size:calc(var(--basic-font-size) / ${screenScale.desktop});
        `}
        ${DeviceQuery.tablet`
          font-size:calc(var(--basic-font-size) / ${screenScale.tablet});
        `}

        &:hover {
          cursor: pointer;
          font-weight: bold;
        }
        &:focus {
          font-weight: bold;
        }
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
    height: 60px;

    ${DeviceQuery.bigScreen`
      height:calc(60px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      height:calc(60px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      height:calc(60px / ${screenScale.tablet});
    `}
  `,
  Td: styled.td`
    white-space: nowrap; //줄바꿈 방지
    overflow: hidden; //넘치는 텍스트 숨기기
    text-overflow: ellipsis; //말줄임 기호(...)넣기
  `,

  DeletePatchBtn: styled.button`
    border: 0px;
    background-color: white;
    font-size: var(--basic-font-size);
    margin-top: 3px;

    ${DeviceQuery.bigScreen`
      font-size:calc(var(--basic-font-size) / ${screenScale.bigScreen});
      margin-top:calc(3px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size:calc(var(--basic-font-size) / ${screenScale.desktop});
      margin-top:calc(3px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size:calc(var(--basic-font-size) / ${screenScale.tablet});
      margin-top:calc(3px / ${screenScale.tablet});
    `}
    &:first-child {
      color: var(--primary-background-color);
    }
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  `,

  NoList: styled.td`
    height: 300px;

    ${DeviceQuery.bigScreen`
      height:calc(300px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      height:calc(300px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      height:calc(300px / ${screenScale.tablet});
    `}
  `,
};
