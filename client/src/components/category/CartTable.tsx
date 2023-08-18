import React from 'react';
import { Styled_CartTable } from './CartTable.style';
import QuantityInput from '../quantity/QuantityInput';
import image from '../.././images/나의 라임 오렌지나무.jpg';

const CartTable = () => {
  return (
    <div>
      <Styled_CartTable.H1>장바구니</Styled_CartTable.H1>
      <Styled_CartTable.Table>
        <colgroup>
          <col style={{ width: '8%' }}></col>
          <col style={{ width: '20%' }}></col>
          <col style={{ width: '37%' }}></col>
          <col style={{ width: '15%' }}></col>
          <col style={{ width: '12%' }}></col>
          <col style={{ width: '8%' }}></col>
        </colgroup>
        <thead>
          <tr>
            <Styled_CartTable.Th>
              <Styled_CartTable.Input type="checkbox" />
            </Styled_CartTable.Th>
            <Styled_CartTable.Th colSpan={2}>도서</Styled_CartTable.Th>
            <Styled_CartTable.Th>수량</Styled_CartTable.Th>
            <Styled_CartTable.Th>금액</Styled_CartTable.Th>
            <Styled_CartTable.Th></Styled_CartTable.Th>
          </tr>
        </thead>
        <tbody>
          <Styled_CartTable.Tr>
            <td>
              <Styled_CartTable.Input type="checkbox" />
            </td>
            <Styled_CartTable.Td>
              <Styled_CartTable.Img src={image} />
            </Styled_CartTable.Td>
            <Styled_CartTable.Td className="booktitle">
              라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무
            </Styled_CartTable.Td>
            <td>
              <QuantityInput />
            </td>
            <td>3000 원</td>
            <Styled_CartTable.Td className="delete">삭제</Styled_CartTable.Td>
          </Styled_CartTable.Tr>

          <Styled_CartTable.Tr>
            <td>
              <Styled_CartTable.Input type="checkbox" />
            </td>
            <td>
              <Styled_CartTable.Img src={image} />
            </td>
            <td className="booktitle">이방인</td>
            <td>
              <QuantityInput />
            </td>
            <td>3000 원</td>
            <Styled_CartTable.Td className="delete">삭제</Styled_CartTable.Td>
          </Styled_CartTable.Tr>
        </tbody>
      </Styled_CartTable.Table>
    </div>
  );
};

export default CartTable;
