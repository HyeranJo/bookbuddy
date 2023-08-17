import { styled } from 'styled-components';

interface StyledRedButtonProps {
  height?: number;
  width?: number;
}

export const Styled_RedButton = {
  Button: styled.button<StyledRedButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => (props.height ? `${props.height}px` : '56px')};
    width: ${props => (props.width ? `${props.width}px` : '195px')};
    background-color: var(--primary-background-color);
    color: white;
    font-size: var(--basic-font-size);
    border: 0px;
    &:hover {
      background-color: #d82f24;
      cursor: pointer;
    }
    &:focus {
    }
  `,
};
