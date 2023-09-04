import { styled } from 'styled-components';
import { Styled_Layout } from '../BlankPageLayout';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const Styled_Bookdetail = {
  Main: styled(Styled_Layout.Container)``,
  Section: styled(Styled_Layout.Div_WithSidebar)``,
  Wrapper: styled.section`
    width: 100%;
    /* height: calc(100vh - 260px); */
    margin-left: 200px;
    margin-top: 44px;

    ${DeviceQuery.bigScreen`
      margin-left: calc(200px / ${screenScale.bigScreen});
      margin-top: calc(44px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-left: calc(200px / ${screenScale.desktop});
      margin-top: calc(44px / ${screenScale.desktop});
    `}
  `,
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    gap: 120px;

    ${DeviceQuery.bigScreen`
      margin-left: calc(100px / ${screenScale.bigScreen});
      gap: calc(120px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-left: calc(100px / ${screenScale.desktop});
      gap: calc(120px / ${screenScale.desktop});
    `}
  `,
  ImageWrapper: styled.div`
    width: 500px;
    height: 600px;
    background-color: var(--light-gray-color);
    display: flex;
    justify-content: center;
    align-items: center;

    ${DeviceQuery.bigScreen`
      width: calc(500px / ${screenScale.bigScreen});
      height: calc(600px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(500px / ${screenScale.desktop});
      height: calc(600px / ${screenScale.desktop});
    `}
  `,
  ImageContainer: styled.img`
    object-fit: contain;
    width: 300px;

    ${DeviceQuery.bigScreen`
      width: calc(300px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(300px / ${screenScale.desktop});
    `}
  `,
  InfoWrapper: styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;

    ${DeviceQuery.bigScreen`
      width: calc(400px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(400px / ${screenScale.desktop});
    `}
  `,
  icon: styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;

    ${DeviceQuery.bigScreen`
      width: calc(50px / ${screenScale.bigScreen});
      height: calc(50px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(50px / ${screenScale.desktop});
      height: calc(50px / ${screenScale.desktop});
    `}
  `,
  Title: styled.p`
    font-size: var(--subtitle-font-size);
    font-weight: bold;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--subtitle-font-size) / ${screenScale.desktop});
    `}
  `,
  Content: styled.p`
    font-size: var(--third-title-font-size);

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
    `}
  `,
  TotalPrice: styled.p`
    font-size: var(--subtitle-font-size);
    font-weight: bold;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--subtitle-font-size) / ${screenScale.desktop});
    `}
  `,
  Topdiv: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    ${DeviceQuery.bigScreen`
      margin-bottom: calc( 40px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-bottom: calc( 40px / ${screenScale.desktop});
    `}
  `,
  Middiv: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 30px 0px;

    ${DeviceQuery.bigScreen`
      gap: calc(5px / ${screenScale.bigScreen});
      padding: calc(30px / ${screenScale.bigScreen}) 0 ;
    `}
    ${DeviceQuery.desktop`
      gap: calc(5px / ${screenScale.desktop});
      padding: calc(30px / ${screenScale.desktop}) 0 ;
    `}
  `,
  Botdiv: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-top: 1px solid #000000;
    padding: 30px 0px;

    ${DeviceQuery.bigScreen`
      gap: calc(5px / ${screenScale.bigScreen});
      padding: calc(30px / ${screenScale.bigScreen}) 0 ;
    `}
    ${DeviceQuery.desktop`
      gap: calc(5px / ${screenScale.desktop});
      padding: calc(30px / ${screenScale.desktop}) 0 ;
    `}
  `,
  Horizontalitydiv: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .totalPrice {
      font-weight: bold;
    }
  `,
  ButtonContainer: styled.div`
    padding-top: 30px;

    ${DeviceQuery.bigScreen`
      padding-top: calc(30px / ${screenScale.bigScreen}) 0 ;
    `}
    ${DeviceQuery.desktop`
      padding-top: calc(30px / ${screenScale.desktop}) 0 ;
    `}
  `,
};

export default Styled_Bookdetail;
