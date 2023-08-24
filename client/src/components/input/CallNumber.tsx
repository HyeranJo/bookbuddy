import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { CellPhoneNumberAtom, TelephoneNumberAtom } from '../../recoil/Payment';

// 휴대폰일경우 defaultValue 필수
interface CallNumberProps {
  defaultValue?: string;
}

const CallNumber = ({ defaultValue }: CallNumberProps) => {
  const number2Ref = useRef<HTMLInputElement>(null);
  const [cellPhoneNumber, setCellPhoneNumber] =
    useRecoilState(CellPhoneNumberAtom);
  const [telephoneNumber, setTelephoneNumber] =
    useRecoilState(TelephoneNumberAtom);

  /** 전화번호 앞자리 입력시 뒷자리로 자동 탭 해주는 함수  */
  const number1Value = (e: any) => {
    if (e.target.value.length === 4 && number2Ref.current) {
      number2Ref.current.focus();
    }
  };

  /** 전화번호 input들을 모아 변수에 배열로 저장하는 함수 */
  const CallNumberCollecter = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    // 휴대폰일 경우
    if (defaultValue) {
      const copy = [...cellPhoneNumber];
      copy[index] = value;
      setCellPhoneNumber(copy);
      console.log(cellPhoneNumber);
    }
    // 일반 전화일 경우
    else {
      const copy = [...telephoneNumber];
      copy[index] = value;
      setTelephoneNumber(copy);
      console.log(telephoneNumber);
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            CallNumberCollecter(e, 0);
          }}
        />
      ) : (
        // 일반전화
        <Styled_PhoneNumber.Select name="score">
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
        </Styled_PhoneNumber.Select>
      )}
      -
      <Styled_PhoneNumber.Input
        type="number"
        pattern="\d*"
        maxLength={4}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          number1Value(e);
          CallNumberCollecter(e, 1);
        }}
      />
      -
      <Styled_PhoneNumber.Input
        type="text"
        pattern="\d*"
        maxLength={4}
        ref={number2Ref}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          CallNumberCollecter(e, 2);
        }}
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
  Select: styled.select`
    width: 80px;
    height: 40px;
    text-align: center;
    font-size: var(--input-font-size);
    border: 1px solid var(--light-gray-color);
  `,
};

export default CallNumber;
