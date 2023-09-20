import { styled } from 'styled-components';
import { Styled_Layout } from '../BlankPageLayout';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const Styled_Bookdetail = {
  Main: styled(Styled_Layout.Container)``,
  Section: styled(Styled_Layout.Div_WithSidebar)``,
  Wrapper: styled.section`
    width: 100%;
    /* height: calc(100vh - 260px); */
    margin-left: 215px;
    margin-top: 44px;
    width: 1297px;

    ${DeviceQuery.bigScreen`
      margin-left: calc(215px / ${screenScale.bigScreen});
      margin-top: calc(44px / ${screenScale.bigScreen});
      width: calc(1297px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-left: calc(215px / ${screenScale.desktop});
      margin-top: calc(44px / ${screenScale.desktop});
      width: calc(1297px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      margin-left: calc(215px / ${screenScale.tablet});
      margin-top: calc(44px / ${screenScale.tablet});
      width: calc(1297px / ${screenScale.tablet});
    `}
  `,
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 120px;

    ${DeviceQuery.bigScreen` 
      gap: calc(120px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      gap: calc(120px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      gap: calc(120px / ${screenScale.tablet});
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
    ${DeviceQuery.tablet`
      width: calc(500px / ${screenScale.tablet});
      height: calc(600px / ${screenScale.tablet});
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
    ${DeviceQuery.tablet`
      width: calc(300px / ${screenScale.tablet});
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
    ${DeviceQuery.tablet`
      width: calc(400px / ${screenScale.tablet});
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
    ${DeviceQuery.tablet`
      width: calc(50px / ${screenScale.tablet});
      height: calc(50px / ${screenScale.tablet});
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
    ${DeviceQuery.tablet`
      font-size: calc(var(--subtitle-font-size) / ${screenScale.tablet});
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
    ${DeviceQuery.tablet`
      font-size: calc(var(--third-title-font-size) / ${screenScale.tablet});
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
    ${DeviceQuery.tablet`
      font-size: calc(var(--subtitle-font-size) / ${screenScale.tablet});
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
   ${DeviceQuery.tablet`
      margin-bottom: calc( 40px / ${screenScale.tablet});
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
    ${DeviceQuery.tablet`
      gap: calc(5px / ${screenScale.tablet});
      padding: calc(30px / ${screenScale.tablet}) 0 ;
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
    ${DeviceQuery.tablet`
      gap: calc(5px / ${screenScale.tablet});
      padding: calc(30px / ${screenScale.tablet}) 0 ;
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
    ${DeviceQuery.tablet`
      padding-top: calc(30px / ${screenScale.tablet}) 0 ;
    `}
  `,
};

export default Styled_Bookdetail;
