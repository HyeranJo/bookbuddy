import { styled } from 'styled-components';

export const Styled_Sidebar = {
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

    font-size: var(--basic-font-size);
    text-align: center;
    gap: 13px;
    padding-top: 22px;
    cursor: pointer;
  `,
};
