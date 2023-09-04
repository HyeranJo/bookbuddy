import React from 'react';
import { ClockLoader } from 'react-spinners';
import { styled } from 'styled-components';

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

    & > :first-child {
      font-size: var(--basic-font-size);
    }
  `,
};

export default loading;
