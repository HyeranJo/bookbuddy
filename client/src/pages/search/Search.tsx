import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import BookSidebar from '../../components/sidebar/BookSidebar';
import Book from '../../components/book/Book';
import { BookList } from '../../model/BookList';
import Loading from '../../components/loading/Loading';
// import { getBookList } from '../../api/BookList';
import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { PageAtom, SidebarIdAtom } from '../../recoil/BookList';
// import { getCookie } from '../../utils/cookie';
import { BookInfo } from '../../recoil/Book';
import { bookdetail } from '../../model/Bookdetail';
import SearchBar from '../../components/search/SearchBar';

const Search = () => {
  const [listData, setListData] = useState<BookList[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const sidebarIdAtom = useRecoilValue(SidebarIdAtom);
  // const page = useRecoilValue(PageAtom);
  // const userInfo = getCookie('userInfo');
  const setBookDetail = useSetRecoilState<bookdetail>(BookInfo);

  // useEffect(() => {
  //   getBookList({ setListData, setIsLoading, sidebarIdAtom, page });
  // }, [page]);

  const updateBookState = (
    id: string,
    name: string,
    price: number,
    imgSrc: string,
    author: string,
    publisher: string,
    date: string,
  ) => {
    setBookDetail({
      id: id,
      name: name,
      price: price,
      imgSrc: imgSrc,
      author: author,
      publisher: publisher,
      date: date,
    });
  };

  return (
    <Styled_Search.Container>
      <Styled_Search.Main>
        <BookSidebar />
        <Styled_Search.Section>
          <SearchBar iconSize={30} width={530} />
          <Styled_Search.Title>
            <Styled_Search.H1>검색결과</Styled_Search.H1>
          </Styled_Search.Title>
          <Styled_Search.BookGroup>
            <Styled_Search.Books>
              {isLoading ? (
                <Loading />
              ) : (
                listData &&
                listData.map((v: BookList, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        updateBookState(
                          v.id,
                          v.name,
                          v.price,
                          v.imgSrc,
                          v.author,
                          v.publisher,
                          v.date,
                        );
                      }}
                    >
                      <Book
                        key={i}
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
