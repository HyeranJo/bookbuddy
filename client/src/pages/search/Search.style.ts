import { styled } from 'styled-components';

const Styled_Search = {
  Container: styled.div`
    display: flex;
    justify-content: center;
  `,
  Main: styled.main`
    width: 1512px;
    display: flex;
  `,
  SearchbarWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
  `,
  Section: styled.section`
    width: 1312px;
    margin-left: 200px;
    padding-left: 53.5px;
    padding-right: 53.5px;
    padding-top: 44px;
  `,
  Title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  `,
  H1: styled.h1`
    font-size: var(--title-font-size);
    display: inline-block;
  `,
  BookGroup: styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0 37px;
  `,
  Books: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
  `,
  Msg: styled.div`
    font-size: var(--third-title-font-size);
    color: var(--light-border-color);
    position: absolute;
    top: 55%;
    left: 55%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  `,
};
export default Styled_Search;
