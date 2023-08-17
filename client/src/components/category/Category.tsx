import React from 'react';
import { Styled_Category } from './Category.style';

interface CategoryProps {
  cancel?: boolean;
}

export const MypageCategory = ({ cancel }: CategoryProps) => {
  return (
    <Styled_Category.Div>
      <Styled_Category.SpanDiv>
        <span>주문일자</span>
        <span>주문번호</span>
        <span>도서</span>
      </Styled_Category.SpanDiv>
      <Styled_Category.SpanDiv>
        <span>상태</span>
        <span>{cancel && cancel ? '취소' : null}</span>
      </Styled_Category.SpanDiv>
    </Styled_Category.Div>
  );
};

export const CartCategory = () => {
  return (
    <Styled_Category.Div>
      <Styled_Category.SpanDiv>
        {/* @todo: 전체선택 구현 */}
        <input type="checkbox" />
        <span>도서</span>
      </Styled_Category.SpanDiv>
      <Styled_Category.SpanDiv>
        <span>수량</span>
        <span>금액</span>
      </Styled_Category.SpanDiv>
    </Styled_Category.Div>
  );
};
