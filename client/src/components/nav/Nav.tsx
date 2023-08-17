import React from 'react';
import { Styled_Nav } from './Nav.style';

const Nav = () => {
  return (
    <Styled_Nav.Div>
      <Styled_Nav.SpanDiv>
        <Styled_Nav.Span>도서목록</Styled_Nav.Span>
        <Styled_Nav.Span>신간</Styled_Nav.Span>
        <Styled_Nav.Span>베스트셀러</Styled_Nav.Span>
      </Styled_Nav.SpanDiv>
    </Styled_Nav.Div>
  );
};

export default Nav;
