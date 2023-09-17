import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Detail = {
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
    }

    .body {
      display: flex;
      justify-content: center;
      width: 1300px;
      align-items: center;
      flex-flow: column;
      gap: 65px;

      ${DeviceQuery.bigScreen`
        width: calc(1300px / ${screenScale.bigScreen});
        gap: calc(65px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(1300px / ${screenScale.desktop});
        gap: calc(65px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(1300px / ${screenScale.tablet});
        gap: calc(65px / ${screenScale.tablet});
      `}

      .detail {
        background-color: var(--category-color);
        width: 1300px;
        min-height: 250px;
        padding: 20px 70px;

        ${DeviceQuery.bigScreen`
          width: calc(1300px / ${screenScale.bigScreen});
          min-height: calc(250px / ${screenScale.bigScreen});
          padding: calc(20px / ${screenScale.bigScreen}) calc(70px / ${screenScale.bigScreen});
        `}
        ${DeviceQuery.desktop`
          width: calc(1300px / ${screenScale.desktop});
          min-height: calc(250px / ${screenScale.desktop});
          padding: calc(20px / ${screenScale.desktop}) calc(70px / ${screenScale.desktop});
        `}
        ${DeviceQuery.tablet`
          width: calc(1300px / ${screenScale.tablet});
          min-height: calc(250px / ${screenScale.tablet});
          padding: calc(20px / ${screenScale.tablet}) calc(70px / ${screenScale.tablet});
        `}

        & > pre {
          white-space: pre-wrap;
          word-break: break-all;
          overflow: auto;
        }
      }
    }
  `,
  H1: styled.h1`
    font-size: var(--subtitle-font-size);
    margin-bottom: 20px;
    display: inline-block;
    width: 1300px;
    align-items: start;

    ${DeviceQuery.bigScreen`
     margin-bottom: calc(20px / ${screenScale.bigScreen});
     font-size:calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
     width: calc(1300px / ${screenScale.bigScreen});
   `}
    ${DeviceQuery.desktop`
     margin-bottom: calc(20px / ${screenScale.desktop});
     font-size:calc(var(--subtitle-font-size) / ${screenScale.desktop});
     width: calc(1300px / ${screenScale.desktop});
   `}
   ${DeviceQuery.tablet`
     margin-bottom: calc(20px / ${screenScale.tablet});
     font-size:calc(var(--subtitle-font-size) / ${screenScale.tablet});
     width: calc(1300px / ${screenScale.tablet});
   `}
  `,
};
