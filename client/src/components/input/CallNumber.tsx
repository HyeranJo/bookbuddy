import React from 'react';
import { styled } from 'styled-components';

interface CallNumberProps {
  defaultValue?: string;
}

const CallNumber = ({ defaultValue }: CallNumberProps) => {
  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <Styled_PhoneNumber.Input type="number" defaultValue={defaultValue} />
      -
      <Styled_PhoneNumber.Input type="number" />
      -
      <Styled_PhoneNumber.Input type="number" />
    </div>
  );
};

export const Styled_PhoneNumber = {
  Input: styled.input`
    width: 80px;
    height: 40px;
    text-align: center;
    font-size: var(--input-font-size);
    border: 1px solid var(--light-gray-color);

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `,
};

export default CallNumber;
