import React from 'react';
import { Styled_InfoNav } from './InfoNav.style';

const InfoNav = () => {
  return (
    <div>
      <Styled_InfoNav.Div>
        <Styled_InfoNav.Span>마이페이지</Styled_InfoNav.Span>
        <Styled_InfoNav.Span>장바구니</Styled_InfoNav.Span>
        <Styled_InfoNav.Span>로그아웃</Styled_InfoNav.Span>
      </Styled_InfoNav.Div>
    </div>
  );
};

export default InfoNav;
