import React from 'react';
import { Styled_CartTable } from './CartTable.style';

const CartTable = () => {
  return (
    <Styled_CartTable.Table>
      <Styled_CartTable.Th>
        <input type="checkbox" />
      </Styled_CartTable.Th>
      <Styled_CartTable.Th className="books">도서</Styled_CartTable.Th>
      <Styled_CartTable.Th className="quantity">수량</Styled_CartTable.Th>
      <Styled_CartTable.Th className="price">금액</Styled_CartTable.Th>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>이방인</td>
        <td>1</td>
        <td>3000 원</td>
      </tr>
    </Styled_CartTable.Table>
  );
};

export default CartTable;
