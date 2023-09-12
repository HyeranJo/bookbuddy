import React, { useState } from 'react';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Apply } from './Apply.styled';
import RedButton from '../../components/buttons/RedButton';
import Editor from '../../components/input/Editor';
import {
  CSContentAtom,
  CSPatchClickedAtom,
  CSDetailAtom,
} from '../../recoil/CS';
import { useRecoilState, useRecoilValue } from 'recoil';
import { postCSData } from '../../api/PostApi';
import { patchCS } from '../../api/PatchApi';
import { useNavigate } from 'react-router-dom';

const Apply = () => {
  const value = useRecoilValue(CSContentAtom);
  const [title, setTitle] = useState('');
  const [csPatchClicked, setCSPatchClicked] =
    useRecoilState(CSPatchClickedAtom);
  const [csDetail, setCSDetail] = useRecoilState(CSDetailAtom);
  const [patchValue, setPatchValue] = useState(csDetail.title);
  const navigate = useNavigate();

  const submitHandler = () => {
    const data = {
      title: title,
      content: value,
    };
    postCSData(data).then(data => navigate(`/customer/detail/${data.id}`));
  };

  const patchHandler = () => {
    setCSPatchClicked(false);

    const data = {
      boardId: csDetail.id,
      title: csDetail.title,
      content: csDetail.content,
    };

    patchCS(data)
      .then(() => {
        alert('수정한 내용이 등록되었습니다');
        navigate(`/customer/detail/${data.boardId}`);
      })
      .catch(err => alert(`수정한 내용이 등록되지 않았습니다. error : ${err}`));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (csPatchClicked === true) {
      setPatchValue(e.target.value);
      setCSDetail({ ...csDetail, title: e.target.value });
    } else {
      setTitle(e.target.value);
    }
  };

  return (
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
  );
};

export default Apply;
