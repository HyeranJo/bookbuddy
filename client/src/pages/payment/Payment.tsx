import React from 'react';
import { Styled_Payment } from './Payment.styled';
import { Styled_Layout } from '../BlankPageLayout';
import CallNumber from '../../components/input/CallNumber';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  CstmrInputsAtom,
  AllDataSelector,
  ShipInputsAtom,
  radio_Atom,
} from '../../recoil/Payment';
import Input from '../../components/input/Input';
import RedButton from '../../components/buttons/RedButton';
import { postPaymentData } from '../../api/PostApi';
import { PaymentType } from '../../model/paymentType';
import { FinalPaymentDetailsAtom } from '../../recoil/CartItem';
import { emailRegExp } from '../../utils/RegExp';

const Payment = () => {
  const setRadioValue = useSetRecoilState(radio_Atom);
  const [shipInputs, setShipInputs] = useRecoilState(ShipInputsAtom);
  const [cstmrInputs, setCstmrInputs] = useRecoilState(CstmrInputsAtom);
  const { shipName, address1, address2 } = shipInputs;
  const { cstmrName, email } = cstmrInputs;
  const allData = useRecoilValue<PaymentType>(AllDataSelector);
  const FinalPaymentDetail = useRecoilValue(FinalPaymentDetailsAtom);

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

  /** payment 데이터를 서버로 전송하고 응답을 처리하는 함수 */
  const buttonClickHandler = () => {
    // cstmrTel, shipTel 입력값이 없는 경우 보내는 리스트에서 제외
    const allDataCopy = { ...allData };
    if (
      (allDataCopy.cstmrTel && allDataCopy.cstmrTel.length === 2) ||
      (allDataCopy.cstmrTel && allDataCopy.cstmrTel.length === 3)
    ) {
      delete allDataCopy.cstmrTel;
    }
    if (
      (allDataCopy.shipTel && allDataCopy.shipTel.length === 2) ||
      (allDataCopy.shipTel && allDataCopy.shipTel.length === 3)
    ) {
      delete allDataCopy.shipTel;
    }

    // 일반전화 제외 모든 항목이 올바르게 입력되었는지 확인
    const nullValues = Object.values(allDataCopy).filter(v => v.length === 0);
    if (nullValues.length >= 1) {
      alert('일반전화 외 모든 항목을 입력해주세요');
    } else if (!emailRegExp.test(allDataCopy.email)) {
      alert('이메일 형식에 맞게 작성해주세요');
    } else {
      const data = {
        orders: [...FinalPaymentDetail],
        ...allDataCopy,
      };
      postPaymentData(data)
        .then((data: any) => {
          console.log(data);
        })
        .catch(error => {
          console.log('An error occurred:', error);
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
              {/* =================customer-info-radiobutton============ */}
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
            <div className="redButton">
              <RedButton name="결제하기" onClick={buttonClickHandler} />
            </div>
          </Styled_Payment.Content>
        </Styled_Layout.Div_WithNoSidebar>
      </Styled_Layout.Container>
    </>
  );
};

export default Payment;
