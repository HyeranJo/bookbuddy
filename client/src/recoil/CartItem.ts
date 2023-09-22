import { atom, selector } from 'recoil';
import { CartListType } from '../model/CartList';
import { setCookie } from '../utils/ReactCookie';

/** 장바구니 선택 리스트 */
export const CheckedListAtom = atom<string[]>({
  key: 'CheckedListAtom',
  default: [],
});

/** 장바구니 리스트 */
export const CartListAtom = atom<CartListType[]>({
  key: 'CartListAtom',
  default: [],
});

/** Quantity Input 장바구니 수량 리스트
 * @id : 도서 id
 */
export const QuantityListAtom = atom<{ id: string; quantity: number }[]>({
  key: 'QuantitListAtom',
  default: [],
});

/** 최종 결제할 도서 'order id' 리스트 */
export const FinalPaymentDetailsAtom = selector({
  key: 'FinalPaymentDetailsAtom',
  get: ({ get }) => {
    const checkedList = get(CheckedListAtom);
    const cartList = get(CartListAtom);

    let arr = [];

    for (let i = 0; i < checkedList.length; i++) {
      for (let j = 0; j < cartList.length; j++) {
        if (checkedList[i] === cartList[j].book.id) {
          arr.push(cartList[j].id);
        }
      }
    }

    setCookie('books', JSON.stringify({ data: arr }), { path: '/' }); // 새로고침시 데이터 유실 방지
    return arr;
  },
});

/** 장바구니 전체 금액 */
export const TotalPriceSelector = selector({
  key: 'BookPriceSelector',
  get: ({ get }) => {
    const checkedList = get(CheckedListAtom);
    const cartList = get(CartListAtom);
    const quantityList = get(QuantityListAtom);

    // 체크리스트에 있는 아이들만 cartlist에서 찾아서 수량*금액
    const arr = [];
    for (let i = 0; i < checkedList.length; i++) {
      for (let j = 0; j < cartList.length; j++) {
        if (checkedList[i] === cartList[j].book.id) {
          const bookQuan = quantityList.find(
            (data: { id: string; quantity: number }) => {
              return data.id === checkedList[i];
            },
          ) as { id: string; quantity: number } | undefined;
          if (bookQuan) {
            arr.push(bookQuan.quantity * cartList[j].price);
          } else {
            arr.push(0);
          }
        }
      }
    }

    // 수량*금액한 arr을 다 더해서 총합에 리턴
    if (arr.length !== 0) {
      const price = arr.reduce((acc: number, cur: number) => {
        return acc + cur;
      });
      setCookie('totalPrice', JSON.stringify({ data: price }), {
        path: '/',
      }); // 새로고침시 데이터 유실 방지
      return price;
    } else {
      return 0;
    }
  },
});
