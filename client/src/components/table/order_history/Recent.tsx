import React, { useEffect, useState } from 'react';
import { Styled_History } from './History.style';
import PaginationBox from '../../pagination_box/PaginationBox';
import { OrderHistoryType } from '../../../model/paymentType';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { PageAtom } from '../../../recoil/Sidebars';
import { getOrderHistory } from '../../../api/GetApi';
import { IsOpenModalAtom, ModalNameAtom } from '../../../recoil/CS';
import { DeleteOrderDataAtom } from '../../../recoil/Payment';

interface RecentType {
  message?: string;
  deleteClicked: boolean;
  setDeleteClicked: (deleteClicked: boolean) => void;
  width: number;
}

const Recent = ({
  message,
  deleteClicked,
  setDeleteClicked,
  width,
}: RecentType) => {
  const [orderHistory, setOrderHistory] = useState<OrderHistoryType>();
  const page = useRecoilValue(PageAtom);
  const historyFilter =
    orderHistory && orderHistory.data.filter(v => v.status === '주문완료');
  const setDeleteOrderData = useSetRecoilState(DeleteOrderDataAtom);
  const setModalName = useSetRecoilState(ModalNameAtom);
  const setIsOpen = useSetRecoilState(IsOpenModalAtom);

  useEffect(() => {
    getOrderHistory(page).then((data: OrderHistoryType) => {
      setOrderHistory(data);
      setDeleteClicked(false);
    });
  }, [page, deleteClicked]);

  const OrderDeleteHandler = (id: string) => {
    setDeleteOrderData({ orderIds: [id], orderStatus: '취소' });
    setModalName('orderDelete');
    setIsOpen(true);
  };

  return (
    <>
      <Styled_History.Container width={width}>
        <Styled_History.H1>최근 주문 내역</Styled_History.H1>
        <Styled_History.MessageSpan>{message}</Styled_History.MessageSpan>
        <Styled_History.Table width={width}>
          <thead>
            <tr>
              <Styled_History.Th className="date">주문일자</Styled_History.Th>
              <Styled_History.Th className="number">주문번호</Styled_History.Th>
              <Styled_History.Th className="books">도서</Styled_History.Th>
              <Styled_History.Th className="status">상태</Styled_History.Th>
              <Styled_History.Th>취소</Styled_History.Th>
            </tr>
          </thead>
          <tbody>
            {historyFilter && historyFilter.length > 0 ? (
              historyFilter.map((v, i) => {
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
                    <td>
                      <button
                        onClick={() => {
                          OrderDeleteHandler(v.id);
                        }}
                      >
                        취소하기
                      </button>
                    </td>
                  </Styled_History.Tr>
                );
              })
            ) : (
              <Styled_History.Tr>
                <Styled_History.NoList colSpan={5}>
                  <span style={{ color: 'var(--light-border-color)' }}>
                    최근 주문 내역이 없습니다
                  </span>
                </Styled_History.NoList>
              </Styled_History.Tr>
            )}
          </tbody>
        </Styled_History.Table>
        <div className="pagination">
          {historyFilter && (
            <PaginationBox
              itemsCountPerPage={5}
              totalItemsCount={historyFilter.length}
            />
          )}
        </div>
      </Styled_History.Container>
    </>
  );
};

export default Recent;
