import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Header = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index: 100;
  `,
  Div: styled.div`
    display: flex;
    min-width: 1512px;
    height: 133px;
    background-color: white;

    align-items: center;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;

    ${DeviceQuery.bigScreen`
      min-width: calc(1512px / ${screenScale.bigScreen});
      height: calc(133px / ${screenScale.bigScreen});
      padding-left: calc(50px / ${screenScale.bigScreen});
      padding-right: calc(50px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      min-width: calc(1512px / ${screenScale.desktop});
      height: calc(133px / ${screenScale.desktop});
      padding-left: calc(50px / ${screenScale.desktop});
      padding-right: calc(50px / ${screenScale.desktop});
    `}
     ${DeviceQuery.tablet`
      min-width: calc(1512px / ${screenScale.tablet});
      height: calc(133px / ${screenScale.tablet});
      padding-left: calc(50px / ${screenScale.tablet});
      padding-right: calc(50px / ${screenScale.tablet});
    `}
  `,
  Menu: styled.div`
    display: flex;
    align-items: baseline;
    gap: 30px;

    ${DeviceQuery.bigScreen`
      gap: calc(30px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      gap: calc(30px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      gap: calc(30px / ${screenScale.tablet});
    `}
  `,
  Span: styled.span`
    cursor: pointer;
    position: relative; // info-nav랑 연결
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

    &:hover > div {
      display: block;
    }
  `,
  Info: styled.div`
    display: none;

    z-index: 100;
    position: absolute;
    top: 0px;
    right: -50px;

    width: 150px;
    padding-top: 50px;

    ${DeviceQuery.bigScreen`
      right: calc(-50px / ${screenScale.bigScreen});
      width: calc(150px / ${screenScale.bigScreen});
      padding-top: calc(50px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      right: calc(-50px / ${screenScale.desktop});
      width: calc(150px / ${screenScale.desktop});
      padding-top: calc(50px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      right: calc(-50px / ${screenScale.tablet});
      width: calc(150px / ${screenScale.tablet});
      padding-top: calc(50px / ${screenScale.tablet});
    `}
  `,
};
