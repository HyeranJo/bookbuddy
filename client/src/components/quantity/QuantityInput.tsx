import React from 'react';
import { Styled_QuantityInput } from './QuantityInput.style';
import { useRecoilState } from 'recoil';
import { QuantityAtom } from '../../recoil/Quantity';

interface QuantityType {
  idx: number;
  id: string;
}

const QuantityInput = ({ idx, id }: QuantityType) => {
  const [quantityList, setQuantityList] =
    useRecoilState<{ id: string; quantity: number }[]>(QuantityAtom);

  const Minus = (num: number) => {
    if (num > 1) {
      num -= 1;
      QuantityHandler(num);
    } else {
      QuantityHandler(1);
    }
  };

  const Plus = (num: number) => {
    num++;
    QuantityHandler(num);
  };

  const QuantityHandler = (value: number) => {
    const copy = [...quantityList];

    if (copy[idx].id !== null) {
      copy[idx] = { ...copy[idx], quantity: value };
    } else {
      copy[idx] = { ...copy[idx], id: id, quantity: value };
    }

    setQuantityList(copy);
  };

  return (
    <div>
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
    </div>
  );
};

export default QuantityInput;
