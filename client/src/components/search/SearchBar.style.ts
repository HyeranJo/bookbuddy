import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

interface InputProps {
  width: number;
  $iconSize: number;
  fontSize?: number;
}

export const Styled_SearchBar = {
  Input: styled.input<InputProps>`
    border-width: 0px 0px 3px 0px;
    border-color: var(--primary-background-color);
    width: ${props => props.width - props.$iconSize}px;
    font-size: ${props => props.fontSize}px;
    line-height: 30px;
    outline: none;
    padding: 0px 15px;

    ${DeviceQuery.bigScreen`
      width: ${(props: InputProps) => props.width - props.$iconSize}px / ${
        screenScale.bigScreen
      });
      font-size:  ${(props: InputProps) => props.fontSize}px / ${
        screenScale.bigScreen
      });
      line-height: calc(30px / ${screenScale.bigScreen});
      padding: 0px calc(15px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: ${(props: InputProps) => props.width - props.$iconSize}px / ${
        screenScale.desktop
      });
      font-size:  ${(props: InputProps) => props.fontSize}px / ${
        screenScale.desktop
      });
      line-height: calc(30px / ${screenScale.desktop});
      padding: 0px calc(15px / ${screenScale.desktop});
    `}
  `,
  SearchDiv: styled.div<{ $iconSize: number }>`
    display: inline-block;
    vertical-align: bottom;
    padding-bottom: 5px;
    cursor: pointer;
    width: ${props => props.$iconSize + 5}px;
    border-bottom: 3px solid;
    border-color: var(--primary-background-color);

    ${DeviceQuery.bigScreen`
      width: ${(props: { $iconSize: number }) => props.$iconSize + 5}pxpx / ${
        screenScale.bigScreen
      });
      padding-bottom: calc(5px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: ${(props: { $iconSize: number }) => props.$iconSize + 5}pxpx / ${
        screenScale.desktop
      });
      padding-bottom: calc(5px / ${screenScale.desktop});
    `}
  `,
};
