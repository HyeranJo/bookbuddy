import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Mypage = {
  Container: styled.div`
    display: flex;
    justify-content: center;
  `,

  Content: styled.section`
    margin-left: 215px;
    padding-left: 53.5px;
    padding-right: 53.5px;
    padding-top: 22px;
    width: 1297px;

    ${DeviceQuery.bigScreen`
      width: calc(1297px / ${screenScale.bigScreen});
      margin-left: calc(215px / ${screenScale.bigScreen});
      padding-left: calc(53.5px / ${screenScale.bigScreen});
      padding-right: calc(53.5px / ${screenScale.bigScreen});
      padding-top: calc(22px / ${screenScale.bigScreen});
      height: calc((100% + 350px) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1297px / ${screenScale.desktop});
      margin-left: calc(215px / ${screenScale.desktop});
      padding-left: calc(53.5px / ${screenScale.desktop});
      padding-right: calc(53.5px / ${screenScale.desktop});
      padding-top: calc(22px / ${screenScale.desktop});
      height: calc((100% + 350px) / ${screenScale.desktop});
    `} 
    ${DeviceQuery.tablet`
      width: calc(1297px / ${screenScale.tablet});
      margin-left: calc(215px / ${screenScale.tablet});
      padding-left: calc(53.5px / ${screenScale.tablet});
      padding-right: calc(53.5px / ${screenScale.tablet});
      padding-top: calc(22px / ${screenScale.tablet});
      height: calc((100% + 350px) / ${screenScale.tablet});
    `};
  `,
  Title: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;

    ${DeviceQuery.bigScreen`
      margin: calc(30px / ${screenScale.bigScreen}) 0px;
    `}
    ${DeviceQuery.desktop`
      margin: calc(30px / ${screenScale.desktop}) 0px;
    `}
    ${DeviceQuery.tablet`
      margin: calc(30px / ${screenScale.tablet}) 0px;
    `}
  `,
  H1: styled.h1`
    font-size: var(--title-font-size);
    display: inline-block;
    margin-bottom: 70px;

    ${DeviceQuery.bigScreen`
      font-size:calc(var(--title-font-size) / ${screenScale.bigScreen});
      margin-bottom:calc(70px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size:calc(var(--title-font-size) / ${screenScale.desktop});
      margin-bottom:calc(70px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size:calc(var(--title-font-size) / ${screenScale.tablet});
      margin-bottom:calc(70px / ${screenScale.tablet});
    `}
  `,
  Detail: styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 100px;

    ${DeviceQuery.bigScreen`
      gap: calc(100px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      gap: calc(100px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      gap: calc(100px / ${screenScale.tablet});
    `}
  `,
  BookmarkList: styled.div`
    position: relative;
    height: 380px;

    ${DeviceQuery.bigScreen`
      height: calc(380px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      height: calc(380px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      height: calc(380px / ${screenScale.tablet});
    `}
  `,
  BookmarkTitle: styled.div`
    display: flex;
    justify-content: space-between;
    width: 1095px;

    ${DeviceQuery.bigScreen`
      width: calc(1095px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1095px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1095px / ${screenScale.tablet});
    `}
  `,
  H2: styled.h2`
    font-size: var(--subtitle-font-size);
    display: inline-block;

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
  Books: styled.div`
    height: 1095px;
    width: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    transform: rotate(90deg);
    position: absolute;
    top: -325px;
    right: 370px;
    display: flex;
    flex-direction: column-reverse;
    padding: 50px 0;

    ${DeviceQuery.bigScreen`
      height: calc(1095px / ${screenScale.bigScreen});
      width: calc(350px / ${screenScale.bigScreen});
      top: calc(-325px / ${screenScale.bigScreen});
      right: calc(370px / ${screenScale.bigScreen});
      padding: calc(50px / ${screenScale.bigScreen}) 0;
    `}
    ${DeviceQuery.desktop`
      height: calc(1095px / ${screenScale.desktop});
      width: calc(350px / ${screenScale.desktop});
      top: calc(-325px / ${screenScale.desktop});
      right: calc(370px / ${screenScale.desktop});
      padding: calc(50px / ${screenScale.desktop}) 0;
    `}
    ${DeviceQuery.tablet`
      height: calc(1095px / ${screenScale.tablet});
      width: calc(350px / ${screenScale.tablet});
      top: calc(-325px / ${screenScale.tablet});
      right: calc(370px / ${screenScale.tablet});
      padding: calc(50px / ${screenScale.tablet}) 0;
    `} // 
    
    // 스크롤바 숨기기
    // -ms-overflow-style: none; /* IE and Edge */
    // scrollbar-width: none; /* Firefox */
    // &::-webkit-scrollbar {
    //   display: none; /* Chrome, Safari, Opera*/
    // }
  `,
  Book: styled.div`
    transform: rotate(-90deg);
    height: 206px;
    width: 270px;

    ${DeviceQuery.bigScreen`
      height: calc(206px / ${screenScale.bigScreen});
      width: calc(270px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      height: calc(206px / ${screenScale.desktop});
      width: calc(270px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      height: calc(206px / ${screenScale.tablet});
      width: calc(270px / ${screenScale.tablet});
    `}
  `,
};
