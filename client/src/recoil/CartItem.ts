import { atom, selector } from 'recoil';

/** 장바구니 리스트 */
export const CartItemAtom = atom({
  key: 'CartItemAtom',
  default: [],
});

/** 장바구니 선택 리스트 */
export const SelectedCartItemAtom = atom({
  key: 'SelectedCartItemAtom',
  default: [],
});

/** 장바구니 도서 수량 리스트 */
export const BookQuantityAtom = atom({
  key: 'BookQuantityAtom',
  default: [],
});

/** 장바구니 선택된 도서 금액 리스트 */
export const CartPriceAtom = atom({
  key: 'CartPriceAtom',
  default: [],
});

/** 장바구니 전체 금액 */
export const TotalPriceSelector = selector({
  key: 'BookPriceSelector',
  get: ({ get }) => {
    const price = get(CartPriceAtom);
    return price.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  },
});
