import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Header = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index: 100;
  `,
  Div: styled.div`
    display: flex;
    width: 1512px;
    height: 133px;
    background-color: white;

    align-items: center;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;

    ${DeviceQuery.bigScreen`
      width: calc(1512px / ${screenScale.bigScreen});
      height: calc(133px / ${screenScale.bigScreen});
      padding-left: calc(50px / ${screenScale.bigScreen});
      padding-right: calc(50px / ${screenScale.bigScreen});
    `}
  `,
  Menu: styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    ${DeviceQuery.bigScreen`
      gap: calc(30px / ${screenScale.bigScreen});
    `}
  `,
  Span: styled.span`
    cursor: pointer;
    position: relative;
    font-size: var(--basic-font-size);

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
    `}

    &:hover > div {
      display: block;
    }
  `,
  Info: styled.div`
    display: none;

    z-index: 100;
    position: absolute;
    top: 0px;
    right: -50px;

    width: 150px;
    padding-top: 50px;

    ${DeviceQuery.bigScreen`
      right: calc(-50px / ${screenScale.bigScreen});
      width: calc(150px / ${screenScale.bigScreen});
      padding-top: calc(50px / ${screenScale.bigScreen});
    `}
  `,
};
