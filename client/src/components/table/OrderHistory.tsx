import React, { useEffect, useState } from 'react';
import { Styled_OrderHistory } from './OrderHistory.style';
import { getOrderHistory } from '../../api/GetApi';
import { OrderHistoryType } from '../../model/paymentType';
import PaginationBox from '../pagination_box/PaginationBox';
import { useRecoilValue } from 'recoil';
import { PageAtom } from '../../recoil/Sidebars';

interface CategoryProps {
  title: string;
  cancel?: boolean;
  message?: string;
}

const OrderHistory = ({ cancel, title, message }: CategoryProps) => {
  const [orderHistory, setOrderHistory] = useState<OrderHistoryType>();
  const page = useRecoilValue(PageAtom);

  useEffect(() => {
    getOrderHistory(page).then(data => {
      setOrderHistory(data);
    });
  }, [page]);

  return (
    <Styled_OrderHistory.Container>
      <Styled_OrderHistory.H1>{title}</Styled_OrderHistory.H1>
      <Styled_OrderHistory.MessageSpan>
        {message}
      </Styled_OrderHistory.MessageSpan>
      <Styled_OrderHistory.Table>
        <thead>
          <tr>
            <Styled_OrderHistory.Th className="date">
              주문일자
            </Styled_OrderHistory.Th>
            <Styled_OrderHistory.Th className="number">
              주문번호
            </Styled_OrderHistory.Th>
            <Styled_OrderHistory.Th className="books">
              도서
            </Styled_OrderHistory.Th>
            <Styled_OrderHistory.Th className="status">
              상태
            </Styled_OrderHistory.Th>
            <Styled_OrderHistory.Th>
              {cancel && cancel ? '취소' : null}
            </Styled_OrderHistory.Th>
          </tr>
        </thead>
        <tbody>
          {orderHistory && orderHistory.data.length > 0 ? (
            orderHistory.data.map((v, i) => {
              return (
                <Styled_OrderHistory.Tr key={i}>
                  <td>{new Date(v.createdAt).toLocaleDateString()}</td>
                  <td>{v.id}</td>
                  <td>
                    <Styled_OrderHistory.BookListDiv>
                      {v.orderBooks.map((v, i) => {
                        return <span key={i}>{v.bookName}</span>;
                      })}
                    </Styled_OrderHistory.BookListDiv>
                  </td>
                  <td>배송준비중</td>
                  <td>{cancel && cancel ? '상품취소' : null}</td>
                </Styled_OrderHistory.Tr>
              );
            })
          ) : (
            <Styled_OrderHistory.Tr>
              <td>주문 내역이 없습니다</td>
            </Styled_OrderHistory.Tr>
          )}
        </tbody>
      </Styled_OrderHistory.Table>
      <div className="pagination">
        {orderHistory && (
          <PaginationBox
            itemsCountPerPage={5}
            totalItemsCount={orderHistory.pageInfo.totalElements}
          />
        )}
      </div>
    </Styled_OrderHistory.Container>
  );
};

export default OrderHistory;
