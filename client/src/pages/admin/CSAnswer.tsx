import React, { useEffect } from 'react';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_CSAnswer } from './CSAnswer.style';
import { CSContentAtom, CSDetailAtom } from '../../recoil/CS';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getCSDetail } from '../../api/GetApi';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../../components/input/Editor';
import RedButton from '../../components/buttons/RedButton';
import { postCSAnswerData } from '../../api/PostApi';

const CSAnswer = () => {
  const params = useParams();
  const boardId = params.boardId;
  const [csDetail, setCSDetail] = useRecoilState(CSDetailAtom);
  const value = useRecoilValue(CSContentAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (boardId) {
      getCSDetail(boardId).then(data => {
        setCSDetail(data);
      });
    }
  }, []);

  const submitHandler = () => {
    const data = {
      boardId: boardId,
      content: value,
    };
    /** api 전송 및 페이지 이동 */
    postCSAnswerData(data).then(data =>
      navigate(`/customer/detail/${data.boardId}`),
    );
  };

  return (
    <Styled_Layout.Container>
      <Styled_Layout.Div_WithNoSidebar>
        <Styled_CSAnswer.Container>
          <div className="header">
            <Styled_Layout.H1>1:1 문의 답변 등록하기</Styled_Layout.H1>
          </div>
          <div className="body">
            <div>
              <Styled_CSAnswer.H1>{csDetail.question.title}</Styled_CSAnswer.H1>
              <div className="detail">
                <pre
                  dangerouslySetInnerHTML={{
                    __html: csDetail.question.content,
                  }}
                />
              </div>
            </div>
            <div>
              <Styled_CSAnswer.H1>답변 작성</Styled_CSAnswer.H1>
              <Editor />
            </div>
            <div>
              <div className="submit">
                <RedButton name="등록하기" onClick={submitHandler} />
              </div>
            </div>
          </div>
        </Styled_CSAnswer.Container>
      </Styled_Layout.Div_WithNoSidebar>
    </Styled_Layout.Container>
  );
};

export default CSAnswer;
