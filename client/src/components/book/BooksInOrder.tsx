import { Styled_List } from '../../pages/book_list/List.style';
import BookSidebar from '../sidebar/BookSidebar';
import { BookList } from '../../model/BookList';
import Loading from '../../components/loading/Loading';
import Book2 from './Book2';

interface BooksInOrderProps {
  listData?: BookList;
  isLoading: boolean;
  title: string;
}

const BooksInOrder = ({ listData, isLoading, title }: BooksInOrderProps) => {
  return (
    <Styled_List.Container>
      <Styled_List.Div>
        <BookSidebar />
        <Styled_List.Content>
          <Styled_List.Title>
            <Styled_List.H1>{title}</Styled_List.H1>
          </Styled_List.Title>
          <div>
            <div style={{ display: 'flex', gap: '50px', flexFlow: 'column' }}>
              {isLoading ? (
                <Loading />
              ) : (
                listData &&
                listData.data.map((v, i) => {
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
                      elementNumber={i + 1}
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

export default BooksInOrder;
