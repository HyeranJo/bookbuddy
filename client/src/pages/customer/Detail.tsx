import React, { useEffect } from 'react';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Detail } from './Detail.style';
import AskTable from '../../components/table/AskTable';
import { CSDetailAtom } from '../../recoil/CS';
import { useRecoilState } from 'recoil';
import { getCSDetail } from '../../api/GetApi';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const params = useParams();
  const boardId = params.boardId;
  const [csDetail, setCSDetail] = useRecoilState(CSDetailAtom);

  useEffect(() => {
    if (boardId) {
      getCSDetail(boardId).then(data => {
        setCSDetail(data);
      });
    }
  }, []);

  return (
    <Styled_Layout.Container>
      <Styled_Layout.Div_WithNoSidebar>
        <Styled_Detail.Container>
          <div className="header">
            <Styled_Layout.H1>질문 상세 페이지</Styled_Layout.H1>
          </div>
          <div className="body">
            <div>
              <Styled_Detail.H1>{csDetail.question.title}</Styled_Detail.H1>
              <div className="detail">
                <pre
                  dangerouslySetInnerHTML={{
                    __html: csDetail.question.content,
                  }}
                />
              </div>
            </div>
            <div>
              <Styled_Detail.H1>답변</Styled_Detail.H1>
              <div className="detail">
                <pre
                  dangerouslySetInnerHTML={{
                    __html: csDetail.answer.content,
                  }}
                />
              </div>
            </div>
            <AskTable title="1:1 문의 리스트" />
          </div>
        </Styled_Detail.Container>
      </Styled_Layout.Div_WithNoSidebar>
    </Styled_Layout.Container>
  );
};

export default Detail;
