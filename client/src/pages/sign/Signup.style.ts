import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const Styled_Signup = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh- 350px);

    ${DeviceQuery.bigScreen`
      height: calc((100vh - 350px) / ${screenScale.bigScreen});
    `}
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

    ${DeviceQuery.bigScreen`
      width: calc(90px / ${screenScale.bigScreen});
      height: calc(30px / ${screenScale.bigScreen});
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      left: calc(330px / ${screenScale.bigScreen});
      bottom: calc(-40px / ${screenScale.bigScreen});
    `}
  `,
  SubmitBtn: styled.div`
    margin-top: 20px;

    ${DeviceQuery.bigScreen`
      margin-top: calc(20px / ${screenScale.bigScreen});
    `}
  `,
};

export default Styled_Signup;
