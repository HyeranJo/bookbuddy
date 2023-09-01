import React, { useState } from 'react';
import { Styled_SearchBar } from './SearchBar.style';
import Search from '../../icons/Search';
import { SearchValue } from '../../recoil/SearchValue';
import { useSetRecoilState } from 'recoil';

interface SearchBarProps {
  iconSize: number;
  width: number;
  fontSize: number;
}

const SearchBar = ({ iconSize, width, fontSize }: SearchBarProps) => {
  const setInputValue = useSetRecoilState(SearchValue);
  const [inputText, setInputText] = useState('');

  const handleOnClick = () => {
    setInputValue(inputText);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <label>
      <Styled_SearchBar.Input
        width={width}
        iconSize={iconSize}
        fontSize={fontSize}
        value={inputText}
        onChange={handleInputChange}
      />
      <Styled_SearchBar.SearchDiv iconSize={iconSize} onClick={handleOnClick}>
        <Search iconSize={iconSize} />
      </Styled_SearchBar.SearchDiv>
    </label>
  );
};

export default SearchBar;
