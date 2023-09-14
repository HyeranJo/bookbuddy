import { Styled_CSTable } from './CSTable.style';
import RedButton from '../../buttons/RedButton';
import { useNavigate } from 'react-router-dom';
import { getCSDetail, getCSList } from '../../../api/GetApi';
import { useEffect, useState } from 'react';
import { CSType } from '../../../model/CStype';
import {
  AskDeleteModal,
  CSDetailAtom,
  CSPatchClickedAtom,
} from '../../../recoil/CS';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ApplyDeleteModal from '../../modal/AskDeleteModal';
import { PageAtom } from '../../../recoil/Sidebars';
import PaginationBox from '../../pagination_box/PaginationBox';

interface AskTableProps {
  title: string;
}

const CSTable = ({ title }: AskTableProps) => {
  const navigate = useNavigate();
  const [cs, setCS] = useState<CSType>();
  const [deleteClicked, setDeleteClicked] = useState<boolean>(false); // 페이지 리렌더링
  const setCSDetail = useSetRecoilState(CSDetailAtom);
  const setCSPatchClicked = useSetRecoilState(CSPatchClickedAtom);
  const setIsOpen = useSetRecoilState(AskDeleteModal);
  const [id, setId] = useState('');
  const page = useRecoilValue(PageAtom);

  useEffect(() => {
    getCSList(page).then(data => {
      setCS(data);
    });
    if (deleteClicked === true) {
      setDeleteClicked(false);
    }
  }, [deleteClicked, page]);

  const deleteHandler = (id: string) => {
    setIsOpen(true);
    setId(id);
  };

  const PatchHandler = (id: string) => {
    getCSDetail(id).then(() => navigate('/customer/apply'));
    setCSPatchClicked(true);
  };

  const titleHandler = (id: string) => {
    getCSDetail(id).then(() => {
      navigate(`/customer/detail/${id}`);
    });
  };

  return (
    <div>
      <Styled_CSTable.Container>
        <div>
          <Styled_CSTable.H1>
            <span>{title}</span>
            <div>
              <RedButton
                name="문의하기"
                height={30}
                width={100}
                onClick={() => {
                  navigate('/customer/apply');
                }}
              />
            </div>
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
                삭제 / 수정
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
                    <Styled_CSTable.DeletePatchBtn
                      onClick={() => {
                        deleteHandler(v.id);
                      }}
                    >
                      삭제
                    </Styled_CSTable.DeletePatchBtn>{' '}
                    /{' '}
                    <Styled_CSTable.DeletePatchBtn
                      onClick={() => {
                        PatchHandler(v.id);
                      }}
                    >
                      수정
                    </Styled_CSTable.DeletePatchBtn>
                  </td>
                </Styled_CSTable.Tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <Styled_CSTable.Tr>
                <td></td>
                <Styled_CSTable.Td className="title-body">
                  등록된 문의내역이 없습니다
                </Styled_CSTable.Td>
                <td></td>
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
      <ApplyDeleteModal id={id} setDeleteClicked={setDeleteClicked} />
    </div>
  );
};

export default CSTable;
