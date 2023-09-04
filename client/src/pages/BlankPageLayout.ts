import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../utils/Responsive';

export const Styled_Layout = {
  // 필수
  Container: styled.div`
    display: flex;
    justify-content: center;
  `,
  // 선택(sidebar 있는 경우)
  Div_WithSidebar: styled.div`
    width: 1512px;
    display: flex;

    ${DeviceQuery.bigScreen`
      width: calc(1512px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1512px / ${screenScale.desktop});
    `}
  `,
  // 선택(sidebar 없는 경우)
  Div_WithNoSidebar: styled.div`
    display: flex;
    justify-content: center;
    width: 1300px;
    padding-top: 44px;

    ${DeviceQuery.bigScreen`
      width: calc(1300px / ${screenScale.bigScreen});
      padding-top: calc(44px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1300px / ${screenScale.desktop});
      padding-top: calc(44px / ${screenScale.desktop});
    `}
  `,
  // H1
  H1: styled.h1`
    font-size: var(--title-font-size);
    margin-bottom: 20px;
    display: inline-block;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--title-font-size) / ${screenScale.bigScreen});
      margin-bottom: calc(20px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--title-font-size) / ${screenScale.desktop});
      margin-bottom: calc(20px / ${screenScale.desktop});
    `}

    &.noOrderItem {
      width: 1300px;

      ${DeviceQuery.bigScreen`
        width: calc(1300px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(1300px / ${screenScale.desktop});
      `}
    }
  `,
};
