import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Mypage = {
  Content: styled.section`
    margin-left: 200px;
    padding-left: 53.5px;
    padding-right: 53.5px;
    padding-top: 22px;
    width: 1512px;

    ${DeviceQuery.bigScreen`
      width: calc(1512px / ${screenScale.bigScreen});
      margin-left: calc(200px / ${screenScale.bigScreen});
      padding-left: calc(53.5px / ${screenScale.bigScreen});
      padding-right: calc(53.5px / ${screenScale.bigScreen});
      padding-top: calc(22px / ${screenScale.bigScreen});
    `}
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
  `,
  H1: styled.h1`
    font-size: var(--title-font-size);
    display: inline-block;

    ${DeviceQuery.bigScreen`
      font-size:calc(var(--title-font-size) / ${screenScale.bigScreen});
    `}
  `,
  Point: styled.div`
    width: 1095px;
    padding: 10px 0px;
    font-size: var(--third-title-font-size);
    text-align: end;

    ${DeviceQuery.bigScreen`
      width: calc(1095px / ${screenScale.bigScreen});
      padding: calc(10px / ${screenScale.bigScreen}) 0;
      font-size:calc(var(--third-title-font-size) / ${screenScale.bigScreen});
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
  `,
  BookmarkList: styled.div`
    position: relative;
  `,
  BookmarkTitle: styled.div`
    display: flex;
    justify-content: start;
    width: 1095px;

    ${DeviceQuery.bigScreen`
      width: calc(1095px / ${screenScale.bigScreen});
    `}
  `,
  H2: styled.h2`
    font-size: var(--subtitle-font-size);
    display: inline-block;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
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

    ${DeviceQuery.bigScreen`
      height: calc(1095px / ${screenScale.bigScreen});
      width: calc(350px / ${screenScale.bigScreen});
      top: calc(-325px / ${screenScale.bigScreen});
      right: calc(370px / ${screenScale.bigScreen});
    `}

    // 스크롤바 숨기기
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `,
  Book: styled.div`
    transform: rotate(-90deg);
    height: 206px;
    width: 270px;

    ${DeviceQuery.bigScreen`
      height: calc(206px / ${screenScale.bigScreen});
      width: calc(270px / ${screenScale.bigScreen});
    `}
  `,
};
