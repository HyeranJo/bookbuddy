import React, { useState } from 'react';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Apply } from './Apply.styled';
import RedButton from '../../components/buttons/RedButton';
import Editor from '../../components/input/Editor';
import {
  CSContentAtom,
  CSPatchClickedAtom,
  CSDetailAtom,
  CharacterCount,
  AskDeleteModal,
} from '../../recoil/CS';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ApplyDeleteModal from '../../components/modal/AskDeleteModal';
import { CSPatchType } from '../../model/CStype';

const Apply = () => {
  const value = useRecoilValue(CSContentAtom);
  const [title, setTitle] = useState('');
  const csPatchClicked = useRecoilValue(CSPatchClickedAtom);
  const [csDetail, setCSDetail] = useRecoilState(CSDetailAtom);
  const [patchValue, setPatchValue] = useState(csDetail.question.title);
  const characterCount = useRecoilValue(CharacterCount);
  const setIsOpen = useSetRecoilState(AskDeleteModal);
  const [finalData, setFinalData] = useState<{
    boardId?: string;
    title: string;
    content: string;
  }>();
  const [finalPatchData, setFinalPatchData] = useState<CSPatchType>();

  const submitHandler = () => {
    if (characterCount <= 5) {
      alert('⚠️ 내용은 5글자 이상 입력하셔야 합니다');
      console.log(value);
    } else if (title.length === 0) {
      alert('⚠️ 제목을 입력하세요');
    } else {
      setFinalData({
        title: title,
        content: value,
      });
      setIsOpen(true);
    }
  };

  const patchHandler = () => {
    if (characterCount <= 5) {
      alert('⚠️ 내용은 5글자 이상 입력하셔야 합니다');
    } else if (csDetail.question.title.length === 0) {
      alert('⚠️ 제목을 입력하세요');
    } else {
      setFinalPatchData({
        boardId: csDetail.question.id,
        title: csDetail.question.title,
        content: csDetail.question.content,
      });
      setIsOpen(true);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (csPatchClicked === true) {
      setPatchValue(e.target.value);
      setCSDetail({
        ...csDetail,
        question: {
          ...csDetail.question,
          title: e.target.value,
        },
      });
    } else {
      setTitle(e.target.value);
    }
  };

  return (
    <>
      <Styled_Layout.Container>
        <Styled_Layout.Div_WithNoSidebar>
          <Styled_Apply.Container>
            <div className="header">
              <Styled_Layout.H1>1:1 문의 작성</Styled_Layout.H1>
            </div>

            <div className="apply_group">
              <div className="title_group">
                <label htmlFor="apply_title">제목 ►</label>
                <input
                  id="apply_title"
                  placeholder="제목을 입력하세요"
                  value={csPatchClicked === true ? patchValue : title}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="body_group">
                <label htmlFor="apply_body">내용 ►</label>
                <div id="apply_body">
                  <Editor />
                  <div className="submit">
                    {csPatchClicked === true ? (
                      <RedButton name="수정하기" onClick={patchHandler} />
                    ) : (
                      <RedButton name="등록하기" onClick={submitHandler} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Styled_Apply.Container>
        </Styled_Layout.Div_WithNoSidebar>
      </Styled_Layout.Container>
      {csPatchClicked ? (
        <ApplyDeleteModal
          message="수정한 내용을 등록하시겠습니까?"
          modalName="applyPatch"
          finalPatchData={finalPatchData}
        />
      ) : (
        <ApplyDeleteModal
          message="작성한 내용을 등록하시겠습니까?"
          modalName="applyPost"
          finalData={finalData}
        />
      )}
    </>
  );
};

export default Apply;
