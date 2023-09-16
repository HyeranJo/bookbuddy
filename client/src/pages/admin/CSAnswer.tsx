import React, { useEffect, useState } from 'react';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_CSAnswer } from './CSAnswer.style';
import {
  CSContentAtom,
  CSDetailAtom,
  CharacterCount,
  IsOpenModalAtom,
} from '../../recoil/CS';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getCSDetail } from '../../api/GetApi';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../../components/input/Editor';
import RedButton from '../../components/buttons/RedButton';
import { postCSAnswerData } from '../../api/PostApi';
import YesOrNoModal from '../../components/modal/YesOrNoModal';
import { PostCSAnswerType } from '../../model/CStype';

const CSAnswer = () => {
  const params = useParams();
  const boardId = params.boardId;
  const [csDetail, setCSDetail] = useRecoilState(CSDetailAtom);
  const value = useRecoilValue(CSContentAtom);
  const navigate = useNavigate();
  const characterCount = useRecoilValue(CharacterCount);
  const setIsOpen = useSetRecoilState(IsOpenModalAtom);
  const [finalAnswerData, setFinalAnswerData] = useState<PostCSAnswerType>();

  useEffect(() => {
    if (boardId) {
      getCSDetail(boardId).then(data => {
        setCSDetail(data);
      });
    }
  }, []);

  const submitHandler = () => {
    if (characterCount > 5) {
      const data = {
        boardId: boardId,
        content: value,
      };
      setFinalAnswerData(data);
      setIsOpen(true);
    } else {
      alert('⚠️ 5글자 이상 입력하셔야 합니다');
    }
  };

  return (
    <>
      <Styled_Layout.Container>
        <Styled_Layout.Div_WithNoSidebar>
          <Styled_CSAnswer.Container>
            <div className="header">
              <Styled_Layout.H1>1:1 문의 답변 등록하기</Styled_Layout.H1>
            </div>
            <div className="body">
              <div>
                <Styled_CSAnswer.H1>
                  {csDetail.question.title}
                </Styled_CSAnswer.H1>
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
      <YesOrNoModal
        message="등록 후에는 수정, 삭제할 수 없습니다. 작성한 내용을 등록하시겠습니까?"
        modalName="adminAnswerPost"
        finalAnswerData={finalAnswerData}
      />
    </>
  );
};

export default CSAnswer;
