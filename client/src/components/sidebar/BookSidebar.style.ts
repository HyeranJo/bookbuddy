import { styled } from 'styled-components';

export const Styled_Sidebar = {
  Container: styled.div`
    position: fixed;
    top: calc(133px + 58px);
  `,
  Div: styled.div`
    width: 200px;
    height: calc(100vh - 133px - 58px);

    border-right: 2px solid var(--light-gray-color);

    display: flex;
    flex-flow: column;

    font-size: var(--basic-font-size);
    text-align: center;
    gap: 20px;
    padding-top: 44px;
  `,
  Span: styled.button`
    border: 0;
    background-color: white;
    font-size: var(--basic-font-size);
    cursor: pointer;

    &:hover {
      color: var(--primary-background-color);
    }
    &:focus {
      color: var(--primary-background-color);
      font-weight: bold;
    }
  `,
};
