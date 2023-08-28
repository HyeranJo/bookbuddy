import { atom } from 'recoil';

// booklist 사이드 메뉴 아이디
export const SidebarIdAtom = atom({
  key: 'SidebarIdAtom',
  default: 1,
});

// 현재 페이지 번호
export const PageAtom = atom({
  key: 'PageAtom',
  default: 1,
});
