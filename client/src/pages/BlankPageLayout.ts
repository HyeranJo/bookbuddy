import { styled } from 'styled-components';

export const Styled_Layout = {
  // 필수
  Container: styled.div`
    display: flex;
    justify-content: center;
  `,
  // 선택(sidebar 있는 경우)
  Div_WithSidebar: styled.div`
    width: 1512px;
    display: flex;
  `,
  // 선택(sidebar 없는 경우)
  Div_WithNoSidebar: styled.div`
    display: flex;
    justify-content: center;
    width: 1300px;
    padding-top: 44px;
  `,
  // H1
  H1: styled.h1`
    font-size: var(--title-font-size);
    margin-bottom: 20px;
    display: inline-block;
  `,
};
