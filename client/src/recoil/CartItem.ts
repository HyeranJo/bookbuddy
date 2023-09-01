import { atom, selector } from 'recoil';
import { QuantityListAtom } from './Quantity';
import { OrderListType } from '../model/OrderList';

/** 장바구니 선택 리스트 */
export const CheckedListAtom = atom<string[]>({
  key: 'CheckedListAtom',
  default: [],
});

/** 장바구니 리스트 */
export const OrderListAtom = atom<OrderListType[]>({
  key: 'OrderListAtom',
  default: [],
});

/** 최종 결제할 도서,수량 리스트 */
export const FinalPaymentDetailsAtom = selector({
  key: 'FinalPaymentDetailsAtom',
  get: ({ get }) => {
    const checkedList = get(CheckedListAtom);
    const orderList = get(OrderListAtom);

    let arr = [];

    for (let i = 0; i < checkedList.length; i++) {
      for (let j = 0; j < orderList.length; j++) {
        if (checkedList[i] === orderList[j].book.id) {
          arr.push(orderList[j].id);
        }
      }
    }

    return arr;
  },
});

/** 장바구니 전체 금액 */
export const TotalPriceSelector = selector({
  key: 'BookPriceSelector',
  get: ({ get }) => {
    const checkedList = get(CheckedListAtom);
    const orderList = get(OrderListAtom);
    const quantityList = get(QuantityListAtom);

    // 체크리스트에 있는 아이들만 orderlist에서 찾아서 수량*금액
    const arr = [];
    for (let i = 0; i < checkedList.length; i++) {
      for (let j = 0; j < orderList.length; j++) {
        if (checkedList[i] === orderList[j].book.id) {
          const bookQuan = quantityList.find(
            (data: { id: string; quantity: number }) => {
              return data.id === checkedList[i];
            },
          ) as { id: string; quantity: number } | undefined;
          if (bookQuan) {
            arr.push(bookQuan.quantity * orderList[j].price);
          } else {
            arr.push(0);
          }
        }
      }
    }
    // 수량*금액한 arr을 다 더해서 총합에 리턴
    if (arr.length !== 0) {
      return arr.reduce((acc: number, cur: number) => {
        return acc + cur;
      });
    } else {
      return 0;
    }
  },
});
