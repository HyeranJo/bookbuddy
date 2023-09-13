import React from 'react';
import { Styled_Layout } from '../../pages/BlankPageLayout';
import { Styled_Payment } from '../../pages/payment/Payment.styled';
import CallNumber from './CallNumber';
import Input from './Input';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  CstmrInputsAtom,
  ShipInputsAtom,
  radio_Atom,
} from '../../recoil/Payment';
import {
  PostCodeAdrsAtom,
  PostCodeModalAtom,
} from '../../recoil/PostCodeModal';

const Adress = () => {
  const setRadioValue = useSetRecoilState(radio_Atom);
  const [shipInputs, setShipInputs] = useRecoilState(ShipInputsAtom);
  const [cstmrInputs, setCstmrInputs] = useRecoilState(CstmrInputsAtom);
  const { shipName, address1, address2 } = shipInputs;
  const { cstmrName, email } = cstmrInputs;
  const postCodeAdrs = useRecoilValue(PostCodeAdrsAtom);
  const setIsOpen = useSetRecoilState(PostCodeModalAtom);

  // ==================================== 함수 ====================================

  /* 라디오 버튼 값 변경 사항을 변수에 저장하는 함수 **/
  const radioHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  /** input handler */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === 'cstmrName' || name === 'email') {
      setCstmrInputs({
        ...cstmrInputs,
        [name]: value,
      });
    } else {
      setShipInputs({
        ...shipInputs,
        [name]: value,
      });
    }
  };

  /** 주소검색 api handler */
  const postCodeHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Styled_Layout.H1>배송주소</Styled_Layout.H1>
      <Styled_Payment.Address>
        <div className="shipping-address">
          <Styled_Payment.Table id="shipping-address-table">
            <colgroup>
              <col style={{ width: '15%' }}></col>
              <col style={{ width: '20%' }}></col>
              <col style={{ width: '60%' }}></col>
            </colgroup>
            <tbody>
              <tr>
                <td>이름*</td>
                <td colSpan={2}>
                  <Input
                    type="text"
                    name="shipName"
                    value={shipName}
                    height={40}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>배송주소*</td>
                <td colSpan={2}>
                  <Input
                    type="text"
                    name="address1"
                    value={postCodeAdrs.주소}
                    height={40}
                    placeholder="주소검색 버튼을 눌러주세요"
                    readOnly
                  />
                  <Styled_Payment.AdrBtn onClick={postCodeHandler}>
                    주소검색
                  </Styled_Payment.AdrBtn>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>도로명 주소*</td>
                <td>
                  <Input
                    type="text"
                    name="address1"
                    value={postCodeAdrs.주소}
                    height={40}
                    placeholder="주소검색 버튼을 눌러주세요"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>지번 주소*</td>
                <td>
                  <Input
                    type="text"
                    name="address2"
                    value={address2}
                    height={40}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>휴대폰*</td>
                <td colSpan={2}>
                  <CallNumber defaultValue="010" infoType="ship" />
                </td>
              </tr>
              <tr>
                <td>일반전화</td>
                <td colSpan={2}>
                  <CallNumber infoType="ship" />
                </td>
              </tr>
            </tbody>
          </Styled_Payment.Table>
        </div>
        {/* =================customer-info-radiobutton============ */}
        <div className="orderer-info">
          <Styled_Payment.SubTitle>
            <h2>주문고객</h2>
            <form>
              <input
                type="radio"
                name="newInput"
                id="새로입력"
                value="새로입력"
                onChange={e => {
                  radioHandleChange(e);
                }}
                defaultChecked
              />
              <label htmlFor="newInput">새로 입력</label>
              <input
                type="radio"
                name="sameAsShipInfo"
                id="배송정보와동일"
                value="배송정보와동일"
                onChange={e => {
                  radioHandleChange(e);
                }}
              />
              <label htmlFor="sameAsShipInfo">배송정보와 동일</label>
            </form>
          </Styled_Payment.SubTitle>
          {/* =================customer-info==================== */}
          <Styled_Payment.Table id="orderer-info-table">
            <colgroup>
              <col style={{ width: '25%' }}></col>
              <col style={{ width: '75%' }}></col>
            </colgroup>
            <tbody>
              <tr>
                <td>이름*</td>
                <td>
                  <Input
                    type="text"
                    name="cstmrName"
                    value={cstmrName}
                    height={40}
                    width={278}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>휴대폰*</td>
                <td>
                  <CallNumber defaultValue="010" infoType="customer" />
                </td>
              </tr>
              <tr>
                <td>일반전화</td>
                <td>
                  <CallNumber infoType="customer" />
                </td>
              </tr>
              <tr>
                <td>이메일*</td>
                <td>
                  <Input
                    type="text"
                    name="email"
                    value={email}
                    height={40}
                    width={278}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </Styled_Payment.Table>
        </div>
      </Styled_Payment.Address>
    </>
  );
};

export default Adress;
