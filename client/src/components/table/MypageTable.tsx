import React, { useEffect, useState } from 'react';
import { Styled_MypageTable } from './MypageTable.style';
import { getOrderHistoryList } from '../../api/GetApi';
import { IrderHistoryDataType } from '../../model/paymentType';

interface CategoryProps {
  title: string;
  cancel?: boolean;
  message?: string;
}

const MypageTable = ({ cancel, title, message }: CategoryProps) => {
  const [orderHistoryList, setOrderHistoryList] =
    useState<IrderHistoryDataType[]>();

  useEffect(() => {
    getOrderHistoryList().then(data => setOrderHistoryList(data.data));
  }, []);

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
          {orderHistoryList && orderHistoryList.length > 0 ? (
            orderHistoryList.map((v, i) => {
              return (
                <Styled_MypageTable.Tr key={i}>
                  <td>{new Date(v.createdAt).toLocaleDateString()}</td>
                  <td>{v.id}</td>
                  <td>
                    <Styled_MypageTable.BookListDiv>
                      {v.orderBooks.map((v, i) => {
                        return <span key={i}>{v.bookName}</span>;
                      })}
                    </Styled_MypageTable.BookListDiv>
                  </td>
                  <td>배송준비중</td>
                  <td>{cancel && cancel ? '상품취소' : null}</td>
                </Styled_MypageTable.Tr>
              );
            })
          ) : (
            <Styled_MypageTable.Tr>주문 내역이 없습니다</Styled_MypageTable.Tr>
          )}
        </tbody>
      </Styled_MypageTable.Table>
    </Styled_MypageTable.Container>
  );
};

export default MypageTable;
