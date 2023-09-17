import React, { useEffect, useState } from 'react';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Apply } from './Apply.styled';
import RedButton from '../../components/buttons/RedButton';
import Editor from '../../components/input/Editor';
import {
  CSContentAtom,
  CSPatchClickedAtom,
  CSDetailAtom,
  CharacterCount,
} from '../../recoil/CS';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CSPatchType } from '../../model/CStype';
import YesOrNo from '../../components/modal/YesOrNo';
import { patchCS } from '../../api/PatchApi';
import { useNavigate } from 'react-router-dom';
import { isYesClickedAtom } from '../../recoil/Modal';
import { postCSData } from '../../api/PostApi';

const Apply = () => {
  const value = useRecoilValue(CSContentAtom);
  const [title, setTitle] = useState('');
  const [csPatchClicked, setCSPatchClicked] =
    useRecoilState(CSPatchClickedAtom);
  const [csDetail, setCSDetail] = useRecoilState(CSDetailAtom);
  const [patchValue, setPatchValue] = useState(csDetail.question.title);
  const characterCount = useRecoilValue(CharacterCount);
  const [finalData, setFinalData] = useState<{
    boardId?: string;
    title: string;
    content: string;
  }>();
  const [finalPatchData, setFinalPatchData] = useState<CSPatchType>();
  const navigate = useNavigate();
  const [isYesClicked, setIsYesClicked] = useRecoilState(isYesClickedAtom);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (csPatchClicked === true && isYesClicked === true) {
      finalPatchData &&
        patchCS(finalPatchData)
          .then(() => {
            alert('수정한 내용이 등록되었습니다');
            navigate(`/customer/detail/${finalPatchData.boardId}`);
          })
          .catch(err =>
            alert(`수정한 내용이 등록되지 않았습니다. error : ${err}`),
          );
      setIsYesClicked(false);
      setCSPatchClicked(false);
    } else if (csPatchClicked === false && isYesClicked === true) {
      finalData &&
        postCSData(finalData).then(data =>
          navigate(`/customer/detail/${data.id}`),
        );
      setIsYesClicked(false);
    }
  }, [isYesClicked]);

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
    if (characterCount <= 1) {
      alert('⚠️ 내용을 수정해주세요');
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
        <YesOrNo
          message="수정한 내용을 등록하시겠습니까?"
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      ) : (
        <YesOrNo
          message="작성한 내용을 등록하시겠습니까?"
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default Apply;
