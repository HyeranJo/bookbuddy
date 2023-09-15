import React, { useEffect, useRef, useState } from 'react';
import { Styled_Sidebar } from './BookSidebar.style';
import { SidebarIdAtom } from '../../recoil/Sidebars';
import { useRecoilState, useSetRecoilState } from 'recoil';
import category from '../../utils/SidebarCategory';
import { useLocation, useNavigate } from 'react-router-dom';

const BookSidebar = () => {
  const categoryKeys = Object.keys(category);
  const categoryValues = Object.values(category);
  const [sidebarId, setSidebarId] = useRecoilState(SidebarIdAtom);
  const navigate = useNavigate();
  const location = useLocation();
  // focus 상태 유지 (사이드바 외 다른 위치 클릭시 focus 유지)
  const [clickedList, setClickedList] = useState<boolean[]>([]);

  useEffect(() => {
    // 페이지 첫 진입시 (다른 페이지에선 focus out)
    if (location.pathname === '/list') {
      // clickedList index(sidebarId - 1) => true 나머지 => false
      setClickedList(
        Array(categoryKeys.length)
          .fill(false)
          .map((v, i) => {
            if (i === sidebarId - 1) {
              return true;
            } else {
              return false;
            }
          }),
      );
    }
  }, []);

  /** click handler  */
  const onClickHandler = (value: number) => {
    // 클릭한 사이드 메뉴 id를 recoil에 저장하는 함수
    setSidebarId(value);

    // 클릭한 사이드 메뉴를 true 로 변환, 나머지는 false로 변환
    const copyClicked = [...clickedList].map((v, i) => {
      if (v === true) return false;
      if (i === value - 1) return true;
      else return v;
    });
    setClickedList(copyClicked);
  };

  return (
    <Styled_Sidebar.Container>
      <Styled_Sidebar.Div>
        {categoryKeys.map((v, i) => {
          if (i === clickedList.indexOf(true)) {
            return (
              <Styled_Sidebar.Button
                key={i}
                onClick={() => {
                  onClickHandler(categoryValues[i]);
                  navigate('/list');
                }}
                style={
                  clickedList
                    ? {
                        color: 'var(--primary-background-color)',
                        fontWeight: 'bold',
                      }
                    : {}
                }
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
