import React from 'react';
import CartTable from '../../components/category/CartTable';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Order } from './Order.style';
import RedButton from '../../components/buttons/RedButton';
import { Link } from 'react-router-dom';

const Order = () => {
  return (
    <Styled_Layout.Container>
      <Styled_Order.Div>
        <Styled_Order.Content>
          <CartTable />
          <Link to="/payment" style={{ textDecorationLine: 'none' }}>
            <Styled_Order.Submit>
              <RedButton name="주문하기" />
            </Styled_Order.Submit>
          </Link>
        </Styled_Order.Content>
      </Styled_Order.Div>
    </Styled_Layout.Container>
  );
};

export default Order;
