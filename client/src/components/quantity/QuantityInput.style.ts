import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_QuantityInput = {
  Input: styled.input`
    font-size: var(--third-title-font-size);
    border: 0px;
    outline: none;
    text-align: center;
    width: 70px;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
      width: calc(70px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
      width: calc(70px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--third-title-font-size) / ${screenScale.tablet});
      width: calc(70px / ${screenScale.tablet});
    `}

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `,
  Button: styled.button`
    font-size: var(--basic-font-size);
    width: 27px;
    height: 27px;

    ${DeviceQuery.bigScreen`
      width: calc(27px / ${screenScale.bigScreen});
      height: calc(27px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(27px / ${screenScale.desktop});
      height: calc(27px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(27px / ${screenScale.tablet});
      height: calc(27px / ${screenScale.tablet});
    `}

    background-color: var(--category-color);
    border: 0px;

    cursor: pointer;
  `,
};
