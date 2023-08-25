import React, { useEffect, useState } from 'react';
import { Styled_List } from './List.style';
import BookSidebar from '../../components/sidebar/BookSidebar';
import Book from '../../components/book/Book';
import axios from 'axios';
import { BookList } from '../../model/BookList';
import Loading from '../../components/loading/Loading';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

const List = () => {
  const [listData, setListData] = useState<BookList[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getList = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${SERVER_HOST}/book/list?page=1&size=20`,
          { headers: { 'ngrok-skip-browser-warning': true } },
        );
        const result = await response.data;
        setListData(result);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getList();
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
