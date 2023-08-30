import React, { useEffect, useState } from 'react';
import { Styled_List } from './List.style';
import BookSidebar from '../../components/sidebar/BookSidebar';
import Book from '../../components/book/Book';
import { BookList } from '../../model/BookList';
import Loading from '../../components/loading/Loading';
import { getBookList } from '../../api/GetApi';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { PageAtom, SidebarIdAtom } from '../../recoil/BookList';
import PaginationBox from '../../components/pagination_box/PaginationBox';
import { getCookie } from '../../utils/cookie';
// import { FinalPaymentDetailsAtom } from '../../recoil/CartItem';
import { BookInfo } from '../../recoil/Book';
import { bookdetail } from '../../model/Bookdetail';

const List = () => {
  const [listData, setListData] = useState<BookList[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const sidebarIdAtom = useRecoilValue(SidebarIdAtom);
  const page = useRecoilValue(PageAtom);
  const userInfo = getCookie('userInfo');
  // const Final = useRecoilValue(FinalPaymentDetailsAtom);
  // console.log(Final);
  const [bookDetail, setBookDetail] = useRecoilState<bookdetail>(BookInfo);

  useEffect(() => {
    getBookList({ setListData, setIsLoading, sidebarIdAtom, page });
  }, [page]);

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
    console.log('id');
  };

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
            </Styled_List.Books>
          </Styled_List.BookGroup>
          <PaginationBox />
        </Styled_List.Content>
      </Styled_List.Div>
    </Styled_List.Container>
  );
};

export default List;
