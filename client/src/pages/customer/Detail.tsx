import React from 'react';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Detail } from './Detail.style';
import AskTable from '../../components/table/AskTable';
import { CSDetailAtom } from '../../recoil/CS';
import { useRecoilValue } from 'recoil';

const Detail = () => {
  const CSDetail = useRecoilValue(CSDetailAtom);

  return (
    <Styled_Layout.Container>
      <Styled_Layout.Div_WithNoSidebar>
        <Styled_Detail.Container>
          <div className="header">
            <Styled_Layout.H1>질문 상세 페이지</Styled_Layout.H1>
          </div>
          <div className="body">
            <div>
              <Styled_Detail.H1>{CSDetail.title}</Styled_Detail.H1>
              <div className="detail">{CSDetail.content}</div>
            </div>
            <div>
              <Styled_Detail.H1>답변</Styled_Detail.H1>
              <div className="detail">답변입니다 어쩌구</div>
            </div>
            <AskTable title="1:1 문의 리스트" />
          </div>
        </Styled_Detail.Container>
      </Styled_Layout.Div_WithNoSidebar>
    </Styled_Layout.Container>
  );
};

export default Detail;
