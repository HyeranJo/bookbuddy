import React, { useEffect, useRef } from 'react';
import { Styled_PhoneNumber } from './CallNumber.style';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Ship_Mobile_Atom,
  Ship_Tel_Atom,
  Cstmr_Mobile_Atom,
  Cstmr_Tel_Atom,
  radio_Atom,
} from '../../recoil/Payment';
import { AreaCode } from '../../constants/AreaCode';

interface CallNumberProps {
  // 휴대폰일경우
  defaultValue?: string;
  // 배송지 or 주문자
  infoType: 'ship' | 'customer';
}

const CallNumber = ({ defaultValue, infoType }: CallNumberProps) => {
  const number2Ref = useRef<HTMLInputElement>(null);
  const [shipMobile, setShipMobile] = useRecoilState(Ship_Mobile_Atom);
  const [shipTel, setShipTel] = useRecoilState(Ship_Tel_Atom);
  const [cstmrMobile, setCstmrMobile] = useRecoilState(Cstmr_Mobile_Atom);
  const [cstmrTel, setCstmrTel] = useRecoilState(Cstmr_Tel_Atom);
  const radioValue = useRecoilValue(radio_Atom);

  useEffect(() => {
    // 배송정보와 동일 클릭시
    if (radioValue === '배송정보와동일') {
      // '휴대폰 && 주문자' 정보에 '휴대폰 && 배송지' 정보 입력
      const copy1 = [...cstmrMobile];
      copy1[0] = shipMobile[0];
      copy1[1] = shipMobile[1];
      copy1[2] = shipMobile[2];
      setCstmrMobile(copy1);

      // '일반전화 && 주문자' 정보에 '일반전화 && 배송지' 정보 입력
      const copy2 = [...cstmrTel];
      copy2[0] = shipTel[0];
      copy2[1] = shipTel[1];
      copy2[2] = shipTel[2];
      setCstmrTel(copy2);
    }
    // 새로입력 클릭시
    else {
      // '휴대폰 && 주문자' 정보에 '휴대폰 && 배송지' 정보 입력
      const copy1 = [...cstmrMobile];
      copy1[0] = '010';
      copy1[1] = '';
      copy1[2] = '';
      setCstmrMobile(copy1);

      // '일반전화 && 주문자' 정보에 '일반전화 && 배송지' 정보 입력
      const copy2 = [...cstmrTel];
      copy2[0] = '02';
      copy2[1] = '';
      copy2[2] = '';
      setCstmrTel(copy2);
    }
  }, [radioValue]);

  /** 전화번호 앞자리 입력시 뒷자리로 자동 탭 해주는 함수  */
  const autoTab = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    // 배송지
    if (infoType === 'ship') {
      // 휴대폰
      if (defaultValue) {
        const copy = [...shipMobile];
        copy[index] = value;
        setShipMobile(copy);
      }
      // 일반 전화
      else if (!defaultValue) {
        const copy = [...shipTel];
        copy[index] = value;
        setShipTel(copy);
      }
    }
    // 주문자
    else if (infoType === 'customer') {
      // 휴대폰
      if (defaultValue) {
        const copy = [...cstmrMobile];
        copy[index] = value;
        setCstmrMobile(copy);
      }
      // 일반 전화
      else if (!defaultValue) {
        const copy = [...cstmrTel];
        copy[index] = value;
        setCstmrTel(copy);
      }
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
            value={cstmrMobile[0]}
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
          value={cstmrTel[0]}
          readOnly
        />
      ) : (
        // 일반전화
        <Styled_PhoneNumber.Select
          onChange={(e: any) => {
            CallNumberCollecter(e, 0);
          }}
        >
          {AreaCode.map((v, i) => {
            return (
              <option value={v} key={i}>
                {v}
              </option>
            );
          })}
        </Styled_PhoneNumber.Select>
      )}
      {/* =======================전화번호 앞자리========================= */}-
      {radioValue === '배송정보와동일' && infoType === 'customer' ? (
        <Styled_PhoneNumber.Input
          $backGroundColor={true}
          value={defaultValue ? cstmrMobile[1] : cstmrTel[1]}
          readOnly
        />
      ) : (
        <Styled_PhoneNumber.Input
          type="text"
          pattern="\d*"
          maxLength={4}
          value={
            defaultValue
              ? infoType === 'ship'
                ? shipMobile[1]
                : cstmrMobile[1]
              : infoType === 'ship'
              ? shipTel[1]
              : cstmrTel[1]
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            autoTab(e);
            CallNumberCollecter(e, 1);
          }}
        />
      )}
      {/* =======================전화번호 뒷자리========================= */}-
      {radioValue === '배송정보와동일' && infoType === 'customer' ? (
        <Styled_PhoneNumber.Input
          $backGroundColor={true}
          value={defaultValue ? cstmrMobile[2] : cstmrTel[2]}
          readOnly
        />
      ) : (
        <Styled_PhoneNumber.Input
          type="text"
          pattern="\d*"
          maxLength={4}
          value={
            defaultValue
              ? infoType === 'ship'
                ? shipMobile[2]
                : cstmrMobile[2]
              : infoType === 'ship'
              ? shipTel[2]
              : cstmrTel[2]
          }
          ref={number2Ref}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            CallNumberCollecter(e, 2);
          }}
        />
      )}
    </div>
  );
};

export default CallNumber;
