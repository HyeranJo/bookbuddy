import { styled } from 'styled-components';

export const Styled_Order = {
  Div: styled.div`
    display: flex;
    justify-content: center;
    width: 1300px;
  `,
  Content: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-top: 44px;

    & > .submit {
      display: flex;
      justify-content: end;
      margin-top: 25px;
    }

    & > .emptyItem {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - (344px * 2));
      font-size: var(--third-title-font-size);
    }
  `,
};
