import React, { useEffect, useRef, useState } from 'react';
import { Styled_Sidebar } from './BookSidebar.style';
import { SidebarIdAtom } from '../../recoil/Sidebars';
import { useSetRecoilState } from 'recoil';
import category from '../../utils/SidebarCategory';
import { useLocation, useNavigate } from 'react-router-dom';

const BookSidebar = () => {
  const categoryKeys = Object.keys(category);
  const categoryValues = Object.values(category);
  const setSidebarId = useSetRecoilState(SidebarIdAtom);
  const navigate = useNavigate();
  const firstCategoryRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    // 페이지 첫 진입시 사이드바 첫 번째 메뉴에 focus
    if (firstCategoryRef.current && location.pathname === '/list') {
      firstCategoryRef.current.focus();
    }
  }, []);

  /** 클릭한 사이드 메뉴 id를 recoil에 저장하는 함수 */
  const onClickHandler = (value: number) => {
    setSidebarId(value);
  };

  return (
    <Styled_Sidebar.Container>
      <Styled_Sidebar.Div>
        {categoryKeys.map((v, i) => {
          if (i === 0) {
            return (
              <Styled_Sidebar.Button
                key={i}
                onClick={() => {
                  onClickHandler(categoryValues[i]);
                  navigate('/list');
                }}
                ref={firstCategoryRef}
              >
                {v}
              </Styled_Sidebar.Button>
            );
          } else {
            return (
              <Styled_Sidebar.Button
                key={i}
                onClick={() => {
                  onClickHandler(categoryValues[i]);
                  navigate('/list');
                }}
              >
                {v}
              </Styled_Sidebar.Button>
            );
          }
        })}
      </Styled_Sidebar.Div>
    </Styled_Sidebar.Container>
  );
};

export default BookSidebar;
