import { styled } from 'styled-components';
import { Styled_Layout } from '../BlankPageLayout';

const Styled_Bookdetail = {
  Main: styled(Styled_Layout.Container)``,
  Section: styled(Styled_Layout.Div_WithSidebar)``,
  Wrapper: styled.section`
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

export default Styled_Bookdetail;