import { styled } from 'styled-components';

export const Styled_Nav = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 133px;
    z-index: 99;
  `,
  Div: styled.div`
    /* width: 1512px; */
    width: 100%;
    height: 58px;
    background-color: var(--primary-background-color);

    display: flex;
    align-items: center;
  `,
  SpanDiv: styled.div`
    display: flex;
    gap: 30px;
    max-width: 1512px;
    margin: 0 auto;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
  `,
  Span: styled.span`
    font-size: var(--third-title-font-size);
    color: white;
    cursor: pointer;
  `,
};
