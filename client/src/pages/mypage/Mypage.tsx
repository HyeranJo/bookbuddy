import React, { useEffect, useRef, useState } from 'react';
import MypageSidebar from '../../components/sidebar/MypageSidebar';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Mypage } from './Mypage.style';
import Full from '../../components/table/order_history/Full';
import Book from '../../components/book/Book';
import { useRecoilValue } from 'recoil';
import { NavScrollAtom } from '../../recoil/Sidebars';
import { BookMarkList } from '../../model/BookList';
import { getBookmarkmypage } from '../../api/GetApi';
import CSTable from '../../components/table/cs_apply/CSTable';
import { getCookie } from '../../utils/ReactCookie';
import Recent from '../../components/table/order_history/Recent';

const Mypage = () => {
  const bookmarkScrollRef = useRef<HTMLDivElement>(null);
  const navScrollListRef = useRef<any>([]);
  const navScrollIndex = useRecoilValue(NavScrollAtom);
  const [bookmarkList, setBookmarkList] = useState<BookMarkList[]>([]);
  const [userName, setUserName] = useState('');
  const [deleteClicked, setDeleteClicked] = useState(false);

  useEffect(() => {
    getBookmarkmypage(setBookmarkList);
    setUserName(getCookie('userInfo').email.split('@')[0]);
  }, []);

  useEffect(() => {
    // bookmark scroll
    // 현재 스크롤 위치 === scrollRef.current.scrollTop
    // 스크롤 길이 === scrollRef.current.scrollHeight
    if (bookmarkScrollRef.current) {
      bookmarkScrollRef.current.scrollTop =
        bookmarkScrollRef.current.scrollHeight;
    }

    // sidebar scroll
    if (navScrollListRef.current) {
      navScrollListRef.current[navScrollIndex].scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [bookmarkScrollRef, navScrollIndex]);

  return (
    <>
      <Styled_Mypage.Container className="container">
        <Styled_Layout.Div_WithSidebar>
          <MypageSidebar />
          <Styled_Mypage.Content>
            <Styled_Mypage.Title>
              <div
                style={{ scrollMarginTop: '240px' }}
                ref={el => {
                  navScrollListRef.current[0] = el;
                }}
              >
                <Styled_Mypage.H1>{userName}님, 환영합니다</Styled_Mypage.H1>
              </div>
            </Styled_Mypage.Title>

            <Styled_Mypage.Detail className="detail">
              <Recent
                setDeleteClicked={setDeleteClicked}
                deleteClicked={deleteClicked}
                message="주문완료 단계의 내역만 표시됩니다"
                width={1095}
              />
              <div
                style={{ scrollMarginTop: '240px' }}
                ref={el => {
                  navScrollListRef.current[1] = el;
                }}
              >
                <Full deleteClicked={deleteClicked} width={1095} />
              </div>
              <div
                style={{ scrollMarginTop: '240px' }}
                ref={el => {
                  navScrollListRef.current[2] = el;
                }}
              >
                <CSTable
                  title="1:1 문의 내역"
                  width={1095}
                  setDeleteClicked={setDeleteClicked}
                  deleteClicked={deleteClicked}
                />
              </div>

              <Styled_Mypage.BookmarkList>
                <Styled_Mypage.BookmarkTitle
                  style={{ scrollMarginTop: '240px' }}
                  ref={el => {
                    navScrollListRef.current[3] = el;
                  }}
                >
                  <Styled_Mypage.H2 className="bookmarklist">
                    북마크 리스트
                  </Styled_Mypage.H2>
                </Styled_Mypage.BookmarkTitle>
                <Styled_Mypage.Books ref={bookmarkScrollRef} className="books">
                  {bookmarkList
                    .map((v: BookMarkList) => {
                      return (
                        <Styled_Mypage.Book key={v.id}>
                          <Book
                            key={v.book.id}
                            id={v.book.id}
                            name={v.book.name}
                            price={v.book.price}
                            image={v.book.imgSrc}
                            bookmark={true}
                          />
                        </Styled_Mypage.Book>
                      );
                    })
                    .reverse()}
                </Styled_Mypage.Books>
              </Styled_Mypage.BookmarkList>
            </Styled_Mypage.Detail>
          </Styled_Mypage.Content>
        </Styled_Layout.Div_WithSidebar>
      </Styled_Mypage.Container>
    </>
  );
};

export default Mypage;
