import React, { useEffect, useState } from 'react';
import { Styled_CSTable } from './CSTable.style';
import { getAdminCSList, getCSDetail } from '../../../api/GetApi';
import { useNavigate } from 'react-router-dom';
import { CSType } from '../../../model/CStype';
import { Styled_PaginationBox } from '../../pagination_box/PaginationBox.style';
import Pagination from 'react-js-pagination';

const CSAdmin = ({ width }: { width: number }) => {
  const navigate = useNavigate();
  const [cs, setCS] = useState<CSType>();
  const [page, setPage] = useState<number>(1);
  const itemsCountPerPage = 10;

  useEffect(() => {
    getAdminCSList(page, itemsCountPerPage).then(data => {
      setCS(data);
    });
  }, [page]);

  const titleHandler = (id: string) => {
    getCSDetail(id).then(() => {
      navigate(`/customer/detail/${id}`);
    });
  };

  const PatchHandler = (id: string) => {
    getCSDetail(id).then(() => navigate(`/admin/answer/${id}`));
  };

  return (
    <>
      <Styled_CSTable.Container width={width}>
        <div>
          <Styled_CSTable.H1>
            <span>1:1 문의 상태 관리</span>
          </Styled_CSTable.H1>
        </div>
        <Styled_CSTable.Table width={width}>
          <colgroup>
            <col style={{ width: '20%' }}></col>
            <col style={{ width: '50%' }}></col>
            <col style={{ width: '15%' }}></col>
            <col style={{ width: '15%' }}></col>
          </colgroup>
          <thead>
            <tr>
              <Styled_CSTable.Th className="date">날짜</Styled_CSTable.Th>
              <Styled_CSTable.Th className="title">제목</Styled_CSTable.Th>
              <Styled_CSTable.Th className="status">상태</Styled_CSTable.Th>
              <Styled_CSTable.Th className="delete-patch">
                답글달기
              </Styled_CSTable.Th>
            </tr>
          </thead>
          {cs && cs.data.length > 0 ? (
            <tbody>
              {cs.data.map((v, i) => (
                <Styled_CSTable.Tr key={i}>
                  <td>{new Date(v.createdAt).toLocaleDateString()}</td>
                  <Styled_CSTable.Td className="title-body">
                    <button onClick={() => titleHandler(v.id)}>
                      {v.title}
                    </button>
                  </Styled_CSTable.Td>
                  <td>{v.status}</td>
                  <td>
                    {v.status === '접수' ? (
                      <button
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          PatchHandler(v.id);
                        }}
                      >
                        답글달기
                      </button>
                    ) : (
                      <button disabled>답변완료</button>
                    )}
                  </td>
                </Styled_CSTable.Tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <Styled_CSTable.Tr>
                <Styled_CSTable.NoList colSpan={4}>
                  <span style={{ color: 'var(--light-border-color)' }}>
                    등록된 문의내역이 없습니다
                  </span>
                </Styled_CSTable.NoList>
              </Styled_CSTable.Tr>
            </tbody>
          )}
        </Styled_CSTable.Table>
        <Styled_PaginationBox.Div>
          {cs && (
            <Pagination
              activePage={page}
              itemsCountPerPage={itemsCountPerPage}
              totalItemsCount={cs.pageInfo.totalElements}
              pageRangeDisplayed={5}
              prevPageText={'<'}
              nextPageText={'>'}
              onChange={page => {
                setPage(page);
              }}
            />
          )}
        </Styled_PaginationBox.Div>
      </Styled_CSTable.Container>
    </>
  );
};

export default CSAdmin;
