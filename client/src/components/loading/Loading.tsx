import React, { useEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';
import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const loading = () => {
  const [spinnerSize, setSpinnerSize] = useState(50);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setSpinnerSize(50);
    } else if (window.innerWidth >= 820) {
      setSpinnerSize(30);
    } else {
      setSpinnerSize(20);
    }
  }, [spinnerSize]);

  return (
    <Styled_Loading.Container>
      <div>Loading...</div>
      <div>
        <ClockLoader color="#F54D42" size={spinnerSize} />
      </div>
    </Styled_Loading.Container>
  );
};

export const Styled_Loading = {
  Container: styled.div`
    width: 1115px;
    min-height: calc(100vh - (344px * 2));
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    ${DeviceQuery.bigScreen`
      width: calc(1115px / ${screenScale.bigScreen});
      min-height: calc(100vh - (344px * 2) / ${screenScale.bigScreen});
      gap: calc(10px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1115px / ${screenScale.desktop});
      min-height: calc(100vh - (344px * 2) / ${screenScale.desktop});
      gap: calc(10px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1115px / ${screenScale.tablet});
      min-height: calc(100vh - (344px * 2) / ${screenScale.tablet});
      gap: calc(10px / ${screenScale.tablet});
    `}

    & > :first-child {
      font-size: var(--basic-font-size);

      ${DeviceQuery.bigScreen`
        font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
      `}
    }
  `,
};

export default loading;
