import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_InfoNav = {
  Div: styled.div`
    width: 150px;
    height: 188px;
    border: 1px solid var(--primary-background-color);
    background-color: white;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    font-size: var(--basic-font-size);
    gap: 20px;

    position: fixed;

    ${DeviceQuery.bigScreen`
      height: calc(188px / ${screenScale.bigScreen});
      width: calc(150px / ${screenScale.bigScreen});
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      gap: calc(20px / ${screenScale.bigScreen});
    `}

    &::after {
      border-color: white transparent;
      border-style: solid;
      border-width: 0 12px 17px 12px;
      content: '';
      display: block;
      left: 60px;
      position: absolute;
      top: -15px;
      width: 0;
      z-index: 1;

      ${DeviceQuery.bigScreen`
        border-width: 0 calc(12px / ${screenScale.bigScreen}) calc(17px / ${screenScale.bigScreen}) calc(12px / ${screenScale.bigScreen});

        left: calc(60px / ${screenScale.bigScreen});
        top: calc(-15px / ${screenScale.bigScreen});
      `}
    }

    &::before {
      border-color: var(--primary-background-color) transparent;
      border-style: solid;
      border-width: 0 12px 17px 12px;
      content: '';
      display: block;
      left: 60px;
      position: absolute;
      top: -17px;
      width: 0;
      z-index: 0;

      ${DeviceQuery.bigScreen`
        border-width: 0 calc(12px / ${screenScale.bigScreen}) calc(17px / ${screenScale.bigScreen}) calc(12px / ${screenScale.bigScreen});

        left: calc(60px / ${screenScale.bigScreen});
        top: calc(-17px / ${screenScale.bigScreen});
      `}
    }
  `,
  Span: styled.span`
    cursor: pointer;
    font-size: var(--basic-font-size);

    ${DeviceQuery.bigScreen`
        font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      `}
  `,
};
