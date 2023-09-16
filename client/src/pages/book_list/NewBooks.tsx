import React, { useEffect, useState } from 'react';
import { Styled_List } from './List.style';
import Loading from '../../components/loading/Loading';
import BookSidebar from '../../components/sidebar/BookSidebar';
import Book2 from '../../components/book/Book2';
import { BookList } from '../../model/BookList';
import { useRecoilValue } from 'recoil';
import { PageAtom } from '../../recoil/Sidebars';
import { getBookList } from '../../api/GetApi';

const NewBooks = () => {
  const [listData, setListData] = useState<BookList>();
  const [isLoading, setIsLoading] = useState(false);
  const page = useRecoilValue(PageAtom);
  const size = 5;

  useEffect(() => {
    const order = 'new';
    getBookList({ setListData, setIsLoading, page, size }, order);
  }, []);

  return (
    <Styled_List.Container>
      <Styled_List.Div>
        <BookSidebar />
        <Styled_List.Content>
          <Styled_List.Title>
            <Styled_List.H1>신간</Styled_List.H1>
          </Styled_List.Title>
          <div>
            <div style={{ display: 'flex', gap: '50px', flexFlow: 'column' }}>
              {isLoading ? (
                <Loading />
              ) : (
                listData &&
                listData.data.map(v => {
                  return (
                    <Book2
                      key={v.id}
                      id={v.id}
                      name={v.name}
                      price={v.price}
                      imgSrc={v.imgSrc}
                      bookmark={v.bookmark}
                      publisher={v.publisher}
                      author={v.author}
                      date={v.date}
                    />
                  );
                })
              )}
            </div>
          </div>
        </Styled_List.Content>
      </Styled_List.Div>
    </Styled_List.Container>
  );
};

export default NewBooks;
