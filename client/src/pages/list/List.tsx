import React, { useEffect, useState } from 'react';
import { Styled_List } from './List.style';
import BookSidebar from '../../components/sidebar/BookSidebar';
import Book from '../../components/book/Book';
import { BookList } from '../../model/BookList';
import Loading from '../../components/loading/Loading';
import { getBookList } from '../../api/GetApi';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { PageAtom, SidebarIdAtom } from '../../recoil/BookList';
import PaginationBox from '../../components/pagination_box/PaginationBox';
import { BookId } from '../../recoil/BookId';
import { Infotype } from '../../model/Bookdetail';

const List = () => {
  const [listData, setListData] = useState<BookList[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const sidebarIdAtom = useRecoilValue(SidebarIdAtom);
  const page = useRecoilValue(PageAtom);
  const setBookDetail = useSetRecoilState<Infotype>(BookId);

  useEffect(() => {
    getBookList({ setListData, setIsLoading, sidebarIdAtom, page });
  }, [page]);

  const updateBookState = (id: string) => {
    setBookDetail({
      id: id,
    });
  };

  return (
    <Styled_List.Container>
      <Styled_List.Div>
        <BookSidebar />
        <Styled_List.Content>
          <Styled_List.Title>
            <Styled_List.H1>요리</Styled_List.H1>
            <ul>
              <Styled_List.SortList>인기순</Styled_List.SortList>
              <Styled_List.SortList>가격높은순</Styled_List.SortList>
              <Styled_List.SortList>가격낮은순</Styled_List.SortList>
            </ul>
          </Styled_List.Title>
          <Styled_List.BookGroup>
            <Styled_List.Books>
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
            </Styled_List.Books>
          </Styled_List.BookGroup>
          <PaginationBox />
        </Styled_List.Content>
      </Styled_List.Div>
    </Styled_List.Container>
  );
};

export default List;
