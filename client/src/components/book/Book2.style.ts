import styled from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Book2 = {
  container: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > span {
      font-family: 'Black Ops One', cursive;
      font-size: 100px;
      color: var(--light-gray-color);

      ${DeviceQuery.bigScreen`
        font-size: calc(100px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        font-size: calc(100px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        font-size: calc(100px / ${screenScale.tablet});
      `}
    }
  `,
  wrapper: styled.div`
    width: 220px;
    height: 270px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${DeviceQuery.bigScreen`
      width: calc(220px / ${screenScale.bigScreen});
      height: calc(270px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(220px / ${screenScale.desktop});
      height: calc(270px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(220px / ${screenScale.tablet});
      height: calc(270px / ${screenScale.tablet});
    `}
  `,
  img: styled.img`
    width: 190px;
    height: 240px;

    ${DeviceQuery.bigScreen`
      width: calc(190px / ${screenScale.bigScreen});
      height: calc(240px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(190px / ${screenScale.desktop});
      height: calc(240px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(190px / ${screenScale.tablet});
      height: calc(240px / ${screenScale.tablet});
    `}
  `,
  Content: styled.div`
    display: flex;
    flex-flow: column;
    width: 600px;
    border: 7px dashed var(--category-color);
    padding: 20px;
    gap: 30px;

    ${DeviceQuery.bigScreen`
      width: calc(600px / ${screenScale.bigScreen});
      border: calc(7px / ${screenScale.bigScreen}) dashed var(--category-color);
    `}
    ${DeviceQuery.desktop`
      width: calc(600px / ${screenScale.desktop});
      border: calc(7px / ${screenScale.desktop}) dashed var(--category-color);
    `}
    ${DeviceQuery.tablet`
      width: calc(600px / ${screenScale.tablet});
      border: calc(7px / ${screenScale.tablet}) dashed var(--category-color);
    `}
  `,
  Name: styled.p`
    font-size: var(--third-title-font-size);
    font-weight: bold;
    cursor: pointer;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--third-title-font-size) / ${screenScale.tablet});
    `}
  `,
  Info: styled.div`
    display: flex;
    flex-flow: column;
  `,
  Span: styled.span`
    font-size: var(--basic-font-size);

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
    `}
  `,
};
