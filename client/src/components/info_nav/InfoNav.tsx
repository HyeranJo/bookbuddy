import React from 'react';
import { Styled_InfoNav } from './InfoNav.style';
import { Link } from 'react-router-dom';

const InfoNav = () => {
  return (
    <div>
      <Styled_InfoNav.Div>
        <Link to={'/list'} style={{ textDecorationLine: 'none' }}>
          <Styled_InfoNav.Span>마이페이지</Styled_InfoNav.Span>
        </Link>
        <Link to={'/order'} style={{ textDecorationLine: 'none' }}>
          <Styled_InfoNav.Span>장바구니</Styled_InfoNav.Span>
        </Link>
        <Styled_InfoNav.Span>로그아웃</Styled_InfoNav.Span>
      </Styled_InfoNav.Div>
    </div>
  );
};

export default InfoNav;
