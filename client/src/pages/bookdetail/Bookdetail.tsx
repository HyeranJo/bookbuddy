import BookSidebar from '../../components/sidebar/BookSidebar';
import image from '../.././images/나의 라임 오렌지나무.jpg';
import Styled_Bookdetail from './Bookdetail.style';
import RedButton from '../../components/buttons/RedButton';
import { ReactComponent as Bookmark } from '../../icons/icon.svg';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { BookInfo } from '../../recoil/Book';
import axios from 'axios';
import { bookdetail } from '../../model/Bookdetail';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

const Bookdetail = () => {
  const detailInfo = useRecoilValue<bookdetail>(BookInfo);
  console.log(detailInfo);
  // const date = new Date(props.date as string);
  const [isClick, setIsClick] = useState(false);

  const ClickBookmark = () => {
    setIsClick(isClick => !isClick);
  };

  const postBookDetail = async (detailInfo: bookdetail) => {
    try {
      const response = await axios.post(`${SERVER_HOST}`, detailInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = response.data;
      return result;
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <Styled_Bookdetail.Main>
        <Styled_Bookdetail.Section>
          <BookSidebar />
          <Styled_Bookdetail.Wrapper>
            <Styled_Bookdetail.Container>
              <Styled_Bookdetail.ImageWrapper>
                <Styled_Bookdetail.ImageContainer
                  src={detailInfo.imgSrc || image}
                />
              </Styled_Bookdetail.ImageWrapper>
              <Styled_Bookdetail.InfoWrapper>
                <Styled_Bookdetail.Topdiv>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <Styled_Bookdetail.Title>
                      {detailInfo.name || '나의 라임오렌지 나무'}
                    </Styled_Bookdetail.Title>
                    <Styled_Bookdetail.icon onClick={ClickBookmark}>
                      <Bookmark
                        fill={
                          isClick
                            ? 'var(--primary-background-color)'
                            : 'var(--book-background-color)'
                        }
                      />
                    </Styled_Bookdetail.icon>
                  </Styled_Bookdetail.Horizontalitydiv>
                </Styled_Bookdetail.Topdiv>
                <Styled_Bookdetail.Middiv>
                  <Styled_Bookdetail.Content>
                    저자: {detailInfo.author || 'J.M. 바스콘셀루스'}
                  </Styled_Bookdetail.Content>
                  <Styled_Bookdetail.Content>
                    출판사: {detailInfo.publisher || '동녁주니어'}원
                  </Styled_Bookdetail.Content>
                  <Styled_Bookdetail.Content>
                    {/* date.toLocaleDateString() */}
                    발행일: {detailInfo.date || '2012년12월19일'}
                  </Styled_Bookdetail.Content>
                </Styled_Bookdetail.Middiv>
                <Styled_Bookdetail.Botdiv>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <Styled_Bookdetail.Content>
                      도서 금액:
                    </Styled_Bookdetail.Content>
                    <Styled_Bookdetail.Content>
                      {detailInfo.price || '11,700'}원
                    </Styled_Bookdetail.Content>
                  </Styled_Bookdetail.Horizontalitydiv>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <Styled_Bookdetail.Content>
                      배송비:
                    </Styled_Bookdetail.Content>
                    <Styled_Bookdetail.Content>
                      3,000원
                    </Styled_Bookdetail.Content>
                  </Styled_Bookdetail.Horizontalitydiv>
                </Styled_Bookdetail.Botdiv>
                <Styled_Bookdetail.Horizontalitydiv>
                  <Styled_Bookdetail.Content>금액:</Styled_Bookdetail.Content>
                  <Styled_Bookdetail.TotalPrice>
                    {detailInfo.price || '11,700'}원
                  </Styled_Bookdetail.TotalPrice>
                </Styled_Bookdetail.Horizontalitydiv>
                <Styled_Bookdetail.ButtonContainer></Styled_Bookdetail.ButtonContainer>
                <Styled_Bookdetail.Horizontalitydiv>
                  <RedButton
                    name="장바구니 담기"
                    onClick={() => postBookDetail(detailInfo)}
                  />
                  <RedButton name="바로 결제하기" />
                </Styled_Bookdetail.Horizontalitydiv>
              </Styled_Bookdetail.InfoWrapper>
            </Styled_Bookdetail.Container>
          </Styled_Bookdetail.Wrapper>
        </Styled_Bookdetail.Section>
      </Styled_Bookdetail.Main>
    </>
  );
};

export default Bookdetail;
