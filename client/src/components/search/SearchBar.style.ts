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
      width: calc(${(props: InputProps) => props.width - props.$iconSize}px / ${
        screenScale.bigScreen
      });
      font-size: calc(${(props: InputProps) => props.fontSize}px / ${
        screenScale.bigScreen
      });
      line-height: calc(30px / ${screenScale.bigScreen});
      padding: 0px calc(15px / ${screenScale.bigScreen});
      border-width: 0px 0px calc(3px / ${screenScale.bigScreen}) 0px;
    `}
    ${DeviceQuery.desktop`
      width: calc(${(props: InputProps) => props.width - props.$iconSize}px / ${
        screenScale.desktop
      });
      font-size: calc(${(props: InputProps) => props.fontSize}px / ${
        screenScale.desktop
      });
      line-height: calc(30px / ${screenScale.desktop});
      padding: 0px calc(15px / ${screenScale.desktop});
      border-width: 0px 0px calc(3px / ${screenScale.desktop}) 0px;
    `}
    ${DeviceQuery.tablet`
      width: calc(${(props: InputProps) => props.width - props.$iconSize}px / ${
        screenScale.tablet
      });
      font-size: calc(${(props: InputProps) => props.fontSize}px / ${
        screenScale.tablet
      });
      line-height: calc(30px / ${screenScale.tablet});
      padding: 0px calc(15px / ${screenScale.tablet});
      border-width: 0px 0px calc(3px / ${screenScale.tablet}) 0px;
    `}
  `,
  SearchDiv: styled.div<{ $iconSize: number }>`
    display: inline-block;
    vertical-align: bottom;
    padding-bottom: 5px;
    cursor: pointer;
    width: ${props => props.$iconSize + 5}px;
    border-bottom: 3px solid var(--primary-background-color);

    ${DeviceQuery.bigScreen`
      width: calc(${(props: { $iconSize: number }) =>
        props.$iconSize + 5}px / ${screenScale.bigScreen});
      padding-bottom: calc(5px / ${screenScale.bigScreen});
      border-bottom: calc(3px / ${
        screenScale.bigScreen
      }) solid var(--primary-background-color);
    `}
    ${DeviceQuery.desktop`
      width: clac(${(props: { $iconSize: number }) =>
        props.$iconSize + 5}px / ${screenScale.desktop});
      padding-bottom: calc(5px / ${screenScale.desktop});
      border-bottom: calc(3px / ${
        screenScale.desktop
      }) solid var(--primary-background-color);
    `}
    ${DeviceQuery.tablet`
      width: calc(${(props: { $iconSize: number }) =>
        props.$iconSize + 5}px / ${screenScale.tablet});
      padding-bottom: calc(5px / ${screenScale.tablet});
      border-bottom: calc(3px / ${
        screenScale.tablet
      }) solid var(--primary-background-color);
    `}
  `,
};
