import { styled } from 'styled-components';

export const Styled_List = {
  Container: styled.div`
    display: flex;
    justify-content: center;
  `,
  Div: styled.div`
    width: 1512px;
    display: flex;
  `,
  Content: styled.section`
    margin-left: 200px;
    padding-left: 53.5px;
    padding-right: 53.5px;
    padding-top: 22px;
  `,
  Title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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
    justify-content: center;
  `,
  Books: styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 36px;
  `,
};
