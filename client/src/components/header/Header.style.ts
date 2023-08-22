import { styled } from 'styled-components';

export const Styled_Header = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index: 100;
  `,
  Div: styled.div`
    display: flex;
    width: 1512px;
    height: 133px;
    background-color: white;

    align-items: center;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
  `,
  Menu: styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    /* &:hover > .myinfo {
      & > div {
        display: block;
      }
    } */
  `,
  Span: styled.span`
    cursor: pointer;

    &:hover > div {
      display: block;
    }
  `,
  Info: styled.div`
    display: none;

    z-index: 100;
    position: absolute;
    top: 50px;
    right: 85px;

    width: 150px;
    padding-top: 50px;
  `,
};
