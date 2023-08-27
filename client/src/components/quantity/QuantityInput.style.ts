import { styled } from 'styled-components';

export const Styled_QuantityInput = {
  Input: styled.input`
    font-size: var(--third-title-font-size);
    border: 0px;
    outline: none;
    text-align: center;
    width: 70px;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `,
  Button: styled.button`
    font-size: var(--basic-font-size);
    width: 27px;
    height: 27px;

    background-color: var(--category-color);
    border: 0px;

    cursor: pointer;
  `,
};
