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
    width: 1512px;
    justify-content: center;
    align-items: center;

    z-index: 99;
    background-color: wheat;
  `,
};
