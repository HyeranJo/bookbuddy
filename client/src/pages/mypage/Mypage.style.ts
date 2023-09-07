import { styled } from 'styled-components';

export const Styled_Mypage = {
  Content: styled.section`
    margin-left: 200px;
    padding-left: 53.5px;
    padding-right: 53.5px;
    padding-top: 22px;
    width: 1512px;
  `,
  Title: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;
  `,
  H1: styled.h1`
    font-size: var(--title-font-size);
    display: inline-block;
  `,
  Point: styled.div`
    width: 1095px;
    padding: 10px 0px;
    font-size: var(--third-title-font-size);
    text-align: end;
  `,
  Detail: styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 100px;
  `,
  BookmarkList: styled.div`
    position: relative;
  `,
  BookmarkTitle: styled.div`
    display: flex;
    justify-content: start;
    width: 1095px;
  `,
  H2: styled.h2`
    font-size: var(--subtitle-font-size);
    display: inline-block;
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
  `,
};
