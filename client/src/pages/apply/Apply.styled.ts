import { styled } from 'styled-components';

export const Styled_Apply = {
  Container: styled.div`
    display: flex;
    flex-flow: column;
    width: 1300px;
    .header {
      display: flex;
      justify-content: left;
      margin-bottom: 30px;
    }
    .apply_group {
      display: flex;
      flex-flow: column;
      gap: 30px;
      & > div {
        display: flex;
      }
    }
    & input,
    textarea {
      font-size: var(--basic-font-size);
      flex-grow: 1;
    }
    #apply_title {
      height: 50px;
      padding: 0 30px;
    }
    #apply_body {
      height: 400px;
      width: 100%;
      .ql-container {
        height: 360px;
        font-size: var(--basic-font-size);
        border-color: var(--book-background-color);
      }
    }
    & label {
      font-size: var(--third-title-font-size);
      flex-shrink: 0;
      width: 100px;
      padding-top: 10px;
    }
    .submit {
      display: flex;
      justify-content: end;
      margin-top: 42px;
    }
  `,
};
