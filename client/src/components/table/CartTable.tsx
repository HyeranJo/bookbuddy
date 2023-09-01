import React, { useEffect, useState } from 'react';
import { Styled_CartTable } from './CartTable.style';
import QuantityInput from '../quantity/QuantityInput';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { OrderListType } from '../../model/OrderList';
import {
  CheckedListAtom,
  OrderListAtom,
  QuantityListAtom,
  TotalPriceSelector,
} from '../../recoil/CartItem';
import { getOrderList } from '../../api/GetApi';
import { DeleteOrderItem } from '../../api/DeleteApi';

const CartTable = () => {
  // ===============================================================================
  const [orderList, setOrderList] = useRecoilState(OrderListAtom);
  const [checkedList, setCheckedList] = useRecoilState(CheckedListAtom);
  const [isChecked, setIsChecked] = useState(false); // input cheked 설정
  const [isMount, setIsMount] = useState(false); // 첫 렌더링 여부 확인
  const [selectAll, setSelectAll] = useState(true);
  const setQuantityList = useSetRecoilState(QuantityListAtom);
  const totalPrice = useRecoilValue(TotalPriceSelector);

  // ==================================== useEffect ================================

  // ---------------------------------- api randering ------------------------------
  useEffect(() => {
    getOrderList(setOrderList);
  }, [orderList]);

  // ---------------------- 사용할 check list, quantity list 설정 ---------------------
  useEffect(() => {
    // 첫 렌더링시
    if (orderList.length !== 0 && !isMount) {
      // checklist 채우기 (첫 렌더링시 전체선택 상태)
      const arr = Array(orderList.length)
        .fill(1)
        .map((v, i) => {
          return orderList[i].book.id;
        });
      setCheckedList(arr);

      // quantitylist 채우기
      const arr2 = Array(orderList.length)
        .fill(1)
        .map((v, i) => {
          return { id: orderList[i].book.id, quantity: orderList[i].quantity };
        });

      if (arr.length !== 0 && arr2.length !== 0) {
        setIsMount(true);
        setQuantityList(arr2);
      }
    }
  }, [orderList]);

  // ==================================== 함수 ====================================

  // ------------------------------ 개별 checkbox ---------------------------------
  /** 체크 리스트 변경 함수 */
  const checkedItemHandler = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList(prev => [...prev, value]);
    }
    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter(item => item !== value));
      setSelectAll(false); // 하나라도 체크가 안 된 경우 전체선택 false
    }
  };

  /** 체크 변경 함수 */
  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
  };

  // ------------------------------ 전체선택 checkbox -------------------------------
  /** 전체선택 checkbox 함수 */
  const selectAllHandler = () => {
    // 체크 false일시 true로 바꾸고 checked리스트 채우기
    if (!selectAll) {
      setSelectAll(true);
      const arr = Array(orderList.length)
        .fill(1)
        .map((v, i) => {
          return orderList[i].book.id;
        });

      setCheckedList(arr);
    }
    // 체크 true일시 false로 바꾸고 checked리스트 비우기
    else {
      setSelectAll(false);
      setCheckedList([]);
    }
  };

  // ==================================== HTML ====================================

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
              <input
                type="checkbox"
                checked={selectAll}
                onChange={selectAllHandler}
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
                <React.Fragment key={v.book.id}>
                  <Styled_CartTable.Tr>
                    <td rowSpan={2}>
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="order"
                        id={v.book.id}
                        checked={checkedList.includes(v.book.id)}
                        onChange={e => {
                          checkHandler(e, v.book.id);
                        }}
                      />
                    </td>
                    <td rowSpan={2}>
                      <img src={v.book.imgSrc} />
                    </td>
                    <td className="booktitle">{v.book.name}</td>
                    <td rowSpan={2}>
                      <QuantityInput idx={i} id={v.book.id} />
                    </td>
                    <td rowSpan={2}>{v.price} 원</td>
                  </Styled_CartTable.Tr>
                  <Styled_CartTable.DeleteTr>
                    <td
                      className="delete"
                      onClick={() => {
                        DeleteOrderItem(v.id);
                      }}
                    >
                      삭제하기
                    </td>
                  </Styled_CartTable.DeleteTr>
                </React.Fragment>
              );
            })}

          <Styled_CartTable.AmountTr className="delivery">
            <td colSpan={5}>배송비 3,000 원</td>
          </Styled_CartTable.AmountTr>
          <Styled_CartTable.AmountTr className="total">
            <td colSpan={5}>합계 {totalPrice + 3000} 원</td>
          </Styled_CartTable.AmountTr>
        </tbody>
      </Styled_CartTable.Table>
    </>
  );
};

export default CartTable;
