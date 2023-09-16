import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Order = {
  Content: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;

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
      ${DeviceQuery.tablet`
        margin-top: calc(25px / ${screenScale.tablet});
      `}
    }

    & > .emptyItem {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - (344px * 2));
      font-size: var(--third-title-font-size);
      height: 350px;

      ${DeviceQuery.bigScreen`
        min-height: calc((100vh - (344px * 2)) / ${screenScale.bigScreen});
        font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
        height: calc(350px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        min-height: calc((100vh - (344px * 2)) / ${screenScale.desktop});
        font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
        height: calc(350px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        min-height: calc((100vh - (344px * 2)) / ${screenScale.tablet});
        font-size: calc(var(--third-title-font-size) / ${screenScale.tablet});
        height: calc(350px / ${screenScale.tablet});
      `}
    }
  `,
};
