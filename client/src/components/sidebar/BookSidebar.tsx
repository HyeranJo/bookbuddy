import React from 'react';
import { Styled_Sidebar } from './BookSidebar.style';
import { SidebarIdAtom } from '../../recoil/BookList';
import { useSetRecoilState } from 'recoil';
import category from '../../utils/SidebarCategory';
import { useNavigate } from 'react-router-dom';

const BookSidebar = () => {
  const categoryKeys = Object.keys(category);
  const categoryValues = Object.values(category);
  const setSidebarId = useSetRecoilState(SidebarIdAtom);
  const navigate = useNavigate();

  /** 클릭한 사이드 메뉴 id를 recoil에 저장하는 함수 */
  const onClickHandler = (value: number) => {
    setSidebarId(value);
  };

  return (
    <Styled_Sidebar.Container>
      <Styled_Sidebar.Div>
        {categoryKeys.map((v, i) => {
          return (
            <Styled_Sidebar.Span
              key={i}
              onClick={() => {
                onClickHandler(categoryValues[i]);
                navigate('/list');
              }}
            >
              {v}
            </Styled_Sidebar.Span>
          );
        })}
      </Styled_Sidebar.Div>
    </Styled_Sidebar.Container>
  );
};

export default BookSidebar;
