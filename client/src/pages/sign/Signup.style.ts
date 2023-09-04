import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const Styled_Signup = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    ${DeviceQuery.bigScreen`
      margin-top: calc(30px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-top: calc(30px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      margin-top: calc(30px / ${screenScale.tablet});
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
    ${DeviceQuery.desktop`
      width: calc(90px / ${screenScale.desktop});
      height: calc(30px / ${screenScale.desktop});
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
      left: calc(330px / ${screenScale.desktop});
      bottom: calc(-40px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(90px / ${screenScale.tablet});
      height: calc(30px / ${screenScale.tablet});
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
      left: calc(330px / ${screenScale.tablet});
      bottom: calc(-40px / ${screenScale.tablet});
    `}
  `,
  SubmitBtn: styled.div`
    margin-top: 20px;

    ${DeviceQuery.bigScreen`
      margin-top: calc(20px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-top: calc(20px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      margin-top: calc(20px / ${screenScale.tablet});
    `}
  `,
};

export default Styled_Signup;
