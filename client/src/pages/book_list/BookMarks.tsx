import React, { useEffect, useState } from 'react';
import MypageSidebar from '../../components/sidebar/MypageSidebar';
import { Styled_List } from './List.style';
import { getBookmark } from '../../api/GetApi';
import { BookMarkList } from '../../model/BookList';
import Book from '../../components/book/Book';

const BookMarks = () => {
  const [bookmarkList, setBookmarkList] = useState<BookMarkList[]>([]);

  useEffect(() => {
    getBookmark(setBookmarkList);
  }, []);

  return (
    <Styled_List.Container>
      <Styled_List.Div>
        <MypageSidebar />
        <Styled_List.Content>
          <Styled_List.Title>
            <Styled_List.H1>북마크</Styled_List.H1>
          </Styled_List.Title>
          <Styled_List.BookGroup>
            <Styled_List.Books>
              {bookmarkList
                .map((v: BookMarkList) => {
                  return (
                    <Book
                      key={v.book.id}
                      id={v.book.id}
                      name={v.book.name}
                      price={v.book.price}
                      image={v.book.imgSrc}
                      bookmark={true}
                    />
                  );
                })
                .reverse()}
            </Styled_List.Books>
          </Styled_List.BookGroup>
        </Styled_List.Content>
      </Styled_List.Div>
    </Styled_List.Container>
  );
};

export default BookMarks;
