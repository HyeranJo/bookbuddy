import React from 'react';
import { Styled_Payment } from './Payment.styled';
import { Styled_Layout } from '../BlankPageLayout';
import CallNumber from '../../components/input/CallNumber';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  CstmrInputsAtom,
  ShipInputsAtom,
  radio_Atom,
} from '../../recoil/Payment';
import Input from '../../components/input/Input';

const Payment = () => {
  const setRadioValue = useSetRecoilState(radio_Atom);
  const [shipInputs, setShipInputs] = useRecoilState(ShipInputsAtom);
  const [cstmrInputs, setCstmrInputs] = useRecoilState(CstmrInputsAtom);
  const { shipName, address1, address2 } = shipInputs;
  const { cstmrName, email } = cstmrInputs;

  console.log(shipInputs, cstmrInputs);

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

  return (
    <>
      <Styled_Layout.Container className="container">
        <Styled_Layout.Div_WithNoSidebar>
          <Styled_Payment.Content>
            {/* =================shipping-address==================== */}
            <Styled_Layout.H1>배송주소</Styled_Layout.H1>
            <Styled_Payment.Address>
              <div className="shipping-address">
                <Styled_Payment.Table id="shipping-address-table">
                  <colgroup>
                    <col style={{ width: '15%' }}></col>
                    <col style={{ width: '20%' }}></col>
                    <col style={{ width: '65%' }}></col>
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
                          value={address1}
                          height={40}
                          onChange={handleChange}
                        />
                        <button>주소찾기</button>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>도로명 주소</td>
                      <td>
                        <Input
                          type="text"
                          name="address1"
                          value={address1}
                          height={40}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>지번 주소</td>
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
              {/* =================orderer-info-radiobutton============ */}
              <div className="orderer-info">
                <Styled_Payment.SubTitle>
                  <h2>주문고객</h2>
                  <form>
                    <input
                      type="radio"
                      name="inputstyle"
                      id="새로입력"
                      value="새로입력"
                      onChange={e => {
                        radioHandleChange(e);
                      }}
                      defaultChecked
                    />
                    <label htmlFor="inputstyle">새로 입력</label>
                    <input
                      type="radio"
                      name="inputstyle"
                      id="배송정보와동일"
                      value="배송정보와동일"
                      onChange={e => {
                        radioHandleChange(e);
                      }}
                    />
                    <label htmlFor="inputstyle">배송정보와 동일</label>
                  </form>
                </Styled_Payment.SubTitle>
                {/* =================orderer-info==================== */}
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
          </Styled_Payment.Content>
        </Styled_Layout.Div_WithNoSidebar>
      </Styled_Layout.Container>
    </>
  );
};

export default Payment;
