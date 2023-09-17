import { useEffect, useState } from 'react';
import Styled_Search from './Search.style';
import BookSidebar from '../../components/sidebar/BookSidebar';
import Book from '../../components/book/Book';
import { BookInfo } from '../../model/BookList';
import Loading from '../../components/loading/Loading';
import { getBookSearchList } from '../../api/GetApi';
import { useRecoilValue } from 'recoil';
import SearchBar from '../../components/search/SearchBar';
import { SearchValue } from '../../recoil/SearchValue';

const Search = () => {
  const [listData, setListData] = useState<BookInfo[]>();
  const [isLoading, setIsLoading] = useState(false);
  const InputValue = useRecoilValue(SearchValue);
  console.log(listData);

  useEffect(() => {
    getBookSearchList({ setListData, setIsLoading, InputValue });
  }, [InputValue]);

  return (
    <Styled_Search.Container>
      <Styled_Search.Main>
        <BookSidebar />
        <Styled_Search.Section>
          <Styled_Search.SearchbarWrapper>
            <SearchBar $iconSize={30} width={400} fontSize={25} />
          </Styled_Search.SearchbarWrapper>
          <Styled_Search.Title>
            <Styled_Search.H1>검색결과</Styled_Search.H1>
          </Styled_Search.Title>
          <Styled_Search.Books>
            {isLoading ? (
              <Loading />
            ) : listData && listData.length === 0 ? (
              <Styled_Search.Msg>검색결과를 찾지못했습니다</Styled_Search.Msg>
            ) : (
              listData &&
              listData.map((v: BookInfo) => {
                return (
                  <Book
                    key={v.id}
                    id={v.id}
                    name={v.name}
                    price={v.price}
                    image={v.imgSrc}
                    bookmark={v.bookmark}
                  />
                );
              })
            )}
          </Styled_Search.Books>
        </Styled_Search.Section>
      </Styled_Search.Main>
    </Styled_Search.Container>
  );
};

export default Search;
