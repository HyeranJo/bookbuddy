import React, { useEffect, useState } from 'react';
import { Styled_Payment } from './Payment.styled';
import { Styled_Layout } from '../BlankPageLayout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AllDataSelector, ShipInputsAtom } from '../../recoil/Payment';
import RedButton from '../../components/buttons/RedButton';
import { postPaymentData } from '../../api/PostApi';
import { PaymentType } from '../../model/paymentType';
import { CartListAtom } from '../../recoil/CartItem';
import { emailRegExp } from '../../utils/RegExp';
import { CartListType } from '../../model/CartList';
import { getCartList } from '../../api/GetApi';
import { getCookie } from '../../utils/cookie';
import PostCode from '../../components/input/PostCode';
import { PostCodeAdrsAtom } from '../../recoil/PostCodeModal';
import { useNavigate } from 'react-router-dom';
import { DeleteCartItem } from '../../api/DeleteApi';
import Adress from '../../components/input/Adress';

const Payment = () => {
  const [shipInputs, setShipInputs] = useRecoilState(ShipInputsAtom);
  const allData = useRecoilValue<PaymentType>(AllDataSelector);
  const [OrderIdsToPay, setOrderIdsToPay] = useState<string[]>([]);
  const [orderList, setOrderList] = useRecoilState(CartListAtom);
  const [booksToPay, setBooksToPay] = useState<CartListType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>();
  const postCodeAdrs = useRecoilValue(PostCodeAdrsAtom);
  const navigate = useNavigate();

  // ==================================== useEffect ================================

  // ---------------------------------- api randering ------------------------------
  useEffect(() => {
    // 새로고침시 데이터 유지 위해 다시 api 요청
    getCartList(setOrderList);
    // Cookie에서 가져오는 데이터 저장 (무한 렌더링 방지)
    setOrderIdsToPay(getCookie('books').data);
    setTotalPrice(getCookie('totalPrice').data);
  }, []);

  // ----------------------------- 결제할 Book data 저장 ----------------------------
  useEffect(() => {
    // orderList에서 결제할 id 리스트와 같은 id를 가진 정보를 booksToPay 에 저장
    setBooksToPay(orderList.filter(v => OrderIdsToPay.includes(v.id)));
  }, [orderList, OrderIdsToPay]);

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
      let data = {
        orderBooks: booksToPay.map(v => {
          return { bookId: v.book.id, quantity: v.quantity };
        }),
        ...allDataCopy,
      };

      postPaymentData(data) // api 전송
        .then((data: any) => {
          alert(`주문 완료되었습니다. 주문번호는 ${data.id} 입니다`);
          booksToPay.map(v => DeleteCartItem(v.id));
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
              {booksToPay.map((v, i) => {
                return (
                  <span key={v.id}>
                    {v.book.name} - {v.quantity} 권
                    {i === booksToPay.length - 1 ? null : <span> / </span>}
                  </span>
                );
              })}
              <br />
              <span>
                배송비 3,000원, 총합{' '}
                {totalPrice && (totalPrice + 3000).toLocaleString()}원
              </span>
              <br />
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

export default Payment;
