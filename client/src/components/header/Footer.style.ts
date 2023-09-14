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
    height: 200px;
    width: 1512px;
    margin-top: 150px;
    justify-content: center;
    align-items: center;
    z-index: 99;

    ${DeviceQuery.bigScreen`
      height: calc(200px / ${screenScale.bigScreen});
      width: calc(1512px / ${screenScale.bigScreen});
      margin-top: calc(150px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      height: calc(200px / ${screenScale.desktop});
      width: calc(1512px / ${screenScale.desktop});
      margin-top: calc(150px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      height: calc(200px / ${screenScale.tablet});
      width: calc(1512px / ${screenScale.tablet});
      margin-top: calc(150px / ${screenScale.tablet});
    `}
  `,
};
