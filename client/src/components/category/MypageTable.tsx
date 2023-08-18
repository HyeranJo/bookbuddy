import React from 'react';
import { Styled_MypageTable } from './MypageTable.style';

interface CategoryProps {
  cancel?: boolean;
}

const MypageTable = ({ cancel }: CategoryProps) => {
  return (
    <Styled_MypageTable.Table>
      <Styled_MypageTable.Th className="date">주문일자</Styled_MypageTable.Th>
      <Styled_MypageTable.Th className="number">주문번호</Styled_MypageTable.Th>
      <Styled_MypageTable.Th className="books">도서</Styled_MypageTable.Th>
      <Styled_MypageTable.Th className="status">상태</Styled_MypageTable.Th>
      <Styled_MypageTable.Tr>
        <td>2023.08.15</td>
        <td>20230815-00000001</td>
        <td>
          <Styled_MypageTable.BookListDiv>
            <span>이방인</span>
            <span>나의 라임 오렌지 나무</span>
            <span>지리의 힘</span>
          </Styled_MypageTable.BookListDiv>
        </td>
        <td>배송완료</td>
        <td>{cancel && cancel ? '취소' : null}</td>
      </Styled_MypageTable.Tr>
    </Styled_MypageTable.Table>
  );
};

export default MypageTable;
