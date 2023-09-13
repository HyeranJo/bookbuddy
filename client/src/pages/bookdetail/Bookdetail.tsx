import BookSidebar from '../../components/sidebar/BookSidebar';
import Styled_Bookdetail from './Bookdetail.style';
import RedButton from '../../components/buttons/RedButton';
import { useEffect, useState } from 'react';
import { Infotype } from '../../model/Bookdetail';
import { getBookDetail, getCartList } from '../../api/GetApi';
import { postCartItem, postBookMark } from '../../api/PostApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CartListAtom, QuantityListAtom } from '../../recoil/CartItem';
import BookMarkIcon from '../../icons/BookMarkIcon';
import { AccessTokenAtom } from '../../recoil/UserInfo';
import { removeCookie, setCookie } from '../../utils/cookie';

const BookDetail = () => {
  const bookIdParams = useParams();
  const bookId = bookIdParams.id;
  const [detailInfo, setDetailInfo] = useState<Infotype>();
  const [isClick, setIsClick] = useState(detailInfo?.bookmark);
  const [cartList, setCartList] = useRecoilState(CartListAtom);
  const [quantityList, setQuantityList] = useRecoilState(QuantityListAtom);
  const accessToken = useRecoilValue(AccessTokenAtom);
  const navigate = useNavigate();

  useEffect(() => {
    getBookDetail(setDetailInfo, bookId).then(detailInfoData => {
      setIsClick(detailInfoData.bookmark);
    });

    if (accessToken) {
      getCartList(setCartList);
    }

    // 쿠키 삭제
    // 결제 페이지에서 결제 하지 않고 페이지 이동 후 다시 바로결제 시도시
    // 이전 데이터 남아있는 현상 방지
    removeCookie('PayNow', { path: '/' });
  }, []);

  const date = new Date(detailInfo?.date as string);
  const price = detailInfo?.price as number;
  const formattedPrice = price ? price.toLocaleString() : '';

  const addCartHandler = () => {
    if (accessToken) {
      if (
        cartList.filter(v => {
          return v.book.id === bookId;
        }).length > 0
      ) {
        alert('이미 추가한 상품입니다');
      } else {
        postCartItem(detailInfo);
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
  };

  const payNowHandler = async () => {
    if (accessToken) {
      const cartData = cartList.filter(v => {
        return v.book.id === bookId;
      });

      if (
        // 장바구니에 도서가 없는 경우
        cartData.length === 0
      ) {
        // 도서 데이터 얻어서 쿠키에 저장

        setCookie('PayNow', JSON.stringify(detailInfo), {
          path: '/',
        });

        bookId &&
          setQuantityList([
            ...quantityList,
            {
              id: bookId,
              quantity: 1,
            },
          ]);
      } else {
        // 장바구니에 이미 도서가 있는 경우
        // 장바구니 리스트에서 추출 후 쿠키 저장
        setCookie('PayNow', JSON.stringify(cartData[0]), {
          path: '/',
        });
      }
      navigate('/paynow/ship');
    } else {
      alert('⚠️ 먼저 로그인해 주세요');
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
                    <RedButton name="장바구니 담기" onClick={addCartHandler} />
                    <RedButton name="바로 결제하기" onClick={payNowHandler} />
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
