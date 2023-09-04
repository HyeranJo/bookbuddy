import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';
interface Styled_InputProps {
  width?: number;
  height?: number;
}

const Styled_Input = {
  Input: styled.input<Styled_InputProps>`
    width: ${props => (props.width ? props.width : 415)}px;
    height: ${props => (props.height ? props.height : 60)}px;
    font-size: var(--input-font-size);
    padding: 10px;
    border: 1px solid var(--light-gray-color);

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
  `,
};
export default Styled_Input;
