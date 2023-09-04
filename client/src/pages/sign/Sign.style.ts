import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';
const Styled_Sign = {
  Main: styled.main`
    /* max-width: 1512px; */
    width: 100%;
  `,
  Title: styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 70px;
    font-size: var(--title-font-size);

    ${DeviceQuery.bigScreen`
      margin-top: calc(70px / ${screenScale.bigScreen});
      font-size: calc(var(--title-font-size) / ${screenScale.bigScreen});
    `}
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  Lable: styled.label`
    font-size: var(--basic-font-size);

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
    `}
  `,
  ErrorMsg: styled.p`
    font-size: var(--message-font-size);
    color: var(--primary-background-color);
    margin-bottom: 20px;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--message-font-size) / ${screenScale.bigScreen});
      margin-bottom: calc(20px / ${screenScale.bigScreen})
    `}
  `,
};

export default Styled_Sign;
