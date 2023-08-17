import { styled } from 'styled-components';

export const Styled_Header = {
  Div: styled.div`
    display: flex;
    width: 1512px;
    height: 133px;

    align-items: center;
    justify-content: space-between;
    padding-left: 127px;
    padding-right: 127px;
  `,
  Menu: styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
  `,
  Span: styled.span`
    cursor: pointer;
  `,
};
