import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import {
  Cell_Ship_Atom,
  Tel_Ship_Atom,
  Cell_Cstmr_Atom,
  Tel_Cstmr_Atom,
  radio_Atom,
} from '../../recoil/Payment';

interface CallNumberProps {
  // 휴대폰일경우
  defaultValue?: string;
  // 배송지 or 주문자
  infoType: 'ship' | 'customer';
}

const CallNumber = ({ defaultValue, infoType }: CallNumberProps) => {
  const number2Ref = useRef<HTMLInputElement>(null);
  const [cell_Ship, setCell_Ship] = useRecoilState(Cell_Ship_Atom);
  const [tel_Ship, setTel_Ship] = useRecoilState(Tel_Ship_Atom);
  const [cell_Cstmr, setCell_Cstmr] = useRecoilState(Cell_Cstmr_Atom);
  const [tel_Cstmr, setTel_Cstmr] = useRecoilState(Tel_Cstmr_Atom);
  const radioValue = useRecoilValue(radio_Atom);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  useEffect(() => {
    // 배송정보와 동일 클릭시
    if (radioValue === '배송정보와동일') {
      // '휴대폰 && 주문자' 정보에 '휴대폰 && 배송지' 정보 입력
      const copy1 = [...cell_Cstmr];
      copy1[0] = cell_Ship[0];
      copy1[1] = cell_Ship[1];
      copy1[2] = cell_Ship[2];
      setCell_Cstmr(copy1);

      // '일반전화 && 주문자' 정보에 '일반전화 && 배송지' 정보 입력
      const copy2 = [...tel_Cstmr];
      copy2[0] = tel_Ship[0];
      copy2[1] = tel_Ship[1];
      copy2[2] = tel_Ship[2];
      setTel_Cstmr(copy2);
    }
  }, [radioValue]);

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
    // 휴대폰 && 배송지
    if (defaultValue && infoType === 'ship') {
      const copy = [...cell_Ship];
      copy[index] = value;
      setCell_Ship(copy);
    }
    // 일반 전화 && 배송지
    else if (!defaultValue && infoType === 'ship') {
      const copy = [...tel_Ship];
      copy[index] = value;
      setTel_Ship(copy);
    }
    // 휴대폰 && 주문자
    else if (defaultValue && infoType === 'customer') {
      const copy = [...cell_Cstmr];
      copy[index] = value;
      setCell_Cstmr(copy);
    }
    // 일반 전화 && 주문자
    else if (!defaultValue && infoType === 'customer') {
      const copy = [...tel_Cstmr];
      copy[index] = value;
      setTel_Cstmr(copy);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      {/* =======================식별, 지역번호========================= */}
      {defaultValue ? (
        // 휴대폰 && 주문자 && 배송정보와동일
        radioValue === '배송정보와동일' && infoType === 'customer' ? (
          <Styled_PhoneNumber.Input
            $backGroundColor={true}
            value={cell_Cstmr[0]}
            readOnly
          />
        ) : (
          // 휴대폰
          <Styled_PhoneNumber.Input
            type="number"
            defaultValue={defaultValue}
            maxLength={3}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              CallNumberCollecter(e, 0);
            }}
          />
        )
      ) : // 일반전화 && 주문자 && 배송정보와동일
      radioValue === '배송정보와동일' && infoType === 'customer' ? (
        <Styled_PhoneNumber.Input
          $backGroundColor={true}
          value={tel_Cstmr[0]}
          readOnly
        />
      ) : (
        // 일반전화
        <Styled_PhoneNumber.Select
          onChange={(e: any) => {
            CallNumberCollecter(e, 0);
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
        </Styled_PhoneNumber.Select>
      )}
      {/* =======================전화번호 앞자리========================= */}-
      {radioValue === '배송정보와동일' && infoType === 'customer' ? (
        <Styled_PhoneNumber.Input
          $backGroundColor={true}
          value={defaultValue ? cell_Cstmr[1] : tel_Cstmr[1]}
          readOnly
        />
      ) : (
        <Styled_PhoneNumber.Input
          type="text"
          pattern="\d*"
          maxLength={4}
          value={inputValue1 || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue1(e.target.value);
            number1Value(e);
            CallNumberCollecter(e, 1);
          }}
        />
      )}
      {/* =======================전화번호 뒷자리========================= */}-
      {radioValue === '배송정보와동일' && infoType === 'customer' ? (
        <Styled_PhoneNumber.Input
          $backGroundColor={true}
          value={defaultValue ? cell_Cstmr[1] : tel_Cstmr[2]}
          readOnly
        />
      ) : (
        <Styled_PhoneNumber.Input
          type="text"
          pattern="\d*"
          maxLength={4}
          value={inputValue2 || ''}
          ref={number2Ref}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue2(e.target.value);
            CallNumberCollecter(e, 2);
          }}
        />
      )}
    </div>
  );
};

export const Styled_PhoneNumber = {
  Input: styled.input<{ $backGroundColor?: boolean }>`
    width: 80px;
    height: 40px;
    text-align: center;
    font-size: var(--input-font-size);
    border: 1px solid var(--light-gray-color);
    background-color: ${props =>
      props.$backGroundColor ? 'var(--light-gray-color)' : 'white'};

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
