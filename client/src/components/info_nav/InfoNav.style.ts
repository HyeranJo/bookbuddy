import { styled } from 'styled-components';

export const Styled_InfoNav = {
  Div: styled.div`
    width: 150px;
    height: 188px;
    border: 1px solid var(--primary-background-color);
    background-color: white;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    font-size: var(--basic-font-size);
    gap: 20px;

    position: fixed;

    &::after {
      border-color: white transparent;
      border-style: solid;
      border-width: 0 12px 17px 12px;
      content: '';
      display: block;
      left: 60px;
      position: absolute;
      top: -15px;
      width: 0;
      z-index: 1;
    }

    &::before {
      border-color: var(--primary-background-color) transparent;
      border-style: solid;
      border-width: 0 12px 17px 12px;
      content: '';
      display: block;
      left: 60px;
      position: absolute;
      top: -17px;
      width: 0;
      z-index: 0;
    }
  `,
  Span: styled.span`
    cursor: pointer;
    font-size: var(--basic-font-size);
  `,
};
