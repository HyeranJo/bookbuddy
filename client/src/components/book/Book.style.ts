import styled from 'styled-components';

const Styled_Book = {
  container: styled.div`
    width: 170px;
    height: 270px;
    display: flex;
    flex-direction: column;
  `,
  wrapper: styled.div`
    width: 170px;
    height: 220px;
    background-color: #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    cursor: pointer;
  `,
  img: styled.img`
    width: 140px;
    height: 190px;
  `,
  icon: styled.div`
    width: 30px;
    height: 30px;
    left: 140px;
    position: relative;
    cursor: pointer;
  `,
  content: styled.div`
    width: 170px;
    height: 50px;
    margin-top: -30px;
    padding-left: 5px;
  `,
  name: styled.p`
    width: 120px;
    //넓이를 지정해주지 않았다면 inline값은 너비를 가질 수 없어서 필요
    /* display: block; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  `,
  price: styled.p`
    width: 120px;
  `,
};

export default Styled_Book;
