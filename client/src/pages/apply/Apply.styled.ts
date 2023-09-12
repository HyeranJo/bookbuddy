import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Apply = {
  Container: styled.div`
    display: flex;
    flex-flow: column;
    width: 1300px;

    ${DeviceQuery.bigScreen`
      width: calc(1300px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1300px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1300px / ${screenScale.tablet});
    `}

    .header {
      display: flex;
      justify-content: left;
      margin-bottom: 30px;

      ${DeviceQuery.bigScreen`
        margin-bottom: calc(30px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        margin-bottom: calc(30px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        margin-bottom: calc(30px / ${screenScale.tablet});
      `}
    }
    .apply_group {
      display: flex;
      flex-flow: column;
      gap: 30px;

      ${DeviceQuery.bigScreen`
        gap: calc(30px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        gap: calc(30px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        gap: calc(30px / ${screenScale.tablet});
      `}

      & > div {
        display: flex;
      }
    }
    & input {
      font-size: var(--basic-font-size);
      flex-grow: 1;

      ${DeviceQuery.bigScreen`
        font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
      `}
    }
    #apply_title {
      height: 50px;
      padding: 0 15px;
      border: 1.5px solid var(--light-gray-color);

      ${DeviceQuery.bigScreen`
        height: calc(50px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        height: calc(50px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        height: calc(50px / ${screenScale.tablet});
      `}
    }
    #apply_body {
      height: 400px;
      width: 100%;

      ${DeviceQuery.bigScreen`
        height: calc(400px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        height: calc(400px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        height: calc(400px / ${screenScale.tablet});
      `}
    
      .ql-container {
        height: 360px;
        font-size: var(--basic-font-size);
        border-color: var(--book-background-color);

        ${DeviceQuery.bigScreen`
          height: calc(360px / ${screenScale.bigScreen});
          font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
        `}
        ${DeviceQuery.desktop`
          height: calc(360px / ${screenScale.desktop});
          font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
        `}
        ${DeviceQuery.tablet`
          height: calc(360px / ${screenScale.tablet});
          font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
        `}
      }
    }
    & label {
      font-size: var(--third-title-font-size);
      flex-shrink: 0;
      width: 100px;
      padding-top: 10px;

      ${DeviceQuery.bigScreen`
        width: calc(100px / ${screenScale.bigScreen});
        padding-top: calc(10px / ${screenScale.bigScreen});
        font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(100px / ${screenScale.desktop});
        padding-top: calc(10px / ${screenScale.desktop});
        font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(100px / ${screenScale.tablet});
        padding-top: calc(10px / ${screenScale.tablet});
        font-size: calc(var(--third-title-font-size) / ${screenScale.tablet});
      `}
    }
    .submit {
      display: flex;
      justify-content: end;
      margin-top: 42px;

      ${DeviceQuery.bigScreen`
        margin-top: calc(42px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        margin-top: calc(42px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        margin-top: calc(42px / ${screenScale.tablet});
      `}
    }
  `,
};
