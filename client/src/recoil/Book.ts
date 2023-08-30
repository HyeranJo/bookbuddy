import { atom } from 'recoil';

export const BookInfo = atom({
  key: 'Book',
  default: {
    id: '',
    name: '',
    price: 0,
    imgSrc: '',
    author: '',
    publisher: '',
    date: '',
  },
});
