import { styled } from 'styled-components';
import { Styled_Layout } from '../BlankPageLayout';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const Styled_Customer = {
  Main: styled(Styled_Layout.Container)`
    /* flex-direction: column; */
    padding-left: 200px;

    ${DeviceQuery.bigScreen`
      padding-left: calc(200px / ${screenScale.bigScreen});
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
  `,
  Warpper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 100px;

    ${DeviceQuery.bigScreen`
      gap: calc(100px / ${screenScale.bigScreen});
    `}
  `,
};

export default Styled_Customer;
