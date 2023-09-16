import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';
interface Styled_InputProps {
  width?: number;
  height?: number;
  $backgroundColor?: string;
}

const Styled_Input = {
  Input: styled.input<Styled_InputProps>`
    width: ${props => (props.width ? props.width : 415)}px;
    height: ${props => (props.height ? props.height : 60)}px;
    font-size: var(--input-font-size);
    padding: 10px;
    border: 1px solid var(--light-gray-color);
    background-color: ${props =>
      props.$backgroundColor ? props.$backgroundColor : 'white'};

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--input-font-size) / ${screenScale.bigScreen});
      padding: calc(10px / ${screenScale.bigScreen});
      
      height: ${(props: Styled_InputProps) =>
        props.height
          ? `calc(${props.height}px / ${screenScale.bigScreen})`
          : `calc(60px / ${screenScale.bigScreen})`};

      width: ${(props: Styled_InputProps) =>
        props.width
          ? `calc(${props.width}px / ${screenScale.bigScreen})`
          : `calc(415px / ${screenScale.bigScreen})`};
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--input-font-size) / ${screenScale.desktop});
      padding: calc(10px / ${screenScale.desktop});
      
      height: ${(props: Styled_InputProps) =>
        props.height
          ? `calc(${props.height}px / ${screenScale.desktop})`
          : `calc(60px / ${screenScale.desktop})`};

      width: ${(props: Styled_InputProps) =>
        props.width
          ? `calc(${props.width}px / ${screenScale.desktop})`
          : `calc(415px / ${screenScale.desktop})`};
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--input-font-size) / ${screenScale.tablet});
      padding: calc(10px / ${screenScale.tablet});
      
      height: ${(props: Styled_InputProps) =>
        props.height
          ? `calc(${props.height}px / ${screenScale.tablet})`
          : `calc(60px / ${screenScale.tablet})`};

      width: ${(props: Styled_InputProps) =>
        props.width
          ? `calc(${props.width}px / ${screenScale.tablet})`
          : `calc(415px / ${screenScale.tablet})`};
    `}
  `,
};
export default Styled_Input;
