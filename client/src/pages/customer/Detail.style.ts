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

    .body {
      display: flex;
      justify-content: center;
      width: 1300px;
      align-items: center;
      flex-flow: column;
      gap: 20px;

      ${DeviceQuery.bigScreen`
        width: calc(1300px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(1300px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(1300px / ${screenScale.tablet});
      `}

      .detail {
        background-color: var(--category-color);
        width: 1095px;
        min-height: 100px;
        padding: 20px 20px;

        ${DeviceQuery.bigScreen`
          width: calc(1095px / ${screenScale.bigScreen});
          padding: calc(20px / ${screenScale.bigScreen}) calc(20px / ${screenScale.bigScreen});
        `}
        ${DeviceQuery.desktop`
          width: calc(1095px / ${screenScale.desktop});
          padding: calc(20px / ${screenScale.desktop}) calc(20px / ${screenScale.desktop});
        `}
        ${DeviceQuery.tablet`
          width: calc(1095px / ${screenScale.tablet});
          padding: calc(20px / ${screenScale.tablet}) calc(20px / ${screenScale.tablet});
        `}
      }
    }
  `,
  H1: styled.h1`
    font-size: var(--subtitle-font-size);
    margin-bottom: 5px;
    display: inline-block;
    width: 1095px;
    align-items: start;

    ${DeviceQuery.bigScreen`
     margin-bottom: calc(5px / ${screenScale.bigScreen});
     font-size:calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
     width: calc(1095px / ${screenScale.bigScreen});
   `}
    ${DeviceQuery.desktop`
     margin-bottom: calc(5px / ${screenScale.desktop});
     font-size:calc(var(--subtitle-font-size) / ${screenScale.desktop});
     width: calc(1095px / ${screenScale.desktop});
   `}
   ${DeviceQuery.tablet`
     margin-bottom: calc(5px / ${screenScale.tablet});
     font-size:calc(var(--subtitle-font-size) / ${screenScale.tablet});
     width: calc(1095px / ${screenScale.tablet});
   `}
  `,
};
