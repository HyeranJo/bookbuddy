import React from 'react';
import { Styled_SearchBar } from './SearchBar.style';
import Search from '../../icons/Search';

interface SearchBarProps {
  $iconSize: number;
  width: number;
}

const SearchBar = ({ $iconSize, width }: SearchBarProps) => {
  return (
    <label>
      <Styled_SearchBar.Input width={width} $iconSize={$iconSize} />
      <Styled_SearchBar.SearchDiv $iconSize={$iconSize}>
        <Search $iconSize={$iconSize} />
      </Styled_SearchBar.SearchDiv>
    </label>
  );
};

export default SearchBar;
