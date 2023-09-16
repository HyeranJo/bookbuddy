import { BookInfo } from './BookList';

export interface CartListType {
  id: string;
  book: BookInfo;
  quantity: number;
  price: number;
}
