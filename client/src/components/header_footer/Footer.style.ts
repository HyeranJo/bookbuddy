import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Footer = {
  Footer: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Container: styled.div`
    display: flex;
    flex-flow: column;
    height: 100px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    z-index: 99;
    background-color: var(--footer-color);

    & > div {
      width: 1512px;
      display: flex;
      /* justify-content: end; */
      justify-content: center;
      padding: 0 50px;

      ${DeviceQuery.bigScreen`
        width: calc(1512px / ${screenScale.bigScreen});
        padding: 0 calc(50px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(1512px / ${screenScale.desktop});
        padding: 0 calc(50px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(1512px / ${screenScale.tablet});
        padding: 0 calc(50px / ${screenScale.tablet});
      `}

      & > span {
        font-size: var(--basic-font-size);
        color: var(--light-border-color);

        ${DeviceQuery.bigScreen`
          font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
        `}
        ${DeviceQuery.desktop`
          font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
        `}
        ${DeviceQuery.tablet`
          font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
        `}
      }
    }
  `,
};
