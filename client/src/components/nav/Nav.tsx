import React from 'react';
import { Styled_Nav } from './Nav.style';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Styled_Nav.Container>
      <Styled_Nav.Div>
        <Styled_Nav.SpanDiv>
          <Link to={'/list'} style={{ textDecorationLine: 'none' }}>
            <Styled_Nav.Span>도서목록</Styled_Nav.Span>
          </Link>
          <Styled_Nav.Span>신간</Styled_Nav.Span>
          <Styled_Nav.Span>베스트셀러</Styled_Nav.Span>
        </Styled_Nav.SpanDiv>
      </Styled_Nav.Div>
    </Styled_Nav.Container>
  );
};

export default Nav;
