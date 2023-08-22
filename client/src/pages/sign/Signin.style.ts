import { styled } from 'styled-components';

const Styled_Signin = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    height: calc(100vh - 550px);
  `,
  Form: styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  InputContainer: styled.div``,
  SubmitBtn: styled.div`
    margin: 0 20px;
  `,
  TextWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
  Text: styled.p`
    font-size: var(--basic-font-size);
  `,
  Signup: styled.button`
    font-size: var(--basic-font-size);
    color: var(--primary-background-color);
    background-color: white;
    border: none;
    display: flex;
    justify-content: center;
    cursor: pointer;
  `,
};

export default Styled_Signin;
