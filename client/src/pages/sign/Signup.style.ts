import { styled } from 'styled-components';

const Styled_Signup = {
  Main: styled.main`
    width: 1512px;
  `,
  Title: styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    font-size: var(--title-font-size);
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 500px);
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  Duplicate: styled.button`
    width: 90px;
    height: 30px;
    font-size: var(--basic-font-size);
    color: var(--primary-background-color);
    background-color: white;
    border: none;
    position: relative;
    left: 330px;
    bottom: -40px;
    cursor: pointer;
  `,
  Lable: styled.label`
    font-size: var(--basic-font-size);
  `,
  ErrorMsg: styled.p`
    font-size: var(--error-font-size);
    color: var(--primary-background-color);
    margin-bottom: 20px;
  `,
  SubmitBtn: styled.div`
    margin-top: 70px;
  `,
};

export default Styled_Signup;
