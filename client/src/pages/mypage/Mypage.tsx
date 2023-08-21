import React, { useEffect, useRef } from 'react';
import MypageSidebar from '../../components/sidebar/MypageSidebar';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Mypage } from './Mypage.style';
import MypageTable from '../../components/category/MypageTable';
import Book from '../../components/book/Book';

const Mypage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 현재 스크롤 위치 === scrollRef.current.scrollTop
    // 스크롤 길이 === scrollRef.current.scrollHeight
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });
  return (
    <Styled_Layout.Container>
      <Styled_Layout.Div>
        <MypageSidebar />
        <Styled_Mypage.Content>
          <Styled_Mypage.Title>
            <Styled_Mypage.H1>000님, 환영합니다</Styled_Mypage.H1>
            <Styled_Mypage.Point>포인트 1,000P</Styled_Mypage.Point>
          </Styled_Mypage.Title>

          <Styled_Mypage.Detail className="detail">
            <MypageTable title="배송 정보" cancel={true} />
            <MypageTable title="전체 주문 내역" />
            <MypageTable title="1:1 문의 내역" />

            <Styled_Mypage.BookmarkTitle>
              <Styled_Mypage.H1>북마크 리스트</Styled_Mypage.H1>
            </Styled_Mypage.BookmarkTitle>
            <Styled_Mypage.Books ref={scrollRef} className="books">
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
              <Styled_Mypage.Book>
                <Book />
              </Styled_Mypage.Book>
            </Styled_Mypage.Books>
          </Styled_Mypage.Detail>
        </Styled_Mypage.Content>
      </Styled_Layout.Div>
    </Styled_Layout.Container>
  );
};

export default Mypage;
