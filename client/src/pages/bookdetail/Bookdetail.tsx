import BookSidebar from '../../components/sidebar/BookSidebar';
import Styled_Bookdetail from './Bookdetail.style';
import RedButton from '../../components/buttons/RedButton';
import { ReactComponent as Bookmark } from '../../icons/icon.svg';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { BookId } from '../../recoil/BookId';
import axios from 'axios';
import { Infotype } from '../../model/Bookdetail';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

const BookDetail = () => {
  const bookId = useRecoilValue<Infotype>(BookId);
  const [detailInfo, setDetailInfo] = useState<Infotype>();
  const [isClick, setIsClick] = useState(false);

  const ClickBookmark = () => {
    setIsClick(isClick => !isClick);
  };

  const getBookDetail = async (setDetailInfo: any, bookId: Infotype) => {
    try {
      const response = await axios.get(`${SERVER_HOST}/book/detail/${bookId}`, {
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': true,
        },
      });
      const result = response.data;
      console.log(result);
      setDetailInfo(result);
      // return result;
    } catch (error) {
      alert(error);
    }
  };

  const date = new Date(detailInfo?.date as string);
  const price = new Date(detailInfo?.price as number);

  useEffect(() => {
    getBookDetail(setDetailInfo, bookId);
  }, [bookId]);

  const postBookDetail = async (bookDetail: any) => {
    const data = { id: bookDetail.id, price: bookDetail.price, quantity: 1 };
    try {
      const response = await axios.post(`${SERVER_HOST}/order`, data, {
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
                <Styled_Bookdetail.ImageContainer src={detailInfo?.imgSrc} />
              </Styled_Bookdetail.ImageWrapper>
              <Styled_Bookdetail.InfoWrapper>
                <Styled_Bookdetail.Topdiv>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <Styled_Bookdetail.Title>
                      {detailInfo?.name}
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
                    저자: {detailInfo?.author}
                  </Styled_Bookdetail.Content>
                  <Styled_Bookdetail.Content>
                    출판사: {detailInfo?.publisher}
                  </Styled_Bookdetail.Content>
                  <Styled_Bookdetail.Content>
                    {/* date.toLocaleDateString() */}
                    발행일: {date.toLocaleDateString()}
                  </Styled_Bookdetail.Content>
                </Styled_Bookdetail.Middiv>
                <Styled_Bookdetail.Botdiv>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <Styled_Bookdetail.Content>
                      배송비:
                    </Styled_Bookdetail.Content>
                    <Styled_Bookdetail.Content>
                      3,000원
                    </Styled_Bookdetail.Content>
                  </Styled_Bookdetail.Horizontalitydiv>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <Styled_Bookdetail.Content className="totalPrice">
                      도서 금액:
                    </Styled_Bookdetail.Content>
                    <Styled_Bookdetail.TotalPrice>
                      {price.toLocaleString()}원
                    </Styled_Bookdetail.TotalPrice>
                  </Styled_Bookdetail.Horizontalitydiv>
                </Styled_Bookdetail.Botdiv>

                <Styled_Bookdetail.ButtonContainer>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <RedButton
                      name="장바구니 담기"
                      onClick={() => {
                        postBookDetail(detailInfo);
                      }}
                    />
                    <RedButton name="바로 결제하기" />
                  </Styled_Bookdetail.Horizontalitydiv>
                </Styled_Bookdetail.ButtonContainer>
              </Styled_Bookdetail.InfoWrapper>
            </Styled_Bookdetail.Container>
          </Styled_Bookdetail.Wrapper>
        </Styled_Bookdetail.Section>
      </Styled_Bookdetail.Main>
    </>
  );
};

export default BookDetail;
