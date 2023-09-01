import { styled } from 'styled-components';

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
  `,
  SearchDiv: styled.div<{ $iconSize: number }>`
    display: inline-block;
    vertical-align: bottom;
    padding-bottom: 5px;
    cursor: pointer;
    width: ${props => props.$iconSize + 5}px;
    border-bottom: 3px solid;
    border-color: var(--primary-background-color);
  `,
};
