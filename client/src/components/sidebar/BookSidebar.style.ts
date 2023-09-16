import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Sidebar = {
  Container: styled.div`
    position: fixed;
    top: calc(133px + 58px);

    ${DeviceQuery.bigScreen`
      top: calc((133px + 58px) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      top: calc((133px + 58px) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      top: calc((133px + 58px) / ${screenScale.tablet});
    `}
  `,

  Div: styled.div`
    width: 200px;
    /* height: calc(100vh - 133px - 58px); */
    height: 100vh;
    background-color: white;

    border-right: 2px solid var(--light-gray-color);

    display: flex;
    flex-flow: column;

    font-size: var(--basic-font-size);
    text-align: center;
    gap: 20px;
    padding-top: 44px;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      width: calc(200px / ${screenScale.bigScreen});
      gap: calc(20px / ${screenScale.bigScreen});
      padding-top: calc(44px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
      width: calc(200px / ${screenScale.desktop});
      gap: calc(20px / ${screenScale.desktop});
      padding-top: calc(44px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
      width: calc(200px / ${screenScale.tablet});
      gap: calc(20px / ${screenScale.tablet});
      padding-top: calc(44px / ${screenScale.tablet});
    `}
  `,

  Button: styled.button`
    border: 0;
    background-color: white;
    font-size: var(--basic-font-size);
    cursor: pointer;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
    `}

    &:hover {
      color: var(--primary-background-color);
    }
    &:focus {
      color: var(--primary-background-color);
      font-weight: bold;
    }
  `,
};
