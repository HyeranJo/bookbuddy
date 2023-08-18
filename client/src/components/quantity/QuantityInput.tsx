import React, { useState } from 'react';
import { Styled_QuantityInput } from './QuantityInput.style';
import { useRecoilState } from 'recoil';
import { QuantityAtom } from '../../recoil/Quantity';

const QuantityInput = () => {
  const [n, setN] = useState(1);
  const [Num, SetNum] = useRecoilState(QuantityAtom);

  const Minus = (num: number) => {
    if (num > 0) {
      setN(num - 1);
      SetNum(num - 1);
    } else {
      setN(0);
      SetNum(0);
    }
  };

  const Plus = (num: number) => {
    setN(num + 1);
    SetNum(num + 1);
  };

  return (
    <div>
      <Styled_QuantityInput.Button
        onClick={() => {
          Minus(n);
        }}
      >
        -
      </Styled_QuantityInput.Button>
      <Styled_QuantityInput.Input
        type="number"
        min="1"
        defaultValue={`${n}`}
        value={`${n}`}
        onChange={e => {
          setN(Number(e.target.value));
        }}
      />
      <Styled_QuantityInput.Button
        onClick={() => {
          Plus(n);
        }}
      >
        +
      </Styled_QuantityInput.Button>
    </div>
  );
};

export default QuantityInput;
