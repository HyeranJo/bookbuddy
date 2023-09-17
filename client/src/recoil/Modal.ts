import { atom } from 'recoil';

export const isYesClickedAtom = atom<boolean>({
  key: 'isYesClickedAtom',
  default: false,
});
