import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const Styled_Signin = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    height: calc(100vh - 550px);

    ${DeviceQuery.bigScreen`
      height: calc((100vh - 550px) / ${screenScale.bigScreen});
    `}
  `,
  Form: styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  InputContainer: styled.div``,
  SubmitBtn: styled.div`
    margin: 0 20px;

    ${DeviceQuery.bigScreen`
      margin: 0 calc(20px / ${screenScale.bigScreen});
    `}
  `,
  TextWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    ${DeviceQuery.bigScreen`
      gap: calc(10px / ${screenScale.bigScreen});
    `}
  `,
  Text: styled.p`
    font-size: var(--basic-font-size);

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
    `}
  `,
  Signup: styled.button`
    font-size: var(--basic-font-size);
    color: var(--primary-background-color);
    background-color: white;
    border: none;
    display: flex;
    justify-content: center;
    cursor: pointer;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
    `}
  `,
};

export default Styled_Signin;
