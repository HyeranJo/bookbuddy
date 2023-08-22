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
          <col style={{ width: '45%' }}></col>
          <col style={{ width: '15%' }}></col>
          <col style={{ width: '12%' }}></col>
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
            <td rowSpan={2}>
              <Styled_CartTable.Input type="checkbox" />
            </td>
            <td rowSpan={2}>
              <Styled_CartTable.Img src={image} />
            </td>
            <Styled_CartTable.Td className="booktitle">
              라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무라임오렌지나무
            </Styled_CartTable.Td>
            <td rowSpan={2}>
              <QuantityInput />
            </td>
            <td rowSpan={2}>3000 원</td>
          </Styled_CartTable.Tr>
          <Styled_CartTable.DeleteTr>
            <Styled_CartTable.Td className="delete">
              삭제하기
            </Styled_CartTable.Td>
          </Styled_CartTable.DeleteTr>

          <Styled_CartTable.Tr>
            <td rowSpan={2}>
              <Styled_CartTable.Input type="checkbox" />
            </td>
            <td rowSpan={2}>
              <Styled_CartTable.Img src={image} />
            </td>
            <Styled_CartTable.Td className="booktitle">
              이방인
            </Styled_CartTable.Td>
            <td rowSpan={2}>
              <QuantityInput />
            </td>
            <td rowSpan={2}>3000 원</td>
          </Styled_CartTable.Tr>
          <Styled_CartTable.DeleteTr>
            <Styled_CartTable.Td className="delete">
              삭제하기
            </Styled_CartTable.Td>
          </Styled_CartTable.DeleteTr>

          <Styled_CartTable.AmountTr className="delivery">
            <td colSpan={5}>배송비 3,000원</td>
          </Styled_CartTable.AmountTr>
          <Styled_CartTable.AmountTr className="total">
            <td colSpan={5}>합계 6,900원</td>
          </Styled_CartTable.AmountTr>
        </tbody>
      </Styled_CartTable.Table>
    </div>
  );
};

export default CartTable;
