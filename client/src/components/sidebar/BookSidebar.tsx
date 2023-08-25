import React from 'react';
import { Styled_Sidebar } from './BookSidebar.style';
import { SidebarIdAtom } from '../../recoil/BookList';
import { useSetRecoilState } from 'recoil';

type Category = {
  [key: string]: number;
};

const BookSidebar = () => {
  const category: Category = {
    요리일반: 1,
    요리에세이: 2,
    테마별요리: 3,
    '베이킹/간식': 4,
    계절요리: 5,
    재료별요리: 6,
    나라별요리: 7,
    생활요리: 8,
    전문요리: 9,
    '와인/커피/음료': 10,
    요리수험서: 11,
  };
  const categoryKeys = Object.keys(category);
  const categoryValues = Object.values(category);
  const setSidebarId = useSetRecoilState(SidebarIdAtom);

  /** 클릭한 사이드 메뉴 id를 recoil에 저장하는 함수 */
  const onClickHandler = (value: number) => {
    setSidebarId(value);
  };

  return (
    <Styled_Sidebar.Container>
      <Styled_Sidebar.Div>
        {categoryKeys.map((v, i) => {
          return (
            <span
              key={i}
              onClick={() => {
                onClickHandler(categoryValues[i]);
              }}
            >
              {v}
            </span>
          );
        })}
      </Styled_Sidebar.Div>
    </Styled_Sidebar.Container>
  );
};

export default BookSidebar;
