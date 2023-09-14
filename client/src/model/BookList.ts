import { PageInfo } from './Pagination';

export interface BookInfo {
  id: string;
  author: string;
  date: string;
  imgSrc: string;
  name: string;
  price: number;
  publisher: string;
  bookmark: boolean;
}

export interface BookList {
  data: BookInfo[];
  pageInfo: PageInfo;
}

export interface BookMarkList {
  id: number;
  book: {
    id: string;
    author: string;
    date: string;
    imgSrc: string;
    name: string;
    price: number;
    publisher: string;
    category: {
      id: string;
      name: string;
      link: string;
    };
  };
}
