import { atom } from 'recoil';

// mypage 사이드바 클릭 정보
export const NavScrollAtom = atom({
  key: 'NavScrollAtom',
  default: 0,
});

// booklist 사이드바 메뉴 아이디
export const SidebarIdAtom = atom({
  key: 'SidebarIdAtom',
  default: 1,
});

// pagenation box 현재 페이지 번호
export const PageAtom = atom({
  key: 'PageAtom',
  default: 1,
});
