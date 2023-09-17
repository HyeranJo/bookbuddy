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
    ${DeviceQuery.desktop`
      width: calc(170px / ${screenScale.desktop});
      height: calc(270px / ${screenScale.desktop});
      gap: calc(2px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(170px / ${screenScale.tablet});
      height: calc(270px / ${screenScale.tablet});
      gap: calc(2px / ${screenScale.tablet});
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
    ${DeviceQuery.desktop`
      width: calc(170px / ${screenScale.desktop});
      height: calc(220px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(170px / ${screenScale.tablet});
      height: calc(220px / ${screenScale.tablet});
    `}
  `,
  img: styled.img`
    width: 140px;
    height: 190px;

    ${DeviceQuery.bigScreen`
      width: calc(140px / ${screenScale.bigScreen});
      height: calc(190px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(140px / ${screenScale.desktop});
      height: calc(190px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(140px / ${screenScale.tablet});
      height: calc(190px / ${screenScale.tablet});
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
    ${DeviceQuery.desktop`
      width: calc(30px / ${screenScale.desktop});
      height: calc(30px / ${screenScale.desktop});
      left: calc(140px / ${screenScale.desktop});
      top: calc(2px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(30px / ${screenScale.tablet});
      height: calc(30px / ${screenScale.tablet});
      left: calc(140px / ${screenScale.tablet});
      top: calc(2px / ${screenScale.tablet});
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
    ${DeviceQuery.desktop`
      width: calc(170px / ${screenScale.desktop});
      height: calc(50px / ${screenScale.desktop});
      margin-top: calc(-30px / ${screenScale.desktop});
      padding-left: calc(5px / ${screenScale.desktop});
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
    `}
     ${DeviceQuery.tablet`
      width: calc(170px / ${screenScale.tablet});
      height: calc(50px / ${screenScale.tablet});
      margin-top: calc(-30px / ${screenScale.tablet});
      padding-left: calc(5px / ${screenScale.tablet});
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
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
    padding-right: 10px;

    ${DeviceQuery.bigScreen`
      width: calc(140px / ${screenScale.bigScreen});
      padding-right: calc(10px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(140px / ${screenScale.desktop});
      padding-right: calc(10px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(140px / ${screenScale.tablet});
      padding-right: calc(10px / ${screenScale.tablet});
    `}
  `,
  price: styled.p`
    width: 140px;

    ${DeviceQuery.bigScreen`
      width: calc(140px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(140px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(140px / ${screenScale.tablet});
    `}
  `,
};

export default Styled_Book;
