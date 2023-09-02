import React from 'react';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Apply } from './Apply.styled';
import RedButton from '../../components/buttons/RedButton';
import MyComponent from '../../components/input/Editor';

const Apply = () => {
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
              <input id="apply_title" placeholder="제목을 입력하세요" />
            </div>

            <div className="body_group">
              <label htmlFor="apply_body">내용 ►</label>
              <div id="apply_body">
                <MyComponent />
              </div>
            </div>
          </div>
          <div className="submit">
            <RedButton name="등록하기" />
          </div>
        </Styled_Apply.Container>
      </Styled_Layout.Div_WithNoSidebar>
    </Styled_Layout.Container>
  );
};

export default Apply;
