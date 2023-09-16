import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';
const Styled_Sign = {
  Main: styled.main`
    /* max-width: 1512px; */
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 50px;

    ${DeviceQuery.bigScreen`
      gap: calc(50px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      gap: calc(50px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      gap: calc(50px / ${screenScale.tablet});
    `}

    & > section {
      width: 627px;
      background-color: var(--category-color);

      ${DeviceQuery.bigScreen`
        width: calc(627px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(627px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(627px / ${screenScale.tablet});
      `}

      & > div {
        display: flex;
        flex-flow: column;
        padding: 50px;
        gap: 20px;

        ${DeviceQuery.bigScreen`
          padding: calc(50px / ${screenScale.bigScreen});
          gap: calc(20px / ${screenScale.bigScreen});
        `}
        ${DeviceQuery.desktop`
          padding: calc(50px / ${screenScale.desktop});
          gap: calc(20px / ${screenScale.desktop});
        `}
        ${DeviceQuery.tablet`
          padding: calc(50px / ${screenScale.tablet});
          gap: calc(20px / ${screenScale.tablet});
        `}
      }
    }
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
    ${DeviceQuery.desktop`
      margin-top: calc(70px / ${screenScale.desktop});
      font-size: calc(var(--title-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      margin-top: calc(70px / ${screenScale.tablet});
      font-size: calc(var(--title-font-size) / ${screenScale.tablet});
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
    ${DeviceQuery.desktop`
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
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
    ${DeviceQuery.desktop`
      font-size: calc(var(--message-font-size) / ${screenScale.desktop});
      margin-bottom: calc(20px / ${screenScale.desktop})
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--message-font-size) / ${screenScale.tablet});
      margin-bottom: calc(20px / ${screenScale.tablet})
    `}
  `,
};

export default Styled_Sign;
