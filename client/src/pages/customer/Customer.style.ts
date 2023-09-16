import { styled } from 'styled-components';
import { Styled_Layout } from '../BlankPageLayout';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const Styled_Customer = {
  Main: styled(Styled_Layout.Container)`
    padding-left: 200px;

    ${DeviceQuery.bigScreen`
      padding-left: calc(200px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      padding-left: calc(200px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      padding-left: calc(200px / ${screenScale.tablet});
    `}
  `,
  Section: styled(Styled_Layout.Div_WithNoSidebar)`
    display: flex;
    flex-direction: column;
    margin-bottom: 200px;
    gap: 100px;

    ${DeviceQuery.bigScreen`
      margin-bottom: calc(200px / ${screenScale.bigScreen});
      gap: calc(100px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-bottom: calc(200px / ${screenScale.desktop});
      gap: calc(100px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      margin-bottom: calc(200px / ${screenScale.tablet});
      gap: calc(100px / ${screenScale.tablet});
    `}
  `,
  Title: styled.h1`
    font-size: var(--title-font-size);
    margin-bottom: 20px;
    margin-top: 44px;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--title-font-size) / ${screenScale.bigScreen});
      margin-bottom: calc(20px / ${screenScale.bigScreen});
      margin-top: calc(44px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--title-font-size) / ${screenScale.desktop});
      margin-bottom: calc(20px / ${screenScale.desktop});
      margin-top: calc(44px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--title-font-size) / ${screenScale.tablet});
      margin-bottom: calc(20px / ${screenScale.tablet});
      margin-top: calc(44px / ${screenScale.tablet});
    `}
  `,
  Warpper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 150px;

    ${DeviceQuery.bigScreen`
      gap: calc(150px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      gap: calc(150px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      gap: calc(150px / ${screenScale.tablet});
    `}
  `,
};

export default Styled_Customer;
