import { atom } from 'recoil';

/** 휴대폰 번호 */
export const CellPhoneNumberAtom = atom({
  key: 'CallNumberAtom',
  default: ['010'],
});

/** 전화 번호 */
export const TelephoneNumberAtom = atom({
  key: 'TelephoneNumberAtom',
  default: ['02'],
});
