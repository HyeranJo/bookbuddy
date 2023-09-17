import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const Styled_Customer = {
  Container: styled.div`
    display: flex;
    flex-flow: column;
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
