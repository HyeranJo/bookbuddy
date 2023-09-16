import { useEffect, useState } from 'react';
import { Styled_List } from './List.style';
import BookSidebar from '../../components/sidebar/BookSidebar';
import Book from '../../components/book/Book';
import { BookList } from '../../model/BookList';
import Loading from '../../components/loading/Loading';
import { getBookList } from '../../api/GetApi';
import { useRecoilValue } from 'recoil';
import { PageAtom, SidebarIdAtom } from '../../recoil/Sidebars';
import PaginationBox from '../../components/pagination_box/PaginationBox';
import category from '../../constants/SidebarCategory';
import { Styled_Layout } from '../BlankPageLayout';

const List = () => {
  const [listData, setListData] = useState<BookList>();
  const [isLoading, setIsLoading] = useState(false);
  const sidebarId = useRecoilValue(SidebarIdAtom);
  const page = useRecoilValue(PageAtom);
  const size = 20;

  useEffect(() => {
    getBookList({ setListData, setIsLoading, sidebarId, page, size });
  }, [page, sidebarId]);

  const sortHandler = (order: 'name' | 'price' | 'bookmark') => {
    getBookList({ setListData, setIsLoading, sidebarId, page, size }, order);
  };

  return (
    <Styled_List.Container>
      <Styled_List.Div>
        <BookSidebar />
        <Styled_List.Content>
          <Styled_List.Title>
            <Styled_List.H1>
              {Object.keys(category)[sidebarId - 1]}
            </Styled_List.H1>
            <ul>
              <Styled_List.SortList>
                <button
                  onClick={() => {
                    sortHandler('bookmark');
                  }}
                >
                  인기순
                </button>
              </Styled_List.SortList>
              <Styled_List.SortList>
                <button
                  onClick={() => {
                    sortHandler('name');
                  }}
                >
                  이름순
                </button>
              </Styled_List.SortList>
              <Styled_List.SortList>
                <button
                  onClick={() => {
                    sortHandler('price');
                  }}
                >
                  가격낮은순
                </button>
              </Styled_List.SortList>
            </ul>
          </Styled_List.Title>
          <Styled_List.BookGroup>
            <Styled_List.Books>
              {isLoading ? (
                <Loading />
              ) : (
                listData &&
                listData.data.map(v => {
                  return (
                    <Book
                      key={v.id}
                      id={v.id}
                      name={v.name}
                      price={v.price}
                      image={v.imgSrc}
                      bookmark={v.bookmark}
                    />
                  );
                })
              )}
            </Styled_List.Books>
          </Styled_List.BookGroup>
          <div className="pagination">
            {listData && (
              <PaginationBox
                itemsCountPerPage={20}
                totalItemsCount={listData.pageInfo.totalElements}
              />
            )}
          </div>
        </Styled_List.Content>
      </Styled_List.Div>
    </Styled_List.Container>
  );
};

export default List;
