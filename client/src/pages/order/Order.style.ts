import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Order = {
  Div: styled.div`
    display: flex;
    justify-content: center;
    width: 1300px;

    ${DeviceQuery.bigScreen`
      width: calc(1300px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1300px / ${screenScale.desktop});
    `}
  `,
  Content: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-top: 44px;

    ${DeviceQuery.bigScreen`
      padding-top: calc(44px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      padding-top: calc(44px / ${screenScale.desktop});
    `}

    & > .submit {
      display: flex;
      justify-content: end;
      margin-top: 25px;

      ${DeviceQuery.bigScreen`
        margin-top: calc(25px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        margin-top: calc(25px / ${screenScale.desktop});
      `}
    }

    & > .emptyItem {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - (344px * 2));
      font-size: var(--third-title-font-size);

      ${DeviceQuery.bigScreen`
        min-height: calc((100vh - (344px * 2)) / ${screenScale.bigScreen});
        font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        min-height: calc((100vh - (344px * 2)) / ${screenScale.desktop});
        font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
      `}
    }
  `,
};
