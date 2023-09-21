import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_MypageSidebar = {
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
    width: 215px;
    height: 100vh;

    border-right: 1px solid var(--light-gray-color);

    display: flex;
    flex-flow: column;

    ${DeviceQuery.bigScreen`
      width: calc(215px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(215px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(215px / ${screenScale.tablet});
    `}
  `,
  TitleDiv: styled.div`
    font-size: var(--third-title-font-size);
    font-weight: bold;
    text-align: center;
    gap: 40px;
    padding-top: 55px;
    cursor: pointer;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
      gap: calc(40px / ${screenScale.bigScreen});
      padding-top: calc(55px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
      gap: calc(40px / ${screenScale.desktop});
      padding-top: calc(55px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--third-title-font-size) / ${screenScale.tablet});
      gap: calc(40px / ${screenScale.tablet});
      padding-top: calc(55px / ${screenScale.tablet});
    `}


    & > span {
      &:hover {
        color: var(--primary-background-color);
      }
    }

    &::after {
      content: '';
      display: block;
      width: 120px;
      border-bottom: 1px solid #bcbcbc;
      margin: 40px auto;

      ${DeviceQuery.bigScreen`
      width: calc(120px / ${screenScale.bigScreen});
      margin: calc(40px / ${screenScale.bigScreen}) auto;
      `}
      ${DeviceQuery.desktop`
      width: calc(120px / ${screenScale.desktop});
      margin: calc(40px / ${screenScale.desktop}) auto;
      `}
      ${DeviceQuery.tablet`
      width: calc(120px / ${screenScale.tablet});
      margin: calc(40px / ${screenScale.tablet}) auto;
      `}
    }
  `,
  CategoryDiv: styled.div`
    display: flex;
    flex-flow: column;

    font-size: var(--basic-font-size);
    text-align: center;
    gap: 40px;
    padding-top: 10px;
    cursor: pointer;

    ${DeviceQuery.bigScreen`
      gap: calc(40px / ${screenScale.bigScreen});
      padding-top: calc(10px / ${screenScale.bigScreen});
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen})
    `}
    ${DeviceQuery.desktop`
      gap: calc(40px / ${screenScale.desktop});
      padding-top: calc(10px / ${screenScale.desktop});
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop})
    `}
    ${DeviceQuery.tablet`
      gap: calc(40px / ${screenScale.tablet});
      padding-top: calc(10px / ${screenScale.tablet});
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet})
    `}

    & > span {
      &:hover {
        color: var(--primary-background-color);
      }
    }
  `,
};
