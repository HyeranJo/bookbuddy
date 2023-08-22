import { styled } from 'styled-components';

const Styled_Sign = {
  Main: styled.main`
    width: 1512px;
  `,
  Title: styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 70px;
    font-size: var(--title-font-size);
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  Lable: styled.label`
    font-size: var(--basic-font-size);
  `,
  ErrorMsg: styled.p`
    font-size: var(--error-font-size);
    color: var(--primary-background-color);
    margin-bottom: 20px;
  `,
};

export default Styled_Sign;
