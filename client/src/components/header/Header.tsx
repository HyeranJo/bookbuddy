import React from 'react';
import { Styled_Header } from './Header.style';
import Logo from '../../icons/Logo';
import SearchBar from '../search/SearchBar';
import { Link } from 'react-router-dom';
import InfoNav from '../info_nav/InfoNav';
import { getCookie } from '../../utils/cookie';

const Header = () => {
  return (
    <>
      <Styled_Header.Container>
        <Styled_Header.Div>
          <Link to={'/list'}>
            <Logo />
          </Link>
          <Styled_Header.Menu>
            <Link to={'/search'}>
              <SearchBar iconSize={18} width={250} fontSize={20} />
            </Link>
            {getCookie('accessToken') ? (
              <Styled_Header.Span className="myinfo">
                나의정보
                <Styled_Header.Info className="info">
                  <InfoNav />
                </Styled_Header.Info>
              </Styled_Header.Span>
            ) : (
              <Link
                to={'/signin'}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Styled_Header.Span>로그인</Styled_Header.Span>
              </Link>
            )}
            <Link
              to={'/customer'}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Styled_Header.Span>고객센터</Styled_Header.Span>
            </Link>
          </Styled_Header.Menu>
        </Styled_Header.Div>
      </Styled_Header.Container>
    </>
  );
};

export default Header;
