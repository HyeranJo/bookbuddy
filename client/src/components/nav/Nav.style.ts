import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Nav = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 133px;
    z-index: 99;

    ${DeviceQuery.bigScreen`
      top: calc(133px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      top: calc(133px / ${screenScale.desktop});
    `}
  `,
  Div: styled.div`
    /* width: 1512px; */
    width: 100%;
    height: 58px;
    min-width: 820px;
    background-color: var(--primary-background-color);

    display: flex;
    align-items: center;

    ${DeviceQuery.bigScreen`
      height: calc(58px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      height: calc(58px / ${screenScale.desktop});
    `}
  `,

  SpanDiv: styled.div`
    display: flex;
    gap: 30px;
    max-width: 1512px;
    margin: 0 auto;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;

    ${DeviceQuery.bigScreen`
      gap: calc(30px / ${screenScale.bigScreen});
      max-width: calc(1512px / ${screenScale.bigScreen});
      padding-left: calc(50px / ${screenScale.bigScreen});
      padding-right: calc(50px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      gap: calc(30px / ${screenScale.desktop});
      max-width: calc(1512px / ${screenScale.desktop});
      padding-left: calc(50px / ${screenScale.desktop});
      padding-right: calc(50px / ${screenScale.desktop});
    `}
  `,

  Span: styled.span`
    font-size: var(--third-title-font-size);
    color: white;
    cursor: pointer;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
    `}
  `,
};
