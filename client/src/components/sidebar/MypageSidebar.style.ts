import { styled } from 'styled-components';

export const Styled_MypageSidebar = {
  Container: styled.div`
    position: fixed;
    top: calc(133px + 58px);
  `,
  Div: styled.div`
    width: 200px;
    height: calc(100vh - 133px - 58px);

    border-right: 1px solid var(--primary-background-color);

    display: flex;
    flex-flow: column;
  `,
  TitleDiv: styled.div`
    font-size: var(--basic-font-size);
    font-weight: bold;
    text-align: center;
    gap: 40px;
    padding-top: 55px;
    cursor: pointer;

    &::after {
      content: '';
      display: block;
      width: 120px;
      border-bottom: 1px solid #bcbcbc;
      margin: 40px auto;
    }
  `,
  CategoryDiv: styled.div`
    display: flex;
    flex-flow: column;

    font-size: var(--basic-font-size);
    text-align: center;
    gap: 40px;
    padding-top: 10px;
    cursor: pointer;
  `,
};
