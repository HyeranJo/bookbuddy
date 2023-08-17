import { styled } from 'styled-components';

export const Styled_SearchBar = {
  Input: styled.input`
    border-width: 0px 0px 3px 0px;
    border-color: var(--primary-background-color);
    width: 326px;
    height: 40px;
    font-size: 20px;
    outline: none;
  `,
  SearchDiv: styled.div`
    display: inline-block;
    vertical-align: bottom;

    border-bottom: 3px solid;
    border-color: var(--primary-background-color);
  `,
};
