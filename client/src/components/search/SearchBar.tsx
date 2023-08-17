import React from 'react';
import { Styled_SearchBar } from './SearchBar.style';
import Search from '../../icons/Search';

const SearchBar = () => {
  return (
    <div>
      <label>
        <Styled_SearchBar.Input />
        <Styled_SearchBar.SearchDiv>
          <Search />
        </Styled_SearchBar.SearchDiv>
      </label>
    </div>
  );
};

export default SearchBar;
