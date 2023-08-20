import React from 'react';
import { Styled_Header } from './Header.style';
import Logo from '../../icons/Logo';
import SearchBar from '../search/SearchBar';

const Header = () => {
  return (
    <Styled_Header.Div>
      <Logo />
      <Styled_Header.Menu>
        <SearchBar />
        <Styled_Header.Span>나의정보</Styled_Header.Span>
        <Styled_Header.Span>고객센터</Styled_Header.Span>
      </Styled_Header.Menu>
    </Styled_Header.Div>
  );
};

export default Header;
