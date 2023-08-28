import { atom } from 'recoil';

/** Input 수량 */
// type: {id: string; quantity: number}[]
export const QuantityAtom = atom({
  key: 'QuantityAtom',
  default: [],
});
