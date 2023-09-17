import { atom, selector } from 'recoil';

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

/** 전화번호 외 배송지 데이터 */
export const ShipInputsAtom = atom({
  key: 'ShipInputs',
  default: { shipName: '', address1: '', address2: '' },
});

/** 전화번호 외 주문자 데이터 */
export const CstmrInputsAtom = atom({
  key: 'CstmrInputs',
  default: { cstmrName: '', email: '' },
});

/** 전체 데이터 */
export const AllDataSelector = selector({
  key: 'AllDataSelector',
  get: ({ get }) => {
    const shipMobile = get(Ship_Mobile_Atom).join('');
    const shipTel = get(Ship_Tel_Atom).join('');
    const cstmrMobile = get(Cstmr_Mobile_Atom).join('');
    const cstmrTel = get(Cstmr_Tel_Atom).join('');
    const { shipName, address1, address2 } = get(ShipInputsAtom);
    const { cstmrName, email } = get(CstmrInputsAtom);

    return {
      shipName: shipName,
      address1: address1,
      address2: address2,
      shipMobile: shipMobile,
      shipTel: shipTel,
      cstmrName: cstmrName,
      cstmrMobile: cstmrMobile,
      cstmrTel: cstmrTel,
      email: email,
    };
  },
});
