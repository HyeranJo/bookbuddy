import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_PhoneNumber = {
  Input: styled.input<{ $backGroundColor?: boolean }>`
    width: 80px;
    height: 40px;
    text-align: center;
    font-size: var(--input-font-size);
    border: 1px solid var(--light-gray-color);
    background-color: ${props =>
      props.$backGroundColor ? 'var(--light-gray-color)' : 'white'};

    ${DeviceQuery.bigScreen`
      width: calc(80px / ${screenScale.bigScreen});
      height: calc(40px / ${screenScale.bigScreen});
      font-size: calc(var(--input-font-size) / ${screenScale.bigScreen});
    `}

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `,
  Select: styled.select`
    width: 80px;
    height: 40px;
    text-align: center;
    font-size: var(--input-font-size);
    border: 1px solid var(--light-gray-color);

    ${DeviceQuery.bigScreen`
      width: calc(80px / ${screenScale.bigScreen});
      height: calc(40px / ${screenScale.bigScreen});
      font-size: calc(var(--input-font-size) / ${screenScale.bigScreen});
    `}
  `,
};
