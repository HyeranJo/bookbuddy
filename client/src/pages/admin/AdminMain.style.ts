import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_AdminMain = {
  Container: styled.div`
    display: flex;
    flex-flow: column;
    gap: 100px;

    ${DeviceQuery.bigScreen`
      gap: calc(100px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      gap: calc(100px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      gap: calc(100px / ${screenScale.tablet});
    `}
  `,
};
