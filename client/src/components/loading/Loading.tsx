import React from 'react';
import { ClockLoader } from 'react-spinners';
import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const loading = () => {
  return (
    <Styled_Loading.Container>
      <div>Loading...</div>
      <div>
        <ClockLoader color="#F54D42" />
      </div>
    </Styled_Loading.Container>
  );
};

export const Styled_Loading = {
  Container: styled.div`
    width: 1512px;
    min-height: calc(100vh - (344px * 2));
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    ${DeviceQuery.bigScreen`
      width: calc(1512px / ${screenScale.bigScreen});
      min-height: calc(100vh - (344px * 2) / ${screenScale.bigScreen});
      gap: calc(10px / ${screenScale.bigScreen});
    `}

    & > :first-child {
      font-size: var(--basic-font-size);

      ${DeviceQuery.bigScreen`
        font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      `}
    }
  `,
};

export default loading;
