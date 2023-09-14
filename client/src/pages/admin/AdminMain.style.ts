import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_AdminMain = {
  Container: styled.div`
    display: flex;
    flex-flow: column;
    gap: 50px;

    ${DeviceQuery.bigScreen`
      gap: calc(50px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      gap: calc(50px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      gap: calc(50px / ${screenScale.tablet});
    `}
  `,
};
