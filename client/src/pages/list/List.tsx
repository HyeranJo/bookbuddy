import React from 'react';
import { Styled_List } from './List.style';
import BookSidebar from '../../components/sidebar/BookSidebar';
import Book from '../../components/book/Book';

const List = () => {
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
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
            </Styled_List.Books>
          </Styled_List.BookGroup>
        </Styled_List.Content>
      </Styled_List.Div>
    </Styled_List.Container>
  );
};

export default List;
