import React, { useEffect, useState } from 'react';
import { Styled_History } from './History.style';
import {
  OrderHistoryType,
  patchOrderStatusType,
} from '../../../model/paymentType';
import { useRecoilState } from 'recoil';
import { getOrderHistory } from '../../../api/GetApi';
import Pagination from 'react-js-pagination';
import { Styled_PaginationBox } from '../../pagination_box/PaginationBox.style';
import YesOrNo from '../../modal/YesOrNo';
import { isYesClickedAtom } from '../../../recoil/Modal';
import { patchOrderStatus } from '../../../api/PatchApi';

interface RecentType {
  message?: string;
  width: number;
  setDeleteClicked: (deleteClicked: boolean) => void;
  deleteClicked: boolean;
}

const Recent = ({
  message,
  width,
  setDeleteClicked,
  deleteClicked,
}: RecentType) => {
  const [filteredOrderHistory, setFilteredOrderHistory] =
    useState<OrderHistoryType>();
  const [deleteOrderData, setDeleteOrderData] =
    useState<patchOrderStatusType>();
  const [page, setPage] = useState<number>(1);
  const itemsCountPerPage = 5;
  const [isYesClicked, setIsYesClicked] = useRecoilState(isYesClickedAtom);
  const [isOpen, setIsOpen] = useState(false);
  const recent = true;

  useEffect(() => {
    getOrderHistory(page, itemsCountPerPage, recent).then(
      (data: OrderHistoryType) => {
        setFilteredOrderHistory(data);
        setDeleteClicked(false);
      },
    );
  }, [page, deleteClicked]);

  useEffect(() => {
    if (isYesClicked === true) {
      deleteOrderData && patchOrderStatus(deleteOrderData);
      setDeleteClicked(true);
      setIsYesClicked(false);
    }
  }, [isYesClicked]);

  const OrderDeleteHandler = (id: string) => {
    setDeleteOrderData({ orderIds: [id], orderStatus: '취소' });
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
            {filteredOrderHistory && filteredOrderHistory.data.length > 0 ? (
              filteredOrderHistory.data.map((v, i) => {
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
        <Styled_PaginationBox.Div>
          {filteredOrderHistory && (
            <Pagination
              activePage={page}
              itemsCountPerPage={itemsCountPerPage}
              totalItemsCount={filteredOrderHistory.pageInfo.totalElements}
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
      <YesOrNo
        message="정말 취소하시겠습니까?"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </>
  );
};

export default Recent;
