import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../src/utils/Responsive';

interface LogoProps {
  width: string;
  height: string;
}
export const Styled_Logo = {
  Svg: styled.svg<LogoProps>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;

    ${DeviceQuery.bigScreen`
      width: calc(${(props: LogoProps) => props.width}px / ${
        screenScale.bigScreen
      });
      height: calc(${(props: LogoProps) => props.height}px / ${
        screenScale.bigScreen
      });
    `}
    ${DeviceQuery.desktop`
      width: calc(${(props: LogoProps) => props.width}px / ${
        screenScale.desktop
      });
      height: calc(${(props: LogoProps) => props.height}px / ${
        screenScale.desktop
      });
    `}
    ${DeviceQuery.tablet`
      width: calc(${(props: LogoProps) => props.width}px / ${
        screenScale.tablet
      });
      height: calc(${(props: LogoProps) => props.height}px / ${
        screenScale.tablet
      });
    `}
  `,
};
