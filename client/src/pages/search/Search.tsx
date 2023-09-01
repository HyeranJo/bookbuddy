import { useEffect, useState } from 'react';
import Styled_Search from './Search.style';
import BookSidebar from '../../components/sidebar/BookSidebar';
import Book from '../../components/book/Book';
import { BookList } from '../../model/BookList';
import Loading from '../../components/loading/Loading';
import { getBookSearchList } from '../../api/GetApi';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { BookId } from '../../recoil/BookId';
import { Infotype } from '../../model/Bookdetail';
import SearchBar from '../../components/search/SearchBar';
import { SearchValue } from '../../recoil/SearchValue';

const Search = () => {
  const [listData, setListData] = useState<BookList[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const setBookId = useSetRecoilState<Infotype>(BookId);
  const InputValue = useRecoilValue(SearchValue);

  useEffect(() => {
    getBookSearchList({ setListData, setIsLoading, InputValue });
  }, [InputValue]);

  const updateBookState = (id: string) => {
    setBookId({
      id: id,
    });
  };

  return (
    <Styled_Search.Container>
      <Styled_Search.Main>
        <BookSidebar />
        <Styled_Search.Section>
          <Styled_Search.SearchbarWrapper>
            <SearchBar iconSize={30} width={400} fontSize={25} />
          </Styled_Search.SearchbarWrapper>
          <Styled_Search.Title>
            <Styled_Search.H1>검색결과</Styled_Search.H1>
          </Styled_Search.Title>
          <Styled_Search.BookGroup>
            <Styled_Search.Books>
              {isLoading ? (
                <Loading />
              ) : (
                listData &&
                listData.map((v: BookList) => {
                  console.log(v?.id);
                  return (
                    <div
                      key={v.id}
                      onClick={() => {
                        updateBookState(v.id);
                      }}
                    >
                      <Book
                        key={v.id}
                        id={v.id}
                        name={v.name}
                        price={v.price}
                        image={v.imgSrc}
                      />
                    </div>
                  );
                })
              )}
            </Styled_Search.Books>
          </Styled_Search.BookGroup>
        </Styled_Search.Section>
      </Styled_Search.Main>
    </Styled_Search.Container>
  );
};

export default Search;
