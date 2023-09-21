import React, { useEffect, useState } from 'react';
import { Styled_History } from './History.style';
import { getOrderHistory } from '../../../api/GetApi';
import { OrderHistoryType } from '../../../model/paymentType';
import { Styled_PaginationBox } from '../../pagination_box/PaginationBox.style';
import Pagination from 'react-js-pagination';

interface FullType {
  message?: string;
  width: number;
  deleteClicked: boolean;
}

const Full = ({ message, width, deleteClicked }: FullType) => {
  const [orderHistory, setOrderHistory] = useState<OrderHistoryType>();
  const [page, setPage] = useState<number>(1);
  const itemsCountPerPage = 5;

  useEffect(() => {
    getOrderHistory(page, itemsCountPerPage).then(data => {
      setOrderHistory(data);
    });
  }, [page, deleteClicked]);

  return (
    <Styled_History.Container width={width}>
      <Styled_History.H1>전체 주문 내역</Styled_History.H1>
      <Styled_History.MessageSpan>{message}</Styled_History.MessageSpan>
      <Styled_History.Table width={width}>
        <thead>
          <tr>
            <Styled_History.Th className="date">주문일자</Styled_History.Th>
            <Styled_History.Th className="number">주문번호</Styled_History.Th>
            <Styled_History.Th className="books">도서</Styled_History.Th>
            <Styled_History.Th className="status">상태</Styled_History.Th>
          </tr>
        </thead>
        <tbody>
          {orderHistory && orderHistory.data.length > 0 ? (
            orderHistory.data.map((v, i) => {
              return (
                <Styled_History.Tr key={i}>
                  <td>{new Date(v.createdAt).toLocaleDateString()}</td>
                  <td>{v.id}</td>
                  <td>
                    <Styled_History.BookListDiv>
                      {v.orderBooks.map((v, i) => {
                        return <span key={i}>{v.bookName}</span>;
                      })}
                    </Styled_History.BookListDiv>
                  </td>
                  <td>{v.status}</td>
                </Styled_History.Tr>
              );
            })
          ) : (
            <Styled_History.Tr>
              <Styled_History.NoList colSpan={4}>
                <span style={{ color: 'var(--light-border-color)' }}>
                  주문 내역이 없습니다
                </span>
              </Styled_History.NoList>
            </Styled_History.Tr>
          )}
        </tbody>
      </Styled_History.Table>
      <Styled_PaginationBox.Div>
        {orderHistory && (
          <Pagination
            activePage={page}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={orderHistory.pageInfo.totalElements}
            pageRangeDisplayed={5}
            prevPageText={'<'}
            nextPageText={'>'}
            onChange={page => {
              setPage(page);
            }}
          />
        )}
      </Styled_PaginationBox.Div>
    </Styled_History.Container>
  );
};

export default Full;
