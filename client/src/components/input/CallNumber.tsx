import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';

// 휴대폰일경우 defaultValue 필수
interface CallNumberProps {
  defaultValue?: string;
}

const CallNumber = ({ defaultValue }: CallNumberProps) => {
  const number2Ref = useRef<HTMLInputElement>(null);
  const [selectBoxValue, setSelectBoxValue] = useState('02');

  const number1Value = (e: any) => {
    if (e.target.value.length === 4 && number2Ref.current) {
      number2Ref.current.focus();
    }
  };

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      {defaultValue ? (
        // 휴대폰
        <Styled_PhoneNumber.Input
          type="number"
          defaultValue={defaultValue}
          maxLength={3}
        />
      ) : (
        // 일반전화
        <>
          <Styled_PhoneNumber.Input
            type="number"
            value={selectBoxValue}
            maxLength={3}
          />
          <select
            name="score"
            onChange={(e: any) => {
              setSelectBoxValue(e.target.value);
            }}
          >
            <option value="02">02</option>
            <option value="031">031</option>
            <option value="032">032</option>
            <option value="033">033</option>
            <option value="041">041</option>
            <option value="042">042</option>
            <option value="043">043</option>
            <option value="044">044</option>
            <option value="051">051</option>
            <option value="052">052</option>
            <option value="053">053</option>
            <option value="054">054</option>
            <option value="055">055</option>
            <option value="061">061</option>
            <option value="062">062</option>
            <option value="063">063</option>
            <option value="064">064</option>
          </select>
        </>
      )}
      -
      <Styled_PhoneNumber.Input
        type="number"
        pattern="\d*"
        maxLength={4}
        onChange={number1Value}
      />
      -
      <Styled_PhoneNumber.Input
        type="text"
        pattern="\d*"
        maxLength={4}
        ref={number2Ref}
      />
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
