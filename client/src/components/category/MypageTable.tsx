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
      <tr>
        <td>2023.08.15</td>
        <td>20230815-00000001</td>
        <td>이방인</td>
        <td>배송완료</td>
        <td>{cancel && cancel ? '취소' : null}</td>
      </tr>
    </Styled_MypageTable.Table>
  );
};

export default MypageTable;
