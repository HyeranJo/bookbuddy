import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Payment = {
  Content: styled.div`
    display: flex;
    flex-flow: column;
    width: 1300px;

    ${DeviceQuery.bigScreen`
      width: calc(1300px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1300px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1300px / ${screenScale.tablet});
    `}

    & > .redButton {
      display: flex;
      justify-content: end;
      margin-top: 42px;

      ${DeviceQuery.bigScreen`
        margin-top: calc(42px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        margin-top: calc(42px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        margin-top: calc(42px / ${screenScale.tablet});
      `}
    }
  `,
  Address: styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--category-color);
    }
    & > .shipping-address {
      width: 722px;
      height: 472px;

      ${DeviceQuery.bigScreen`
        width: calc(722px / ${screenScale.bigScreen});
        height: calc(472px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(722px / ${screenScale.desktop});
        height: calc(472px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(722px / ${screenScale.tablet});
        height: calc(472px / ${screenScale.tablet});
      `}
    }
    & > .orderer-info {
      display: flex;
      flex-flow: column;
      width: 525px;
      height: 472px;

      ${DeviceQuery.bigScreen`
        width: calc(525px / ${screenScale.bigScreen});
        height: calc(472px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(525px / ${screenScale.desktop});
        height: calc(472px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(525px / ${screenScale.tablet});
        height: calc(472px / ${screenScale.tablet});
      `}
    }
  `,
  Table: styled.table`
    font-size: var(--basic-font-size);
    text-align: center;
    line-height: 34px;
    border-collapse: collapse; //표 테두리 삭제
    table-layout: fixed; //테이블 크기 고정

    ${DeviceQuery.bigScreen`
        font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
        line-height: calc(34px / ${screenScale.bigScreen});
      `}
    ${DeviceQuery.desktop`
        font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
        line-height: calc(34px / ${screenScale.desktop});
      `}
    ${DeviceQuery.tablet`
        font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
        line-height: calc(34px / ${screenScale.tablet});
      `}

    &#shipping-address-table {
      width: 650px;
      height: 350px;

      ${DeviceQuery.bigScreen`
        width: calc(650px / ${screenScale.bigScreen});
        height: calc(350px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(650px / ${screenScale.desktop});
        height: calc(350px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(650px / ${screenScale.tablet});
        height: calc(350px / ${screenScale.tablet});
      `}
    }
    &#orderer-info-table {
      width: 453px;
      height: 280px;

      ${DeviceQuery.bigScreen`
        width: calc(453px / ${screenScale.bigScreen});
        height: calc(280px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(453px / ${screenScale.desktop});
        height: calc(280px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(453px / ${screenScale.tablet});
        height: calc(280px / ${screenScale.tablet});
      `}
    }

    & td {
      /* border: solid 1px black; */
      text-align: left;
    }
  `,
  SubTitle: styled.div`
    width: 453px;
    margin-bottom: 20px;

    ${DeviceQuery.bigScreen`
      width: calc(453px / ${screenScale.bigScreen});
      margin-bottom: calc(20px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(453px / ${screenScale.desktop});
      margin-bottom: calc(20px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(453px / ${screenScale.tablet});
      margin-bottom: calc(20px / ${screenScale.tablet});
    `}

    & > h2 {
      margin: 15px 0;
      font-size: var(--subtitle-font-size);

      ${DeviceQuery.bigScreen`
        margin: calc(15px / ${screenScale.bigScreen}) 0;
        font-size: calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        margin: calc(15px / ${screenScale.desktop}) 0;
        font-size: calc(var(--subtitle-font-size) / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        margin: calc(15px / ${screenScale.tablet}) 0;
        font-size: calc(var(--subtitle-font-size) / ${screenScale.tablet});
      `}
    }

    & input,
    label {
      margin-right: 10px;
      font-size: var(--basic-font-size);

      ${DeviceQuery.bigScreen`
        margin-right: calc(10px / ${screenScale.bigScreen});
        font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        margin-right: calc(10px / ${screenScale.desktop});
        font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        margin-right: calc(10px / ${screenScale.tablet});
        font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
      `}
    }
  `,
  BookInfo: styled.div`
    margin-top: 30px;
    min-height: 150px;
    background-color: var(--category-color);
    font-size: var(--basic-font-size);
    padding: 35px;

    ${DeviceQuery.bigScreen`
      min-height: calc(150px / ${screenScale.bigScreen});
      margin-top: calc(30px / ${screenScale.bigScreen});
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      min-height: calc(150px / ${screenScale.desktop});
      margin-top: calc(30px / ${screenScale.desktop});
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      min-height: calc(150px / ${screenScale.tablet});
      margin-top: calc(30px / ${screenScale.tablet});
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
    `}
  `,
  AdrBtn: styled.button`
    width: 109px;
    height: 40px;
    margin-left: 20px;
    font-size: var(--input-font-size);
    border: 1px solid var(--light-gray-color);

    ${DeviceQuery.bigScreen`
      width: calc(109px / ${screenScale.bigScreen});
      height: calc(40px / ${screenScale.bigScreen});
      margin-left: calc(20px / ${screenScale.bigScreen});
      font-size: calc(var(--input-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(109px / ${screenScale.desktop});
      height: calc(40px / ${screenScale.desktop});
      margin-left: calc(20px / ${screenScale.desktop});
      font-size: calc(var(--input-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(109px / ${screenScale.tablet});
      height: calc(40px / ${screenScale.tablet});
      margin-left: calc(20px / ${screenScale.tablet});
      font-size: calc(var(--input-font-size) / ${screenScale.tablet});
    `}

    &:hover {
      cursor: pointer;
    }
  `,
};
