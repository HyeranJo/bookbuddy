import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../src/utils/Responsive';

interface SearchProps {
  width: string;
  height: string;
}
export const Styled_Search = {
  Svg: styled.svg<SearchProps>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;

    ${DeviceQuery.bigScreen`
    width: calc(${(props: SearchProps) => props.width}px / ${
      screenScale.bigScreen
    });
    height: calc(${(props: SearchProps) => props.height}px / ${
      screenScale.bigScreen
    });
  `}
    ${DeviceQuery.desktop`
    width: calc(${(props: SearchProps) => props.width}px / ${
      screenScale.desktop
    });
    height: calc(${(props: SearchProps) => props.height}px / ${
      screenScale.desktop
    });
  `}
  ${DeviceQuery.tablet`
    width: calc(${(props: SearchProps) => props.width}px / ${
      screenScale.tablet
    });
    height: calc(${(props: SearchProps) => props.height}px / ${
      screenScale.tablet
    });
  `}
  `,
};
