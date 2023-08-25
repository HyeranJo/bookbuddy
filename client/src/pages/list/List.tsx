import React, { useEffect, useState } from 'react';
import { Styled_List } from './List.style';
import BookSidebar from '../../components/sidebar/BookSidebar';
import Book from '../../components/book/Book';
import { BookList } from '../../model/BookList';
import Loading from '../../components/loading/Loading';
import { getList } from '../../api/BookList';
import { useRecoilValue } from 'recoil';
import { SidebarIdAtom } from '../../recoil/BookList';

const List = () => {
  const [listData, setListData] = useState<BookList[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const sidebarIdAtom = useRecoilValue(SidebarIdAtom);

  useEffect(() => {
    getList({ setListData, setIsLoading, sidebarIdAtom });
  }, []);

  return (
    <Styled_List.Container>
      <Styled_List.Div>
        <BookSidebar />
        <Styled_List.Content>
          <Styled_List.Title>
            <Styled_List.H1>문학</Styled_List.H1>
            <ul>
              <Styled_List.SortList>인기순</Styled_List.SortList>
              <Styled_List.SortList>가격높은순</Styled_List.SortList>
              <Styled_List.SortList>가격낮은순</Styled_List.SortList>
            </ul>
          </Styled_List.Title>
          <Styled_List.BookGroup>
            <Styled_List.Books>
              {isLoading ? <Loading /> : null}
              {listData &&
                listData.map((v: BookList, i) => {
                  return (
                    <Book
                      key={i}
                      name={v.name}
                      price={v.price}
                      image={v.imgSrc}
                    />
                  );
                })}
            </Styled_List.Books>
          </Styled_List.BookGroup>
        </Styled_List.Content>
      </Styled_List.Div>
    </Styled_List.Container>
  );
};

export default List;
