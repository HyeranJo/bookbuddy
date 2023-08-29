import { atom } from 'recoil';

/** Input 수량 */
export const QuantityAtom = atom<{ id: string; quantity: number }[]>({
  key: 'QuantityAtom',
  default: [],
});
