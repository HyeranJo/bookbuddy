import React from 'react';
import { Styled_AskTable } from './AskTable.style';
import RedButton from '../buttons/RedButton';
import { useNavigate } from 'react-router-dom';

interface AskTableProps {
  title: string;
}

const AskTable = ({ title }: AskTableProps) => {
  const navigate = useNavigate();

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
            <col style={{ width: '60%' }}></col>
            <col style={{ width: '20%' }}></col>
          </colgroup>
          <thead>
            <Styled_AskTable.Th className="date">날짜</Styled_AskTable.Th>
            <Styled_AskTable.Th className="title">제목</Styled_AskTable.Th>
            <Styled_AskTable.Th className="status">상태</Styled_AskTable.Th>
          </thead>
          <tbody>
            <Styled_AskTable.Tr>
              <td>2023.08.15</td>
              <Styled_AskTable.Td className="title-body">
                문의 드립니다.문의 드립니다.문의 드립니다.문의 드립니다.문의
                드립니다.문의 드립니다.문의 드립니다.문의 드립니다.문의
                드립니다.문의 드립니다.문의 드립니다.문의 드립니다.문의
                드립니다.문의 드립니다.문의 드립니다.
              </Styled_AskTable.Td>
              <td>답변완료</td>
            </Styled_AskTable.Tr>
          </tbody>
        </Styled_AskTable.Table>
      </Styled_AskTable.Container>
    </div>
  );
};

export default AskTable;
