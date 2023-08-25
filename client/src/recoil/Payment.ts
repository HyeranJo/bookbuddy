import { atom } from 'recoil';

/** 라디오버튼값(새로입력 or 배송정보와동일) */
export const radio_Atom = atom({
  key: 'radio_Atom',
  default: '새로입력',
});

/** 배송지 && 휴대폰 */
export const Ship_Mobile_Atom = atom({
  key: 'Ship_Mobile_Atom',
  default: ['010', '', ''],
});

/** 배송지 && 일반전화 */
export const Ship_Tel_Atom = atom({
  key: 'Ship_Tel_Atom',
  default: ['02', '', ''],
});

/** 주문자 && 휴대폰 */
export const Cstmr_Mobile_Atom = atom({
  key: 'Cstmr_Mobile_Atom',
  default: ['010', '', ''],
});

/** 주문자 && 일반전화 */
export const Cstmr_Tel_Atom = atom({
  key: 'Cstmr_Tel_Atom',
  default: ['02', '', ''],
});

export const ShipInputsAtom = atom({
  key: 'ShipInputs',
  default: { shipName: '', address1: '', address2: '' },
});

export const CstmrInputsAtom = atom({
  key: 'CstmrInputs',
  default: { cstmrName: '', email: '' },
});
