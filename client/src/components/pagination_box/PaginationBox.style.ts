import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_PaginationBox = {
  Div: styled.div`
    & > .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      gap: 30px;
      margin: 100px 0px 200px 0px;

      ${DeviceQuery.bigScreen`
        gap: calc(30px / ${screenScale.bigScreen});
        mergin: calc(100px / ${screenScale.bigScreen}) 0px calc(200px / ${screenScale.bigScreen}) 0px ;
      `}

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
            font-size: var(--third-title-font-size);

            ${DeviceQuery.bigScreen`
              font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
            `}
          }
        }

        a {
          text-decoration: none;
          color: black;
          font-size: var(--third-title-font-size);

          ${DeviceQuery.bigScreen`
            font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
          `}
        }
      }
    }
  `,
};
