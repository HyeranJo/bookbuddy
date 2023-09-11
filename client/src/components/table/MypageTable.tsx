import React from 'react';
import { Styled_MypageTable } from './MypageTable.style';

interface CategoryProps {
  title: string;
  cancel?: boolean;
  message?: string;
}

const MypageTable = ({ cancel, title, message }: CategoryProps) => {
  return (
    <Styled_MypageTable.Container>
      <Styled_MypageTable.H1>{title}</Styled_MypageTable.H1>
      <Styled_MypageTable.MessageSpan>{message}</Styled_MypageTable.MessageSpan>
      <Styled_MypageTable.Table>
        <thead>
          <tr>
            <Styled_MypageTable.Th className="date">
              주문일자
            </Styled_MypageTable.Th>
            <Styled_MypageTable.Th className="number">
              주문번호
            </Styled_MypageTable.Th>
            <Styled_MypageTable.Th className="books">
              도서
            </Styled_MypageTable.Th>
            <Styled_MypageTable.Th className="status">
              상태
            </Styled_MypageTable.Th>
            <Styled_MypageTable.Th>
              {cancel && cancel ? '취소' : null}
            </Styled_MypageTable.Th>
          </tr>
        </thead>
        <tbody>
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
            <td>{cancel && cancel ? '상품취소' : null}</td>
          </Styled_MypageTable.Tr>
        </tbody>
      </Styled_MypageTable.Table>
    </Styled_MypageTable.Container>
  );
};

export default MypageTable;
