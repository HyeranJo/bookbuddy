import React from 'react';
import { Styled_MypageSidebar } from './MypageSidebar.style';

const MypageSidebar = () => {
  return (
    <Styled_MypageSidebar.Container>
      <Styled_MypageSidebar.Div>
        <Styled_MypageSidebar.TitleDiv>
          <span>마이페이지</span>
        </Styled_MypageSidebar.TitleDiv>
        <Styled_MypageSidebar.CategoryDiv>
          <span>전체 주문 내역</span>
          <span>1:1 문의 내역</span>
          <span>북마크 리스트</span>
        </Styled_MypageSidebar.CategoryDiv>
      </Styled_MypageSidebar.Div>
    </Styled_MypageSidebar.Container>
  );
};

export default MypageSidebar;
