import React from 'react';
import { Styled_Nav } from './Nav.style';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Styled_Nav.Container>
      <Styled_Nav.Div>
        <Styled_Nav.SpanDiv>
          <Styled_Nav.Span
            onClick={() => {
              navigate('/');
            }}
          >
            도서목록
          </Styled_Nav.Span>
          <Styled_Nav.Span
            onClick={() => {
              navigate('/new');
            }}
          >
            신간
          </Styled_Nav.Span>
          <Styled_Nav.Span
            onClick={() => {
              navigate('/bestSeller');
            }}
          >
            베스트셀러
          </Styled_Nav.Span>
        </Styled_Nav.SpanDiv>
      </Styled_Nav.Div>
    </Styled_Nav.Container>
  );
};

export default Nav;
