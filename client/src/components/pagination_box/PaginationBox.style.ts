import { styled } from 'styled-components';

export const Styled_PaginationBox = {
  Div: styled.div`
    & > .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      gap: 30px;
      margin: 100px 0px 200px 0px;

      li {
        // .active에 focus 안 주어도 자동 focus됨
        &.disabled:active,
        &.active > a {
          color: red;
          font-weight: bold;
        }

        &:hover > a {
          color: red;
        }

        &:nth-child(1),
        &:nth-child(2),
        &:nth-last-child(1),
        &:nth-last-child(2) {
          a {
            font-size: var(--detail-basic-font-size);
          }
        }

        a {
          text-decoration: none;
          color: black;
          font-size: var(--detail-basic-font-size);
        }
      }
    }
  `,
};
