import React, { useEffect } from 'react';
import CartTable from '../../components/table/CartTable';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Order } from './Order.style';
import RedButton from '../../components/buttons/RedButton';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  FinalPaymentDetailsAtom,
  OrderListAtom,
  QuantityListAtom,
} from '../../recoil/CartItem';
import { getOrderList } from '../../api/GetApi';

const Order = () => {
  const navigate = useNavigate();
  const quantityList =
    useRecoilValue<{ id: string; quantity: number }[]>(QuantityListAtom);
  const finalPaymentDetail = useRecoilValue(FinalPaymentDetailsAtom);
  const [orderList, setOrderList] = useRecoilState(OrderListAtom);

  // ==================================== useEffect ================================

  // ---------------------------------- api randering ------------------------------
  useEffect(() => {
    getOrderList(setOrderList);
  }, [orderList]);

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
      <Styled_Order.Div>
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
              <Styled_Layout.H1 style={{ width: '1300px' }}>
                장바구니
              </Styled_Layout.H1>
              <div className="emptyItem">
                <span style={{ color: 'var(--light-border-color)' }}>
                  장바구니에 담긴 상품이 없습니다
                </span>
                🥲
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
      </Styled_Order.Div>
    </Styled_Layout.Container>
  );
};

export default Order;
