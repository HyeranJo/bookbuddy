import { atom } from 'recoil';

/** 라디오버튼값(새로입력 or 배송정보와동일) */
export const radio_Atom = atom({
  key: 'radio_Atom',
  default: '새로입력',
});

/** 휴대폰 && 배송지 */
export const Cell_Ship_Atom = atom({
  key: 'Cell_Ship_Atom',
  default: ['010'],
});

/** 일반전화 && 배송지 */
export const Tel_Ship_Atom = atom({
  key: 'Tel_Ship_Atom',
  default: ['02'],
});

/** 휴대폰 && 주문자 */
export const Cell_Cstmr_Atom = atom({
  key: 'Cell_Cstmr_Atom',
  default: ['010'],
});

/** 일반전화 && 주문자 */
export const Tel_Cstmr_Atom = atom({
  key: 'Tel_Cstmr_Atom',
  default: ['02'],
});

export const ShipInputs = atom({
  key: 'ShipInputs',
  default: { name: '', address1: '', address2: '' },
});

export const OrdererInputs = atom({
  key: 'OrdererInputs',
  default: { orderName: '', email: '' },
});
