import BookSidebar from '../../components/sidebar/BookSidebar';
import Styled_Bookdetail from './Bookdetail.style';
import RedButton from '../../components/buttons/RedButton';
import { useEffect, useState } from 'react';
import { Infotype } from '../../model/Bookdetail';
import { getBookDetail, getOrderList } from '../../api/GetApi';
import { postBookDetail, postBookMark } from '../../api/PostApi';
import { useParams } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';
import { useRecoilState, useRecoilValue } from 'recoil';
import { OrderListAtom, QuantityListAtom } from '../../recoil/CartItem';
import BookMarkIcon from '../../icons/BookMarkIcon';
import { AccessTokenAtom } from '../../recoil/UserInfo';

const BookDetail = () => {
  const bookIdParams = useParams();
  const bookId = bookIdParams.id;
  const [detailInfo, setDetailInfo] = useState<Infotype>();
  const [isClick, setIsClick] = useState(false);
  const [orderList, setOrderList] = useRecoilState(OrderListAtom);
  const [quantityList, setQuantityList] = useRecoilState(QuantityListAtom);
  const accessToken = useRecoilValue(AccessTokenAtom);

  useEffect(() => {
    getBookDetail(setDetailInfo, bookId);
  }, [bookId]);

  useEffect(() => {
    if (detailInfo) {
      setIsClick(detailInfo?.bookmark);
    }
  }, [detailInfo]);

  useEffect(() => {
    if (getCookie('accessToken')) {
      getOrderList(setOrderList);
    }
  }, [orderList]);

  const date = new Date(detailInfo?.date as string);
  const price = detailInfo?.price as number;
  const formattedPrice = price ? price.toLocaleString() : '';

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
                    <Styled_Bookdetail.icon
                      onClick={() => {
                        if (accessToken) {
                          postBookMark(bookId, setIsClick);
                        } else {
                          alert('로그인 후 이용 가능합니다');
                        }
                      }}
                    >
                      <BookMarkIcon
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
                      {formattedPrice}원
                    </Styled_Bookdetail.TotalPrice>
                  </Styled_Bookdetail.Horizontalitydiv>
                </Styled_Bookdetail.Botdiv>
                <Styled_Bookdetail.ButtonContainer>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <RedButton
                      name="장바구니 담기"
                      onClick={() => {
                        if (getCookie('accessToken')) {
                          if (
                            orderList.filter(v => {
                              return v.book.id === bookId;
                            }).length > 0
                          ) {
                            alert('이미 추가한 상품입니다');
                          } else {
                            postBookDetail(detailInfo);
                            bookId &&
                              setQuantityList([
                                ...quantityList,
                                {
                                  id: bookId,
                                  quantity: 1,
                                },
                              ]);
                            alert('상품을 장바구니에 추가했습니다');
                          }
                        } else {
                          alert('⚠️ 먼저 로그인해 주세요');
                        }
                      }}
                    />
                    <RedButton
                      name="바로 결제하기"
                      onClick={() => {
                        if (getCookie('accessToken')) {
                          alert('ok');
                        } else {
                          alert('⚠️ 먼저 로그인해 주세요');
                        }
                      }}
                    />
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
