import React from 'react';
import { Styled_InfoNav } from './InfoNav.style';
import { Link, useNavigate } from 'react-router-dom';
import { removeCookie } from '../../utils/ReactCookie';
import { getLogout } from '../../api/GetApi';

const InfoNav = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    getLogout();
    removeCookie('accessToken', { path: '/' });
    removeCookie('refreshToken', { path: '/' });
    removeCookie('userInfo', { path: '/' });

    alert('[로그아웃 성공] 로그아웃 되었습니다');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <Styled_InfoNav.Div>
        <Link
          to={'/mypage'}
          style={{ textDecorationLine: 'none', color: 'black' }}
        >
          <Styled_InfoNav.Span>마이페이지</Styled_InfoNav.Span>
        </Link>
        <Link
          to={'/cart'}
          style={{ textDecorationLine: 'none', color: 'black' }}
        >
          <Styled_InfoNav.Span>장바구니</Styled_InfoNav.Span>
        </Link>
        <Link to={'/'} style={{ textDecorationLine: 'none', color: 'black' }}>
          <Styled_InfoNav.Span onClick={logoutHandler}>
            로그아웃
          </Styled_InfoNav.Span>
        </Link>
      </Styled_InfoNav.Div>
    </>
  );
};

export default InfoNav;
