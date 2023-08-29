import { atom } from 'recoil';

/** Quantity Input 수량 */
export const QuantityListAtom = atom<{ id: string; quantity: number }[]>({
  key: 'QuantitListAtom',
  default: [],
});
