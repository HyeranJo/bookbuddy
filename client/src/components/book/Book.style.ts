import styled from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const Styled_Book = {
  container: styled.div`
    width: 170px;
    height: 270px;
    gap: 2px;
    display: flex;
    flex-direction: column;

    ${DeviceQuery.bigScreen`
      width: calc(170px / ${screenScale.bigScreen});
      height: calc(270px / ${screenScale.bigScreen});
      gap: calc(2px / ${screenScale.bigScreen});
    `}
  `,
  wrapper: styled.div`
    width: 170px;
    height: 220px;
    background-color: var(--book-background-color);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${DeviceQuery.bigScreen`
      width: calc(170px / ${screenScale.bigScreen});
      height: calc(220px / ${screenScale.bigScreen});
    `}
  `,
  img: styled.img`
    width: 140px;
    height: 190px;

    ${DeviceQuery.bigScreen`
      width: calc(140px / ${screenScale.bigScreen});
      height: calc(190px / ${screenScale.bigScreen});
    `}
  `,
  icon: styled.div`
    width: 30px;
    height: 30px;
    left: 140px;
    top: 2px;
    position: relative;
    cursor: pointer;

    ${DeviceQuery.bigScreen`
      width: calc(30px / ${screenScale.bigScreen});
      height: calc(30px / ${screenScale.bigScreen});
      left: calc(140px / ${screenScale.bigScreen});
      top: calc(2px / ${screenScale.bigScreen});
    `}
  `,
  content: styled.div`
    width: 170px;
    height: 50px;
    margin-top: -30px;
    padding-left: 5px;
    font-size: var(--basic-font-size);

    ${DeviceQuery.bigScreen`
      width: calc(170px / ${screenScale.bigScreen});
      height: calc(50px / ${screenScale.bigScreen});
      margin-top: calc(-30px / ${screenScale.bigScreen});
      padding-left: calc(5px / ${screenScale.bigScreen});
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
    `}
  `,
  name: styled.p`
    width: 140px;
    //넓이를 지정해주지 않았다면 inline값은 너비를 가질 수 없어서 필요
    /* display: block; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    ${DeviceQuery.bigScreen`
      width: calc(140px / ${screenScale.bigScreen});
    `}
  `,
  price: styled.p`
    width: 140px;

    ${DeviceQuery.bigScreen`
      width: calc(140px / ${screenScale.bigScreen});
    `}
  `,
};

export default Styled_Book;
