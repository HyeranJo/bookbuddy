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
    margin-top: 60px;
    margin-bottom: 30px;
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
  SortList: styled.li`
    list-style: none;
    float: left;

    &::after {
      content: '|';
      float: right;
      color: gray;
      padding: 0px 10px;
    }
    &:last-child::after {
      content: '';
      padding: 0px;
    }
  `,
  BookGroup: styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0 37px;
  `,
  Books: styled.div`
    display: flex;
    flex-wrap: wrap;

    /* gap: 36px; */
    gap: 70px;
  `,
};
export default Styled_Search;
