import React from 'react';
import CartTable from '../../components/category/CartTable';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Order } from './Order.style';
import RedButton from '../../components/buttons/RedButton';

/** @todo 버튼클릭시 quantityList에 null이 없는지 확인 필요 */
const Order = () => {
  return (
    <Styled_Layout.Container>
      <Styled_Order.Div>
        <Styled_Order.Content>
          <CartTable />
          <Styled_Order.Submit>
            <RedButton name="주문하기" />
          </Styled_Order.Submit>
        </Styled_Order.Content>
      </Styled_Order.Div>
    </Styled_Layout.Container>
  );
};

export default Order;
