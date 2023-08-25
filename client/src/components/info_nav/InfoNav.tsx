import React from 'react';
import { Styled_InfoNav } from './InfoNav.style';
import { Link } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';

const InfoNav = () => {
  const userInfo = getCookie('userInfo');

  return (
    <div>
      <Styled_InfoNav.Div>
        <Link
          to={`/mypage/${userInfo?.email}`}
          style={{ textDecorationLine: 'none', color: 'black' }}
        >
          <Styled_InfoNav.Span>마이페이지</Styled_InfoNav.Span>
        </Link>
        <Link
          to={'/order'}
          style={{ textDecorationLine: 'none', color: 'black' }}
        >
          <Styled_InfoNav.Span>장바구니</Styled_InfoNav.Span>
        </Link>
        <Link to={'/'} style={{ textDecorationLine: 'none', color: 'black' }}>
          <Styled_InfoNav.Span>로그아웃</Styled_InfoNav.Span>
        </Link>
      </Styled_InfoNav.Div>
    </div>
  );
};

export default InfoNav;
