import { styled } from 'styled-components';

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
  `,
};
export default Styled_Input;
