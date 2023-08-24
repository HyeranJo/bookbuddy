import { styled } from 'styled-components';
import BookSidebar from '../../components/sidebar/BookSidebar';
import { Styled_Layout } from '../BlankPageLayout';
import image from '../.././images/나의 라임 오렌지나무.jpg';
import RedButton from '../../components/buttons/RedButton';
import { ReactComponent as Bookmark } from '../../icons/icon.svg';
import { useState } from 'react';

interface BookProps {
  image?: string;
  title?: string;
  price?: number;
  author?: string;
  publicher?: string;
  date?: string;
  quantity?: number;
  deliveryFee?: number;
}

const Bookdetail = (props: BookProps) => {
  const [isClick, setIsClick] = useState(false);

  function ClickBookmark() {
    setIsClick(isClick => !isClick);
  }
  return (
    <>
      <Styled_Layout.Container>
        <Styled_Bookdetail.Main>
          <BookSidebar />
          <Styled_Bookdetail.Section>
            <Styled_Bookdetail.Container>
              <Styled_Bookdetail.ImageWrapper>
                <Styled_Bookdetail.ImageContainer src={image} />
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
                  <Styled_Bookdetail.Content>
                    {props.price || '11,700'}원
                  </Styled_Bookdetail.Content>
                </Styled_Bookdetail.Topdiv>
                <Styled_Bookdetail.Middiv>
                  <Styled_Bookdetail.Content>
                    저자: {props.author || 'J.M. 바스콘셀루스'}
                  </Styled_Bookdetail.Content>
                  <Styled_Bookdetail.Content>
                    출판사: {props.publicher || '동녁주니어'}원
                  </Styled_Bookdetail.Content>
                  <Styled_Bookdetail.Content>
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
                  </Styled_Bookdetail.TotalPrice>
                </Styled_Bookdetail.Horizontalitydiv>
                <Styled_Bookdetail.Horizontalitydiv>
                  <RedButton name="장바구니 담기" />
                  <RedButton name="바로 결제하기" />
                </Styled_Bookdetail.Horizontalitydiv>
              </Styled_Bookdetail.InfoWrapper>
            </Styled_Bookdetail.Container>
          </Styled_Bookdetail.Section>
        </Styled_Bookdetail.Main>
      </Styled_Layout.Container>
    </>
  );
};

export default Bookdetail;

const Styled_Bookdetail = {
  Main: styled(Styled_Layout.Div_WithSidebar)``,
  Section: styled.section`
    width: 100%;
    /* height: calc(100vh - 260px); */
    margin-left: 200px;
    margin-top: 44px;
  `,
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    gap: 120px;
  `,
  ImageWrapper: styled.div`
    width: 500px;
    height: 600px;
    background-color: var(--light-gray-color);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ImageContainer: styled.img`
    object-fit: contain;
    width: 300px;
  `,
  InfoWrapper: styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
  `,
  icon: styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
  `,
  Title: styled.p`
    font-size: var(--order-book-title-font-size);
  `,
  Content: styled.p`
    font-size: var(--detail-basic-font-size);
  `,
  TotalPrice: styled.p`
    font-size: var(--detail-full-amount-font-size);
    padding-top: 20px;
    padding-bottom: 40px;
  `,
  Topdiv: styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 20px;
  `,
  Middiv: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-bottom: 1px solid #000000;
    padding: 20px 0px;
  `,
  Botdiv: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px 0px;
  `,
  Horizontalitydiv: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};
