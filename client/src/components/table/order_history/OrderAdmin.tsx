import { useRecoilValue } from 'recoil';
import { PageAtom } from '../../../recoil/Sidebars';
import { useEffect, useState } from 'react';
import { getAdminOrderHistory } from '../../../api/GetApi';
import PaginationBox from '../../pagination_box/PaginationBox';
import { Styled_History } from './History.style';
import {
  OrderHistoryType,
  patchOrderStatusType,
} from '../../../model/paymentType';
import { patchOrderStatus } from '../../../api/PatchApi';

const AdminFull = () => {
  const page = useRecoilValue(PageAtom);
  const [adminfull, setAdminFull] = useState<OrderHistoryType>();

  useEffect(() => {
    getAdminOrderHistory(page).then(data => setAdminFull(data));
  }, [page]);

  const statusChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string,
  ) => {
    const data: patchOrderStatusType = {
      orderIds: [id],
      orderStatus: e.target.value as
        | '주문완료'
        | '결제완료'
        | '배송준비중'
        | '배송중'
        | '배송완료'
        | '취소',
    };
    patchOrderStatus(data);
  };

  return (
    <Styled_History.Container>
      <Styled_History.H1>전체 주문 상태 관리</Styled_History.H1>

      <Styled_History.Table>
        <thead>
          <tr>
            <Styled_History.Th className="date">주문일자</Styled_History.Th>
            <Styled_History.Th className="number">주문번호</Styled_History.Th>
            <Styled_History.Th className="books">도서</Styled_History.Th>
            <Styled_History.Th className="status">상태</Styled_History.Th>
          </tr>
        </thead>
        <tbody>
          {adminfull && adminfull.data.length > 0 ? (
            adminfull.data.map((v, i) => {
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
                  <td>
                    <select
                      onChange={e => {
                        statusChangeHandler(e, v.id);
                      }}
                    >
                      <option defaultValue={v.status}>{v.status}</option>
                      <option value="주문완료">주문완료</option>
                      <option value="결제완료">결제완료</option>
                      <option value="배송준비중">배송준비중</option>
                      <option value="배송중">배송중</option>
                      <option value="배송완료">배송완료</option>
                      <option value="취소">취소</option>
                    </select>
                  </td>
                </Styled_History.Tr>
              );
            })
          ) : (
            <Styled_History.Tr>
              <td>주문 내역이 없습니다</td>
            </Styled_History.Tr>
          )}
        </tbody>
      </Styled_History.Table>
      <div className="pagination">
        {adminfull && (
          <PaginationBox
            itemsCountPerPage={5}
            totalItemsCount={adminfull.pageInfo.totalElements}
          />
        )}
      </div>
    </Styled_History.Container>
  );
};

export default AdminFull;
