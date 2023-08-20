import { styled } from 'styled-components';

export const Styled_Nav = {
  Div: styled.div`
    width: 1512px;
    height: 58px;
    background-color: var(--primary-background-color);

    display: flex;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;

    position: sticky;
    top: 133px;
  `,
  SpanDiv: styled.div`
    display: flex;
    gap: 30px;
  `,
  Span: styled.span`
    font-size: var(--basic-font-size);
    color: white;
    cursor: pointer;
  `,
};
