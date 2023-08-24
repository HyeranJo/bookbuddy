import React from 'react';
import { Styled_Header } from './Header.style';
import Logo from '../../icons/Logo';
import SearchBar from '../search/SearchBar';
import { Link } from 'react-router-dom';
import InfoNav from '../info_nav/InfoNav';

const Header = () => {
  return (
    <>
      <Styled_Header.Container>
        <Styled_Header.Div>
          <Link to={'/list'}>
            <Logo />
          </Link>
          <Styled_Header.Menu>
            <SearchBar $iconSize={18} width={250} />
            <Styled_Header.Span className="myinfo">
              나의정보
              <Styled_Header.Info className="info">
                <InfoNav />
              </Styled_Header.Info>
            </Styled_Header.Span>
            <Styled_Header.Span>고객센터</Styled_Header.Span>
          </Styled_Header.Menu>
        </Styled_Header.Div>
      </Styled_Header.Container>
    </>
  );
};

export default Header;
