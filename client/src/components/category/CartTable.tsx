import React, { useEffect, useState } from 'react';
import { Styled_CartTable } from './CartTable.style';
import QuantityInput from '../quantity/QuantityInput';
import image from '../.././images/나의 라임 오렌지나무.jpg';
import axios from 'axios';

interface OrderListType {
  id: number;
  name: string;
  author: string;
  publisher: string;
  price: number;
  date: string;
  imgSrc: string;
  quantity: number;
}
const CartTable = () => {
  const [orderList, setOrderList] = useState<OrderListType[]>([]);
  const [checkList, setCheckList] = useState<number[]>([]);
  const [totalPrice, settotalPrice] = useState(0);

  useEffect(() => {
    const getOrderList = async () => {
      try {
        const response = await axios.get('./dummy/orderDummy.json');
        setOrderList(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrderList();

    // 0 or 1 체크리스트 배열 만들기
    if (orderList.length !== 0) {
      const arr = Array(orderList.length)
        .fill(1)
        .map(v => v);

      setCheckList(arr);
    }
  }, [orderList]);

  // 새로고침 하지 않는 이상 checklist만 바뀔 것이기 때문에 데이터 다시 받아오면 안 됨.
  // useEffect 분리
  useEffect(() => {
    const arr = [];
    // 체크리스트에 1인 아이들만 orderlist에서 찾아서 수량*금액 다 더해서 총합에 리턴
    for (let i = 0; i < orderList.length; i++) {
      if (checkList[i] === 1) {
        arr.push(orderList[i].quantity * orderList[i].price);
      }
    }
    if (arr.length !== 0) {
      settotalPrice(
        arr.reduce((acc: number, cur: number) => {
          return acc + cur;
        }),
      );
    }
  }, [checkList]);

  return (
    <>
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
          {orderList &&
            orderList.map((v: OrderListType, i) => {
              return (
                <React.Fragment key={v.id}>
                  <Styled_CartTable.Tr>
                    <td rowSpan={2}>
                      <Styled_CartTable.Input type="checkbox" />
                    </td>
                    <td rowSpan={2}>
                      <Styled_CartTable.Img src={v.imgSrc} />
                    </td>
                    <Styled_CartTable.Td className="booktitle">
                      {v.name}
                    </Styled_CartTable.Td>
                    <td rowSpan={2}>
                      <QuantityInput />
                    </td>
                    <td rowSpan={2} style={{ fontSize: '24px' }}>
                      {v.price * v.quantity} 원
                    </td>
                  </Styled_CartTable.Tr>
                  <Styled_CartTable.DeleteTr>
                    <Styled_CartTable.Td className="delete">
                      삭제하기
                    </Styled_CartTable.Td>
                  </Styled_CartTable.DeleteTr>
                </React.Fragment>
              );
            })}

          <Styled_CartTable.AmountTr className="delivery">
            <td colSpan={5}>배송비 3,000원</td>
          </Styled_CartTable.AmountTr>
          <Styled_CartTable.AmountTr className="total">
            <td colSpan={5}>합계 {totalPrice}원</td>
          </Styled_CartTable.AmountTr>
        </tbody>
      </Styled_CartTable.Table>
    </>
  );
};

export default CartTable;
