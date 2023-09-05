import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../src/utils/Responsive';

interface BookMarkIcon {
  width: string;
  height: string;
}
export const Styled_BookMarkIcon = {
  Svg: styled.svg<BookMarkIcon>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;

    ${DeviceQuery.bigScreen`
      width: calc(${(props: BookMarkIcon) => props.width}px / ${
        screenScale.bigScreen
      });
      height: calc(${(props: BookMarkIcon) => props.height}px / ${
        screenScale.bigScreen
      });
    `}
    ${DeviceQuery.desktop`
      width: calc(${(props: BookMarkIcon) => props.width}px / ${
        screenScale.desktop
      });
      height: calc(${(props: BookMarkIcon) => props.height}px / ${
        screenScale.desktop
      });
    `}
    ${DeviceQuery.tablet`
      width: calc(${(props: BookMarkIcon) => props.width}px / ${
        screenScale.tablet
      });
      height: calc(${(props: BookMarkIcon) => props.height}px / ${
        screenScale.tablet
      });
    `}
  `,
};
