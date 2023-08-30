export interface OrderListType {
  id: string;
  book: {
    id: string;
    name: string;
    author: string;
    publisher: string;
    price: number;
    date: string;
    imgSrc: string;
    bookmarks: boolean;
  };
  quantity: number;
  price: number;
}
