import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
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
  const setBookDetail = useSetRecoilState<Infotype>(BookId);
  const InputValue = useRecoilValue(SearchValue);

  useEffect(() => {
    getBookSearchList({ setListData, setIsLoading, InputValue });
  }, [InputValue]);

  const updateBookState = (id: string) => {
    setBookDetail({
      id: id,
    });
  };

  return (
    <Styled_Search.Container>
      <Styled_Search.Main>
        <BookSidebar />
        <Styled_Search.Section>
          <Styled_Search.SearchbarWrapper>
            <SearchBar iconSize={30} width={530} fontSize={50} />
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

const Styled_Search = {
  Container: styled.div`
    display: flex;
    justify-content: center;
  `,
  Main: styled.main`
    width: 1512px;
    display: flex;
  `,
  SearchbarWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 30px;
  `,
  Section: styled.section`
    width: 1312px;
    margin-left: 200px;
    padding-left: 53.5px;
    padding-right: 53.5px;
    padding-top: 44px;
  `,
  Title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  `,
  H1: styled.h1`
    font-size: var(--title-font-size);
    display: inline-block;
  `,
  SortList: styled.li`
    list-style: none;
    float: left;

    &::after {
      content: '|';
      float: right;
      color: gray;
      padding: 0px 10px;
    }
    &:last-child::after {
      content: '';
      padding: 0px;
    }
  `,
  BookGroup: styled.div`
    display: flex;
    justify-content: center;
    padding: 0 37px;
  `,
  Books: styled.div`
    display: flex;
    flex-wrap: wrap;

    /* gap: 36px; */
    gap: 70px;
  `,
};
