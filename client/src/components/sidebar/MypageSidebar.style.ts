import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_MypageSidebar = {
  Container: styled.div`
    position: fixed;
    top: calc(133px + 58px);

    ${DeviceQuery.bigScreen`
      top: calc((133px + 58px) / ${screenScale.bigScreen});
    `}
  `,
  Div: styled.div`
    width: 200px;
    height: 100vh;

    border-right: 2px solid var(--light-gray-color);

    display: flex;
    flex-flow: column;

    ${DeviceQuery.bigScreen`
      width: calc(200px / ${screenScale.bigScreen});
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
      font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen})
      gap: calc(40px / ${screenScale.bigScreen});
      padding-top: calc(55px / ${screenScale.bigScreen});
    `}

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
  `,
};
