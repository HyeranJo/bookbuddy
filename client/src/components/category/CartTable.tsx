import React, { useEffect, useState } from 'react';
import { Styled_CartTable } from './CartTable.style';
import QuantityInput from '../quantity/QuantityInput';
import image from '../.././images/나의 라임 오렌지나무.jpg';
import axios from 'axios';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

interface OrderListType {
  id: string;
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
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  // 첫 렌더링 여부 확인
  const [isMount, setIsMount] = useState(false);
  const [selectAll, setSelectAll] = useState(true);

  useEffect(() => {
    if (orderList.length === 0) {
      const getOrderList = async () => {
        try {
          const response = await axios.get('./dummy/orderDummy.json');
          // const response = await axios.post(`${SERVER_HOST}/order`);
          setOrderList(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      getOrderList();
    }
  }, []);

  useEffect(() => {
    // 첫 렌더링시 (첫 렌더링시 전체선택 상태) checklist 채우기
    if (checkedList.length === 0 && !isMount) {
      const arr = Array(orderList.length)
        .fill(1)
        .map((v, i) => {
          return orderList[i].id;
        });

      setCheckedList(arr);
      if (arr.length !== 0) {
        setIsMount(true);
      }
    }

    // 체크리스트에 있는 아이들만 orderlist에서 찾아서 수량*금액
    const arr = [];
    for (let i = 0; i < checkedList.length; i++) {
      for (let j = 0; j < orderList.length; j++) {
        if (checkedList[i] === orderList[j].id) {
          arr.push(orderList[j].quantity * orderList[j].price);
        }
      }
    }
    // 수량*금액한 arr을 다 더해서 총합에 리턴
    if (arr.length !== 0) {
      setTotalPrice(
        arr.reduce((acc: number, cur: number) => {
          return acc + cur;
        }),
      );
    } else {
      setTotalPrice(0);
    }
  }, [checkedList]);

  const checkedItemHandler = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList(prev => [...prev, value]);
    }
    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter(item => item !== value));
      // 하나라도 체크가 안 된 경우 전체선택 false
      setSelectAll(false);
    }
  };

  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
  };

  const selectAllHandler = () => {
    // 체크 false일시 true로 바꾸고 checked리스트 채우기
    if (!selectAll) {
      setSelectAll(true);
      const arr = Array(orderList.length)
        .fill(1)
        .map((v, i) => {
          return orderList[i].id;
        });

      setCheckedList(arr);
    }
    // 체크 true일시 false로 바꾸고 checked리스트 비우기
    else {
      setSelectAll(false);
      setCheckedList([]);
    }
  };

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
              <Styled_CartTable.Input
                type="checkbox"
                checked={selectAll}
                onClick={selectAllHandler}
              />
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
                      <Styled_CartTable.Input
                        type="checkbox"
                        name="order"
                        id={v.id}
                        checked={checkedList.includes(v.id)}
                        onChange={e => {
                          checkHandler(e, v.id);
                        }}
                      />
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
            <td colSpan={5}>합계 {totalPrice + 3000}원</td>
          </Styled_CartTable.AmountTr>
        </tbody>
      </Styled_CartTable.Table>
    </>
  );
};

export default CartTable;
