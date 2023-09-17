import { atom } from 'recoil';
import { CSDetailType } from '../model/CStype';

export const CSContentAtom = atom<string>({
  key: 'CSContentAtom',
  default: '',
});

export const CSDetailAtom = atom<CSDetailType>({
  key: 'CSDetailAtom',
  default: {
    answer: {
      boardId: '',
      content: '',
    },
    question: {
      id: '',
      title: '',
      content: '',
      memberId: '',
    },
  },
});

export const CSPatchClickedAtom = atom<boolean>({
  key: 'CSPatchClickedAtom',
  default: false,
});

export const CharacterCount = atom<number>({
  key: 'CharacterCount',
  default: 0,
});
