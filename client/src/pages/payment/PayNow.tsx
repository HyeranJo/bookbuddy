import React, { useEffect, useState } from 'react';
import { Styled_Payment } from './Payment.styled';
import { Styled_Layout } from '../BlankPageLayout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AllDataSelector, ShipInputsAtom } from '../../recoil/Payment';
import RedButton from '../../components/buttons/RedButton';
import { postPaymentData } from '../../api/PostApi';
import { PaymentType } from '../../model/paymentType';
import { emailRegExp } from '../../utils/RegExp';
import { getCookie, removeCookie } from '../../utils/cookie';
import PostCode from '../../components/input/PostCode';
import { PostCodeAdrsAtom } from '../../recoil/PostCodeModal';
import { useNavigate } from 'react-router-dom';
import { BookInfo } from '../../model/BookList';
import Adress from '../../components/input/Adress';

// ================================================================================
// 결제하지않고 페이지 이동하는 경우 쿠키 삭제 안 되는 상황 방지 위해 /ship(payment.tsx)컴포넌트와 분리
// ================================================================================
const PayNow = () => {
  const [shipInputs, setShipInputs] = useRecoilState(ShipInputsAtom);
  const allData = useRecoilValue<PaymentType>(AllDataSelector);
  const postCodeAdrs = useRecoilValue(PostCodeAdrsAtom);
  const navigate = useNavigate();
  const [cookieValue, setCookieValue] = useState<BookInfo>();

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
        orderBooks: [{ bookId: cookieValue && cookieValue.id, quantity: 1 }],
        ...allDataCopy,
      };
      postPaymentData(data)
        .then((data: any) => {
          // 쿠키 삭제
          removeCookie('PayNow', { path: '/' });

          alert(`주문 완료되었습니다. 주문번호는 ${data.id} 입니다`);
          navigate('/');
        })
        .catch(error => {
          console.log('An error occurred:', error);
        });
    }
  };

  // ==================================== HTML ====================================

  return (
    <>
      <Styled_Layout.Container className="container">
        <Styled_Layout.Div_WithNoSidebar>
          <Styled_Payment.Content>
            {/* =================shipping-address==================== */}
            <Adress />
            {/* ============Book information for payment============= */}
            <Styled_Payment.BookInfo>
              <span>결제하실 도서와 금액은</span>
              <br />
              <br />

              {cookieValue ? (
                <>
                  <div>{cookieValue.name} - 1 권</div>
                  <div>
                    배송비 3,000원, 총합{' '}
                    {(cookieValue.price + 3000).toLocaleString()}원
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
