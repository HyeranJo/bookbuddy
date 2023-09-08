import React, { useEffect, useState } from 'react';
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
import { emailRegExp } from '../../utils/RegExp';
import { OrderListType } from '../../model/OrderList';
import { getCookie, removeCookie } from '../../utils/cookie';
import PostCode from '../../components/input/PostCode';
import {
  PostCodeAdrsAtom,
  PostCodeModalAtom,
} from '../../recoil/PostCodeModal';
import { useNavigate } from 'react-router-dom';
import { DeleteOrderItem } from '../../api/DeleteApi';

// ================================================================================
// 결제하지않고 페이지 이동하는 경우 쿠키 삭제 안 되는 상황 방지 위해 /ship(payment.tsx)컴포넌트와 분리
// ================================================================================
const PayNow = () => {
  const setRadioValue = useSetRecoilState(radio_Atom);
  const [shipInputs, setShipInputs] = useRecoilState(ShipInputsAtom);
  const [cstmrInputs, setCstmrInputs] = useRecoilState(CstmrInputsAtom);
  const { shipName, address1, address2 } = shipInputs;
  const { cstmrName, email } = cstmrInputs;
  const allData = useRecoilValue<PaymentType>(AllDataSelector);
  const setIsOpen = useSetRecoilState(PostCodeModalAtom);
  const postCodeAdrs = useRecoilValue(PostCodeAdrsAtom);
  const navigate = useNavigate();
  const [cookieValue, setCookieValue] = useState<OrderListType>();

  // ==================================== useEffect ================================
  // ----------------------------- 결제할 Book data 저장 ----------------------------
  useEffect(() => {
    if (!getCookie('PayNow')) {
      location.reload();
    } else {
      setCookieValue(getCookie('PayNow'));
    }
  }, []);

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

  /** payment 데이터를 서버로 전송하고 응답을 처리하는 함수 */
  const buttonClickHandler = () => {
    // address1 데이터에 추가
    setShipInputs({ ...shipInputs, address1: postCodeAdrs.주소 });
    const allDataCopy = { ...allData, address1: postCodeAdrs.주소 };

    // cstmrTel, shipTel 입력값이 없는 경우 보내는 리스트에서 제외
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
      // api 전송
      const data = {
        orders: [getCookie('PayNow').id],
        ...allDataCopy,
      };
      postPaymentData(data) // api 전송
        .then((data: any) => {
          console.log(data);
          // 장바구니 삭제
          DeleteOrderItem(getCookie('PayNow').id);
          // 쿠키 삭제
          removeCookie('PayNow', { path: '/' });

          alert('주문이 완료되었습니다');
          navigate('/');
        })
        .catch(error => {
          console.log('An error occurred:', error);
        });
    }
  };

  /** 주소검색 api handler */
  const postCodeHandler = () => {
    setIsOpen(true);
  };

  // ==================================== HTML ====================================

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
            <Styled_Payment.BookInfo>
              <span>결제하실 도서와 금액은</span>
              <br />
              <br />

              {cookieValue ? (
                <>
                  <div>
                    {cookieValue.book.name} - {cookieValue.quantity} 권
                  </div>
                  <div>
                    배송비 3,000원, 총합{' '}
                    {(cookieValue.book.price + 3000).toLocaleString()}원
                  </div>
                </>
              ) : (
                <span>loading...</span>
              )}

              <br />
              <span>입니다.</span>
            </Styled_Payment.BookInfo>
            <div className="redButton">
              <RedButton name="결제하기" onClick={buttonClickHandler} />
            </div>
          </Styled_Payment.Content>
        </Styled_Layout.Div_WithNoSidebar>
      </Styled_Layout.Container>
      <PostCode />
    </>
  );
};

export default PayNow;
