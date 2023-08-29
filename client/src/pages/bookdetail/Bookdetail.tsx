import BookSidebar from '../../components/sidebar/BookSidebar';
import image from '../.././images/나의 라임 오렌지나무.jpg';
import Styled_Bookdetail from './Bookdetail.style';
import RedButton from '../../components/buttons/RedButton';
import { ReactComponent as Bookmark } from '../../icons/icon.svg';
import { useState } from 'react';

interface BookProps {
  image?: string;
  title?: string;
  price?: number;
  author?: string;
  publisher?: string;
  date?: string;
  quantity?: number;
  deliveryFee?: number;
}

const Bookdetail = (props: BookProps) => {
  // const date = new Date(props.date as string);
  const [isClick, setIsClick] = useState(false);

  function ClickBookmark() {
    setIsClick(isClick => !isClick);
  }
  return (
    <>
      <Styled_Bookdetail.Main>
        <Styled_Bookdetail.Section>
          <BookSidebar />
          <Styled_Bookdetail.Wrapper>
            <Styled_Bookdetail.Container>
              <Styled_Bookdetail.ImageWrapper>
                <Styled_Bookdetail.ImageContainer src={props.image || image} />
              </Styled_Bookdetail.ImageWrapper>
              <Styled_Bookdetail.InfoWrapper>
                <Styled_Bookdetail.Topdiv>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <Styled_Bookdetail.Title>
                      {props.title || '나의 라임오렌지 나무'}
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
                    저자: {props.author || 'J.M. 바스콘셀루스'}
                  </Styled_Bookdetail.Content>
                  <Styled_Bookdetail.Content>
                    출판사: {props.publisher || '동녁주니어'}원
                  </Styled_Bookdetail.Content>
                  <Styled_Bookdetail.Content>
                    {/* date.toLocaleDateString() */}
                    발행일: {props.date || '2012년12월19일'}
                  </Styled_Bookdetail.Content>
                </Styled_Bookdetail.Middiv>
                <Styled_Bookdetail.Botdiv>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <Styled_Bookdetail.Content>수량:</Styled_Bookdetail.Content>
                    <Styled_Bookdetail.Content>
                      {props.quantity || '1'}개
                    </Styled_Bookdetail.Content>
                  </Styled_Bookdetail.Horizontalitydiv>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <Styled_Bookdetail.Content>
                      도서 금액:
                    </Styled_Bookdetail.Content>
                    <Styled_Bookdetail.Content>
                      {/* props.price.toLocaleString() */}
                      {props.price || '11,700'}원
                    </Styled_Bookdetail.Content>
                  </Styled_Bookdetail.Horizontalitydiv>
                  <Styled_Bookdetail.Horizontalitydiv>
                    <Styled_Bookdetail.Content>
                      배송비:
                    </Styled_Bookdetail.Content>
                    <Styled_Bookdetail.Content>
                      {props.deliveryFee || '3,000'}원
                    </Styled_Bookdetail.Content>
                  </Styled_Bookdetail.Horizontalitydiv>
                </Styled_Bookdetail.Botdiv>
                <Styled_Bookdetail.Horizontalitydiv>
                  <Styled_Bookdetail.Content>
                    전체 금액:
                  </Styled_Bookdetail.Content>
                  <Styled_Bookdetail.TotalPrice>
                    14,700원
                    {/* {props?.price + props?.deliveryFee || '14,700'}원 */}
                  </Styled_Bookdetail.TotalPrice>
                </Styled_Bookdetail.Horizontalitydiv>
                <Styled_Bookdetail.ButtonContainer></Styled_Bookdetail.ButtonContainer>
                <Styled_Bookdetail.Horizontalitydiv>
                  <RedButton name="장바구니 담기" />
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
