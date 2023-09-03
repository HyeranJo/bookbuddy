import React from 'react';
import { Styled_QuantityInput } from './QuantityInput.style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { patchOrderQuantity } from '../../api/PatchApi';
import { OrderListAtom, QuantityListAtom } from '../../recoil/CartItem';

interface QuantityType {
  idx: number;
  id: string;
}

const QuantityInput = ({ idx, id }: QuantityType) => {
  const [quantityList, setQuantityList] = useRecoilState(QuantityListAtom);
  const orderList = useRecoilValue(OrderListAtom);

  /** 클릭한 input의 order아이디를 검색 */
  const orderIdHandler = () => {
    const orderId = orderList.filter(v => v.book.id === id)[0].id;

    return orderId;
  };

  /** 빼기 */
  const Minus = (num: number) => {
    if (num > 1) {
      num -= 1;
      QuantityHandler(num);
      patchOrderQuantity(orderIdHandler(), num);
    } else {
      QuantityHandler(1);
      patchOrderQuantity(orderIdHandler(), 1);
    }
  };

  /** 더하기 */
  const Plus = (num: number) => {
    num++;
    QuantityHandler(num);
    patchOrderQuantity(orderIdHandler(), num);
  };

  /** 입력한 숫자에 따라 quantityList 수정 */
  const QuantityHandler = (value: number) => {
    const copy = [...quantityList];

    if (copy[idx].id !== null) {
      copy[idx] = { ...copy[idx], quantity: value };
    } else {
      copy[idx] = { ...copy[idx], id: id, quantity: value };
    }

    setQuantityList(copy);
  };

  // ==================================== HTML ====================================
  return (
    <>
      <Styled_QuantityInput.Button
        onClick={() => {
          Minus(quantityList.length !== 0 ? quantityList[idx].quantity : 0);
        }}
      >
        -
      </Styled_QuantityInput.Button>
      <Styled_QuantityInput.Input
        type="number"
        value={
          quantityList.length !== 0
            ? quantityList[idx].quantity
              ? quantityList[idx].quantity
              : '' // 직접 수정시 글자 지웠을 때 0 뜨는 현상 방지
            : 0
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          QuantityHandler(Number(e.target.value));
        }}
      />
      <Styled_QuantityInput.Button
        onClick={() => {
          Plus(quantityList.length !== 0 ? quantityList[idx].quantity : 0);
        }}
      >
        +
      </Styled_QuantityInput.Button>
    </>
  );
};

export default QuantityInput;
