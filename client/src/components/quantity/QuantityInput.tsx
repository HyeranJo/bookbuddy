import React from 'react';
import { Styled_QuantityInput } from './QuantityInput.style';
import { useRecoilState } from 'recoil';
import { QuantityAtom } from '../../recoil/Quantity';

interface QuantityType {
  idx: number;
}

const QuantityInput = ({ idx }: QuantityType) => {
  const [quantityList, setQuantityList] =
    useRecoilState<number[]>(QuantityAtom);

  const Minus = (num: number) => {
    if (num > 0) {
      num -= 1;

      QuantityHandler(num);
    } else {
      QuantityHandler(0);
    }
  };

  const Plus = (num: number) => {
    num++;

    QuantityHandler(num);
  };

  const QuantityHandler = (value: number) => {
    const copy = [...quantityList];
    copy[idx] = value;
    setQuantityList(copy);
  };

  return (
    <div>
      <Styled_QuantityInput.Button
        onClick={() => {
          Minus(quantityList[idx]);
        }}
      >
        -
      </Styled_QuantityInput.Button>
      <Styled_QuantityInput.Input
        type="number"
        min="1"
        // 숫자 직접 입력시 앞에 0 붙는 현상 방지
        value={quantityList[idx]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          QuantityHandler(Number(e.target.value));
        }}
      />
      <Styled_QuantityInput.Button
        onClick={() => {
          Plus(quantityList[idx]);
        }}
      >
        +
      </Styled_QuantityInput.Button>
    </div>
  );
};

export default QuantityInput;
