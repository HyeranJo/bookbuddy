import React, { useEffect } from 'react';
import CartTable from '../../components/table/CartTable';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Order } from './Cart.style';
import RedButton from '../../components/buttons/RedButton';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  FinalPaymentDetailsAtom,
  CartListAtom,
  QuantityListAtom,
} from '../../recoil/CartItem';
import { getCartList } from '../../api/GetApi';

const Cart = () => {
  const navigate = useNavigate();
  const quantityList = useRecoilValue(QuantityListAtom);
  const finalPaymentDetail = useRecoilValue(FinalPaymentDetailsAtom);
  const [orderList, setOrderList] = useRecoilState(CartListAtom);

  // ==================================== useEffect ================================

  // ---------------------------------- api randering ------------------------------
  useEffect(() => {
    getCartList(setOrderList).catch(err => {
      if (err.message === 'Request failed with status code 403') {
        alert('로그인한 사용자만 이용 가능합니다');
        navigate('/');
      }
    });
  }, []);

  // ==================================== 함수 ====================================
  /** 주문하기 버튼 함수 */
  const onClickHandler = () => {
    // 결제할 도서가 1개 이상 선택되었는지 확인
    if (finalPaymentDetail.length === 0) {
      alert('구매하실 도서를 선택해주세요');
    }
    // 0인 수량이 있는지 확인(선택하지 않은 경우 포함)
    else {
      let cnt = 0; // 수량이 비어있지 않은 도서 개수
      for (let i = 0; i < quantityList.length; i++) {
        if (quantityList[i].quantity === 0) {
          alert('수량은 비어서는 안됩니다');
        } else {
          cnt++;
        }
      }
      if (cnt === quantityList.length) {
        navigate('/ship');
      }
    }
  };

  // ==================================== HTML ====================================
  return (
    <Styled_Layout.Container>
      <Styled_Layout.Div_WithNoSidebar>
        <Styled_Order.Content>
          {orderList.length !== 0 ? (
            <>
              <CartTable />
              <div className="submit">
                <RedButton name="주문하기" onClick={onClickHandler} />
              </div>
            </>
          ) : (
            <>
              <Styled_Layout.H1 className="noOrderItem">
                장바구니
              </Styled_Layout.H1>
              <div className="emptyItem">
                <span style={{ color: 'var(--light-border-color)' }}>
                  장바구니에 담긴 상품이 없습니다
                </span>
              </div>
              <div className="submit">
                <RedButton
                  name="뒤로가기"
                  onClick={() => {
                    navigate(-1);
                  }}
                />
              </div>
            </>
          )}
        </Styled_Order.Content>
      </Styled_Layout.Div_WithNoSidebar>
    </Styled_Layout.Container>
  );
};

export default Cart;
