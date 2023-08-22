import { styled } from 'styled-components';

const Styled_Signup = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh- 350px);
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
  SubmitBtn: styled.div`
    margin-top: 20px;
  `,
};

export default Styled_Signup;
