import React from 'react';
import CartTable from '../../components/category/CartTable';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Order } from './Order.style';
import RedButton from '../../components/buttons/RedButton';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { QuantityAtom } from '../../recoil/Quantity';
import { FinalPaymentDetailsAtom } from '../../recoil/CartItem';

const Order = () => {
  const navigate = useNavigate();
  const quantityList =
    useRecoilValue<{ id: string; quantity: number }[]>(QuantityAtom);
  const FinalPaymentDetail = useRecoilValue(FinalPaymentDetailsAtom);

  const onClickHandler = () => {
    let cnt = 0;
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
  };

  return (
    <Styled_Layout.Container>
      <Styled_Order.Div>
        <Styled_Order.Content>
          <CartTable />
          <Styled_Order.Submit>
            <RedButton name="주문하기" onClick={onClickHandler} />
          </Styled_Order.Submit>
        </Styled_Order.Content>
      </Styled_Order.Div>
    </Styled_Layout.Container>
  );
};

export default Order;
