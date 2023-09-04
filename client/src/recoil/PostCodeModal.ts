import { atom } from 'recoil';

// 주소검색 모달 open, close
export const PostCodeModalAtom = atom<boolean>({
  key: 'PostCodeModalAtom',
  default: false,
});

// 검색한 주소
export const PostCodeAdrsAtom = atom<{ 주소: string; 우편번호: string }>({
  key: 'PostCodeAdrsAtom',
  default: { 주소: '', 우편번호: '' },
});
