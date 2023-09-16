import React, { useEffect, useState } from 'react';
import { Styled_CSTable } from './CSTable.style';
import PaginationBox from '../../pagination_box/PaginationBox';
import { getCSDetail, getCSList } from '../../../api/GetApi';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { CSType } from '../../../model/CStype';
import { PageAtom } from '../../../recoil/Sidebars';

const CSAdmin = () => {
  const navigate = useNavigate();
  const page = useRecoilValue(PageAtom);
  const [cs, setCS] = useState<CSType>();

  useEffect(() => {
    getCSList(page).then(data => {
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
      <Styled_CSTable.Container>
        <div>
          <Styled_CSTable.H1>
            <span>1:1 문의 상태 관리</span>
          </Styled_CSTable.H1>
        </div>
        <Styled_CSTable.Table>
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
                <Styled_CSTable.NoList className="title-body" colSpan={4}>
                  <span style={{ color: 'var(--light-border-color)' }}>
                    등록된 문의내역이 없습니다
                  </span>
                </Styled_CSTable.NoList>
              </Styled_CSTable.Tr>
            </tbody>
          )}
        </Styled_CSTable.Table>
        <div className="pagination">
          {cs && (
            <PaginationBox
              itemsCountPerPage={10}
              totalItemsCount={cs.pageInfo.totalElements}
            />
          )}
        </div>
      </Styled_CSTable.Container>
    </>
  );
};

export default CSAdmin;
