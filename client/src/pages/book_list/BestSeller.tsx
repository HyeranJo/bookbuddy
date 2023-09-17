import React, { useEffect, useState } from 'react';
import { BookList } from '../../model/BookList';
import { useRecoilValue } from 'recoil';
import { PageAtom } from '../../recoil/Sidebars';
import { getBookList } from '../../api/GetApi';
import BooksInOrder from '../../components/book/BooksInOrder';

const BestSeller = () => {
  const [listData, setListData] = useState<BookList>();
  const [isLoading, setIsLoading] = useState(false);
  const page = useRecoilValue(PageAtom);
  const size = 5;

  useEffect(() => {
    const order = 'bookmark';
    getBookList({ setListData, setIsLoading, page, size }, order);
  }, []);

  return (
    <BooksInOrder
      listData={listData}
      isLoading={isLoading}
      title="베스트셀러"
    />
  );
};

export default BestSeller;
