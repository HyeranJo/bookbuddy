import { atom } from 'recoil';

export const BookId = atom({
  key: 'Book',
  default: {
    id: '',
  },
});
