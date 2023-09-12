import { Styled_AskTable } from './AskTable.style';
import RedButton from '../buttons/RedButton';
import { useNavigate } from 'react-router-dom';
import { getCSDetail, getCSList } from '../../api/GetApi';
import { useEffect, useState } from 'react';
import { CSListType } from '../../model/CStype';
import {
  AskDeleteModal,
  CSDetailAtom,
  CSPatchClickedAtom,
} from '../../recoil/CS';
import { useSetRecoilState } from 'recoil';
import ApplyDeleteModal from '../modal/AskDeleteModal';

interface AskTableProps {
  title: string;
}

const AskTable = ({ title }: AskTableProps) => {
  const navigate = useNavigate();
  const [csList, setCSList] = useState<CSListType[]>();
  const [deleteClicked, setDeleteClicked] = useState<boolean>(false); // 페이지 리렌더링
  const setCSDetail = useSetRecoilState(CSDetailAtom);
  const setCSPatchClicked = useSetRecoilState(CSPatchClickedAtom);
  const setIsOpen = useSetRecoilState(AskDeleteModal);
  const [id, setId] = useState('');

  useEffect(() => {
    getCSList().then(data => {
      setCSList(data);
    });
    if (deleteClicked === true) {
      setDeleteClicked(false);
    }
  }, [deleteClicked]);

  const deleteHandler = (id: string) => {
    setIsOpen(true);
    setId(id);
  };

  const PatchHandler = (id: string) => {
    getCSDetail(id, setCSDetail).then(() => navigate('/customer/apply'));
    setCSPatchClicked(true);
  };

  const titleHandler = (id: string) => {
    getCSDetail(id, setCSDetail).then(() => {
      navigate(`/customer/detail/${id}`);
    });
  };

  return (
    <div>
      <Styled_AskTable.Container>
        <div>
          <Styled_AskTable.H1>
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
          </Styled_AskTable.H1>
        </div>
        <Styled_AskTable.Table>
          <colgroup>
            <col style={{ width: '20%' }}></col>
            <col style={{ width: '50%' }}></col>
            <col style={{ width: '15%' }}></col>
            <col style={{ width: '15%' }}></col>
          </colgroup>
          <thead>
            <tr>
              <Styled_AskTable.Th className="date">날짜</Styled_AskTable.Th>
              <Styled_AskTable.Th className="title">제목</Styled_AskTable.Th>
              <Styled_AskTable.Th className="status">상태</Styled_AskTable.Th>
              <Styled_AskTable.Th className="delete-patch">
                삭제 / 수정
              </Styled_AskTable.Th>
            </tr>
          </thead>
          {csList && csList.length > 0 ? (
            <tbody>
              {csList.map((v, i) => (
                <Styled_AskTable.Tr key={i}>
                  <td>{new Date(v.createdAt).toLocaleDateString()}</td>
                  <Styled_AskTable.Td className="title-body">
                    <button onClick={() => titleHandler(v.id)}>
                      {v.title}
                    </button>
                  </Styled_AskTable.Td>
                  <td>접수중</td>
                  <td>
                    <Styled_AskTable.DeletePatchBtn
                      onClick={() => {
                        deleteHandler(v.id);
                      }}
                    >
                      삭제
                    </Styled_AskTable.DeletePatchBtn>
                    /
                    <Styled_AskTable.DeletePatchBtn
                      onClick={() => {
                        PatchHandler(v.id);
                      }}
                    >
                      수정
                    </Styled_AskTable.DeletePatchBtn>
                  </td>
                </Styled_AskTable.Tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <Styled_AskTable.Tr>
                <td></td>
                <Styled_AskTable.Td className="title-body">
                  등록된 문의내역이 없습니다
                </Styled_AskTable.Td>
                <td></td>
              </Styled_AskTable.Tr>
            </tbody>
          )}
        </Styled_AskTable.Table>
      </Styled_AskTable.Container>
      <ApplyDeleteModal id={id} setDeleteClicked={setDeleteClicked} />
    </div>
  );
};

export default AskTable;
