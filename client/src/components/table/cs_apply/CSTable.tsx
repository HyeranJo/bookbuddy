import { Styled_CSTable } from './CSTable.style';
import RedButton from '../../buttons/RedButton';
import { useNavigate } from 'react-router-dom';
import { getCSDetail, getCSList } from '../../../api/GetApi';
import { useEffect, useState } from 'react';
import { CSType } from '../../../model/CStype';
import { CSDetailAtom, CSPatchClickedAtom } from '../../../recoil/CS';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Styled_PaginationBox } from '../../pagination_box/PaginationBox.style';
import Pagination from 'react-js-pagination';
import YesOrNo from '../../modal/YesOrNo';
import { isYesClickedAtom } from '../../../recoil/Modal';
import { DeleteCSItem } from '../../../api/DeleteApi';

interface AskTableProps {
  title: string;
  width: number;
  deleteClicked: boolean;
  setDeleteClicked: (deleteClicked: boolean) => void;
}

const CSTable = ({
  title,
  width,
  deleteClicked,
  setDeleteClicked,
}: AskTableProps) => {
  const navigate = useNavigate();
  const [cs, setCS] = useState<CSType>();
  const setCSPatchClicked = useSetRecoilState(CSPatchClickedAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const itemsCountPerPage = 10;
  const [isYesClicked, setIsYesClicked] = useRecoilState(isYesClickedAtom);
  const [csDetail, setCSDetail] = useRecoilState(CSDetailAtom);

  useEffect(() => {
    getCSList(page, itemsCountPerPage).then(data => {
      setCS(data);
    });
    if (deleteClicked === true) {
      setDeleteClicked && setDeleteClicked(false);
    }
  }, [deleteClicked, page]);

  useEffect(() => {
    if (isYesClicked === true && id) {
      DeleteCSItem(id);
      setDeleteClicked(true);
      setIsYesClicked(false);
    }
  }, [isYesClicked]);

  const deleteHandler = (id: string) => {
    setIsOpen(true);
    setId(id);
  };

  const PatchHandler = (id: string) => {
    getCSDetail(id).then(data => {
      setCSDetail(data);
      setCSPatchClicked(true);
      navigate('/customer/apply');
    });
  };

  const titleHandler = (id: string) => {
    getCSDetail(id).then(() => {
      navigate(`/customer/detail/${id}`);
      location.reload(); // 컴포넌트 변화 알려주기 위한 새로고침
    });
  };

  return (
    <>
      <Styled_CSTable.Container width={width}>
        <div>
          <Styled_CSTable.H1>
            <span>
              {title}
              <Styled_CSTable.MessageSpan>
                답변완료된 문의는 수정이 불가능합니다
              </Styled_CSTable.MessageSpan>
            </span>

            <div>
              <RedButton
                name="문의하기"
                height={30}
                width={100}
                onClick={() => {
                  setCSPatchClicked(false);
                  navigate('/customer/apply');
                }}
              />
            </div>
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

                  {v.status === '답변완료' ? (
                    <td>
                      <Styled_CSTable.DeletePatchBtn
                        style={{ color: 'var(--light-border-color)' }}
                        onClick={() => {
                          alert('⚠️ 답변완료된 문의글은 수정할 수 없습니다');
                        }}
                      >
                        삭제
                      </Styled_CSTable.DeletePatchBtn>{' '}
                      /{' '}
                      <Styled_CSTable.DeletePatchBtn
                        style={{ color: 'var(--light-border-color)' }}
                        onClick={() => {
                          alert('⚠️ 답변완료된 문의글은 수정할 수 없습니다');
                        }}
                      >
                        수정
                      </Styled_CSTable.DeletePatchBtn>
                    </td>
                  ) : (
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
                  )}
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
      <YesOrNo
        message="정말 삭제하시겠습니까?"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </>
  );
};

export default CSTable;
