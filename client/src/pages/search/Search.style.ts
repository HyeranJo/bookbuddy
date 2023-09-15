import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const Styled_Search = {
  Container: styled.div`
    display: flex;
    justify-content: center;
  `,
  Main: styled.main`
    width: 1512px;
    display: flex;

    ${DeviceQuery.bigScreen`
      width: calc(1512px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1512px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1512px / ${screenScale.tablet});
    `}
  `,
  SearchbarWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 60px;

    ${DeviceQuery.bigScreen`
      margin-bottom: calc(60px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-bottom: calc(60px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      margin-bottom: calc(60px / ${screenScale.tablet});
    `}
  `,
  Section: styled.section`
    width: 1312px;
    margin-left: 200px;
    padding-left: 53.5px;
    padding-right: 53.5px;
    padding-top: 44px;
    display: flex;
    flex-flow: column;
    justify-content: center;

    ${DeviceQuery.bigScreen`
      width: calc(1312px / ${screenScale.bigScreen});
      margin-left: calc(200px / ${screenScale.bigScreen});
      padding-left: calc(53.5px / ${screenScale.bigScreen});
      padding-right: calc(53.5px / ${screenScale.bigScreen});
      padding-top: calc(44px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1312px / ${screenScale.desktop});
      margin-left: calc(200px / ${screenScale.desktop});
      padding-left: calc(53.5px / ${screenScale.desktop});
      padding-right: calc(53.5px / ${screenScale.desktop});
      padding-top: calc(44px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1312px / ${screenScale.tablet});
      margin-left: calc(200px / ${screenScale.tablet});
      padding-left: calc(53.5px / ${screenScale.tablet});
      padding-right: calc(53.5px / ${screenScale.tablet});
      padding-top: calc(44px / ${screenScale.tablet});
    `}
  `,
  Title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    ${DeviceQuery.bigScreen`
      margin-bottom: calc(40px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-bottom: calc(40px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      margin-bottom: calc(40px / ${screenScale.tablet});
    `}
  `,
  H1: styled.h1`
    font-size: var(--title-font-size);
    display: inline-block;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--title-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--title-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--title-font-size) / ${screenScale.tablet});
    `}
  `,

  Books: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 70px;

    ${DeviceQuery.bigScreen`
      gap: calc(70px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      gap: calc(70px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      gap: calc(70px / ${screenScale.tablet});
    `}
  `,
  Msg: styled.div`
    font-size: var(--third-title-font-size);
    color: var(--light-border-color);
    position: absolute;
    top: 55%;
    left: 55%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    ${DeviceQuery.bigScreen`
      font-size: calc(var(--title-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--title-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--title-font-size) / ${screenScale.tablet});
    `}
  `,
};
export default Styled_Search;
